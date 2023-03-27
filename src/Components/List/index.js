import React, { useContext, useState } from "react";
import { Context } from "../../App";
import { SettingsContext } from "../context/Settings";
import { Pagination, CloseButton}from "@mantine/core";

const List=(props) => {

    const { itemsOnPage, seeCompletedItems } = useContext(SettingsContext);
    const defUser = useContext(Context);

    const [currentPage, setCurrentPage] = useState(1);

    let listToDisplay = seeCompletedItems ? defUser.list : defUser.list.filter((item)=> !item.complete)

    // const [itemsOnPage, setItemsPerPage] = useState(3);
    // const itemsOnPage = 2;

    // const start = (currentPage-1) * itemsOnPage;
    // const endIndex = start + itemsOnPage;
    // const displayed = defUser.list.slice(start,endIndex);

    const pageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <>
            <div className="list">
                {listToDisplay.map((item)=> {
                    return(
                        <div className="listItem" key={itemsOnPage.id}>
                        <CloseButton 
                        className="deleteButton"
                        onClick={()=> props.toggleComplete(item.id)}
                        title="Close"
                        />
                        <p>{item.text}</p>
                        <p>
                            <small>Assigned to: {item.assignee}</small>
                        </p>
                        <p>
                            <small>Difficulty: {item.difficulty}</small>
                        </p>
                        <p>
                            <div>Complete: {item.complete.toString()}</div>
                        </p>
                    </div>
                );
            })}
            </div>
            <Pagination
            className="page"
            size="sm"
            total={defUser.list.length/3}
            limit={itemsOnPage}
            value={currentPage}
            onChange={pageChange}
            />
            </>
    );
};

export default List;
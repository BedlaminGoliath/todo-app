import React, { useContext, useState } from "react";
import { SettingsContext } from '../context/index';
import { Pagination, CloseButton} from "@mantine/core";

const List=(props) => {

    // const { itemsOnPage, seeCompletedItems } = useContext(SettingsContext);

    const defUser = useContext(SettingsContext);

    console.log(defUser);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsOnPage = defUser.itemsOnPage

    // let listToDisplay = seeCompletedItems ? defUser.list : defUser.list.filter((item)=> !item.complete)

    // const [itemsOnPage, setItemsPerPage] = useState(3);
    // const itemsOnPage = 2;

    const start = (currentPage-1) * itemsOnPage;
    const endIndex = start + itemsOnPage;
    const displayed = defUser.list.slice(start,endIndex);

    const pageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <>
            <div className="list">
                {displayed.map((item)=> {
                    return(
                        <div className="listItem" key={item.id}>
                        <CloseButton 
                        className="deleteButton"
                        onClick={()=> defUser.toggleComplete(item.id)}
                        title="Close"
                        size="l"
                        iconSize={20}
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
            total={defUser.list.length/ itemsOnPage +1 }
            limit={itemsOnPage}
            value={currentPage}
            onChange={pageChange}
            />
            </>
    );
};

export default List;
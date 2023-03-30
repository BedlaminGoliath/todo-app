import React, { useContext, useState } from "react";
<<<<<<< HEAD
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
=======
import { SettingsContext } from "../Context/Settings/Index";
import{Card, Text, Badge, Button, Group} from "@mantine/core";
import { Pagination}from "@mantine/core";

const List=(props)=> {

    const settings = useContext(SettingsContext);
    
    const [page,setPage] = useState(1);
    const todo = settings.list;
    const itemsPerPage = settings.itemsPrPage;
    console.log(settings);
>>>>>>> context-methods3

    const pageCount = Math.ceil(todo.length / itemsPerPage);
    const displayed=todo.slice( (page-1)* itemsPerPage,
    page * itemsPerPage);


    const handlePageChange=(number)=>{
        setPage(number);
    };


    return (
        <>
<<<<<<< HEAD
            <div className="list">
                {displayed.map((item)=> {
                    return(
                        <div className="listItem" key={item.id}>
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
=======
        {displayed.map(
          (item) =>
            item.complete === false && (
              <Card shadow="sm" padding="lg" radius="md" key={item.id} withBorder>
                <Card.Section>
                  <Group position="apart" mt="md" mb="xs">
                    <Text weight={400}>{item.text}</Text>
                    <Badge color="pink" variant="light">
                      Difficulty: {item.difficulty}
                    </Badge>
                  </Group>
                </Card.Section>
                <Text size="sm">Assigned to: {item.assignee}</Text>
                <Button
                  variant="light"
                  color="blue"
                  fullWidth
                  mt="md"
                  radius="md"
                  onClick={() => settings.toggleComplete(item.id)}
                >
                  Complete: {item.complete.toString()}
                </Button>
              </Card>
            )
        )}
>>>>>>> context-methods3
            <Pagination
                current={page}
                onChange={handlePageChange}
                total={pageCount}
                boundaries={3}
                position="center"
            />
        </>
    );
};

export default List;
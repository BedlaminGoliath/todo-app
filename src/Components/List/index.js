import React, { useContext, useState } from "react";
import { SettingsContext } from "../context/Settings/Index";
import{Card, Text, Badge, Button, Group} from "@mantine/core";
import { Pagination}from "@mantine/core";

const List=(props)=> {

    const settings = useContext(SettingsContext);
    
    const [page,setPage] = useState(1);
    const todo = settings.list;
    const itemsPerPage = settings.itemsPrPage;
    console.log(settings);


    const pageCount = Math.ceil(todo.length / itemsPerPage);
    const displayed=todo.slice( (page-1)* itemsPerPage,
    page * itemsPerPage);


    const handlePageChange=(number)=>{
        setPage(number);
    };


    return (
        <>

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
import React, {useContext, useState} from "react";
import { TextInput, Button, Group, Box, Slider, Grid, Center} from "@mantine/core";
import  useForm  from "../../hooks/useForm";
import {v4 as uuid} from "uuid";
import { SettingsContext } from "../Context/Settings/Index";


const Todo = (props)=>{
  const settings = useContext(SettingsContext);

  const {handleChange, handleSubmit} = useForm(addItem, settings.defaultValues);

  const [defaultValues] = useState({ difficulty:4});

  function addItem(item){
    item.id=uuid();
    item.complete=false;
    settings.addItemToList(item)
  }

  return(
    <>
    <Center>
      <header>
        <h1>Todo List: {settings.incomplete}items pending</h1>
      </header>
    </Center>

    <Grid>
      <Grid.Col span={6}>
        <Box maw={300} mx="auto">
        <form onSubmit={handleSubmit}>
          <h2>Add Item:</h2>
          <TextInput label="to Do Item" name="text" type="text" placeholder="What would you like to add ?" onChange={handleChange}/>
          <TextInput
                label="Assigned To"
                name="assignee"
                type="text"
                placeholder="Assignee Name"
                onChange={handleChange}
              />
            <Slider
                label="Difficulty"
                placeholder="Difficulty"
                // radius="xl"
                min={1}
                max={6}
                mb='lg'
                step={1}
                // marks={[
                //   { value: 10, label: "10%" },
                //   { value: 20, label: "20%" },
                //   { value: 30, label: "30%" },
                //   { value: 40, label: "40%" },
                //   { value: 50, label: "50%" },
                // ]}
                defaultValue={settings.defaultValues.difficulty}
                onChange={handleChange}
              />
               <Group position="right" mt="xl">
                <Button type="submit">Add Item</Button>
              </Group>
        </form>
        </Box>
      </Grid.Col>
      <Slider
                name="difficulty"
                placeholder="Difficulty"
                // radius="xl"
                min={1}
                max={5}
                mb='lg'
                step={1}
                // marks={[
                //   { value: 10, label: "10%" },
                //   { value: 20, label: "20%" },
                //   { value: 30, label: "30%" },
                //   { value: 40, label: "40%" },
                //   { value: 50, label: "50%" },
                // ]}
                
                defaultValue={defaultValues.difficulty}
                onChange={handleChange}
              />
    </Grid>
    </>
  );
};

export default Todo;
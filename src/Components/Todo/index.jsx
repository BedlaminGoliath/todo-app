import React, { useContext, useState } from 'react';
import  { SettingsContext } from "../Context/Settings";
import {Button} from "@mantine/core";
import { v4 as uuid } from "uuid";
import SettingsForm from "../settingsForm"
// import useForm from '../../hooks/form';



const Todo = (props) => {

  const User = useContext(SettingsContext);

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal =()=>{
    setShowModal(false);
  }

  function addItem(item) {
    item.id = uuid();
    item.complete=false;
    console.log(item);
    User.addToList(item);
  }

  const { handleChange, handleSubmit } = useForm(addItem, User.defaultValue);

console.log(User);
  return (
    
  <div className='TodoComp'>

    
      {/* <header data-testid="todo-header">
        <h1 data-testid="todo-h1">To Do List: {incomplete} items pending</h1>
      </header> */}

      <form onSubmit={handleSubmit}>

        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item</span>
          <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        </label>

        <label>
          <span>Assigned To</span>
          <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </label>

        <label>
          <span>Difficulty</span>
          <input onChange={handleChange} defaultValue={User.defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
        </label>

        <label>
          <Button onChange={addItem} className='button' type="submit">Add Item</Button>
        </label>

        <span className='settings' onClick={handleShowModal}>
          Settings
        </span>
        <SettingsForm showModal={showModal} handleCloseModal={handleCloseModal}/>
      </form>
  </div>

  );
};

export default Todo;

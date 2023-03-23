import React, { useContext } from 'react';
import  { Context } from '../../App';
// import useForm from '../../hooks/form';



const Todo = (props) => {

  const User = useContext(Context)

  return (
    
  <div className='Todo'>

    
      {/* <header data-testid="todo-header">
        <h1 data-testid="todo-h1">To Do List: {incomplete} items pending</h1>
      </header> */}

      <form onSubmit={props.handleSubmit}>

        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item</span>
          <input onChange={props.handleChange} name="text" type="text" placeholder="Item Details" />
        </label>

        <label>
          <span>Assigned To</span>
          <input onChange={props.handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </label>

        <label>
          <span>Difficulty</span>
          <input onChange={props.handleChange} defaultValue={User.defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
        </label>

        <label>
          <button className='button' type="submit">Add Item</button>
        </label>
      </form>
  </div>

  );
};

export default Todo;

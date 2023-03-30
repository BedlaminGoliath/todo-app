import React from 'react';
import { Grid } from "@mantine/core";
import List from "./Components/List";
import Header from "./Components/Header";
import Todo from "./Components/Todo";
import "./App.scss";
import SettingsContext  from './Components/Context/Settings/Index';


const App = () => {

  // const [defaultValues] = useState({
  //   difficulty: 4,
  //   itemsPerPage: 3,
  //   });

  // const [list, setList] = useState([]);
  // const [incomplete, setIncomplete] = useState([]);

  // const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  // function addItem(item) {
  //   item.id = uuid();
  //   item.complete = false;
  //   console.log(item);
  //   setList([...list, item]);


  // function deleteItem(id) {
  //   const items = list.filter( item => item.id !== id );
  //   setList(items);
  // }

  // function toggleComplete(id) {
  //   const items = list.map( (item) => {
  //     if ( item.id === id ) {
  //       item.complete = !item.complete;
  //     }
  //     return item;
  //   });

  //   setList(items.filter((item)=> !item.complete));
  // }

  // useEffect(() => {
  //   let incompleteCount = list.filter((item) => !item.complete).length;
  //   setIncomplete(incompleteCount);
  //   document.title = `To Do List: ${incomplete}`;
  //   // linter will want 'incomplete' added to dependency array unnecessarily. 
  //   // disable code used to avoid linter warning 
  //   // eslint-disable-next-line react-hooks/exhaustive-deps 
  // }, [list]);  

    return (
        <SettingsContext>
          {/* <Grid> */}
            {/* <Grid.Col span={7}> */}
              <Todo />
            {/* </Grid.Col> */}
            {/* <Grid.Col span={5}> */}
              <Header />
              <List />
            {/* </Grid.Col> */}
          {/* </Grid> */}
        </SettingsContext >
    );
  };
  export default App;


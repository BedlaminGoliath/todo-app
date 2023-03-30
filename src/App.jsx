import React from "react";

import Todo from './Components/Todo';
import List from './Components/List/index';

import Header from "./Components/Header";
// import Form from "./Components/settingsForm";
import "./App.scss";
import  SettingsContext  from './Components/context/index';


const App = () => {

    return (

          <SettingsContext >
          <Header />
            {/* <Form/> */}
            <Todo/>
            <List/>
          </SettingsContext>
    );
  };
  export default App;


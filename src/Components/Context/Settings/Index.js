import React, { useState, useEffect, createContext } from "react";

export const SettingsContext = React.createContext();

function SettingsProvider(props){

        const [defaultValues] = useState({ difficulty:4});

        const [itemsPrPage, setItemsPrPage] = useState(3);
        const [showCompleted,setShowCompleted] = useState(false);
        const [list, setList] = useState([]);
        const [incomplete, setInComplete] =  useState([]);

    function deleteItem(id){
        const items = list.map((item)=>{
            if(item.id===id){
                item.complete =!item.complete
            } return item;
        });
        setList(items)
    }

    function toggleComplete(id) {
        const items = list.map((item) => {
          if (item.id === id) {
            item.complete = !item.complete;
          }
          return item;
        });
        setList(items);
      }

    //proxy function
    const addItemToList = (item) => setList([...list, item]);

    const changeShowCompleted=(choice)=> {
        localStorage.setItem("show completed", choice);
        setShowCompleted(choice);
    };

    const ChangeAmountOfItems=(num)=>{
        num = Number(num);
        localStorage.setItem("Items displayed", num);
        setItemsPrPage(num);
    }

    useEffect(()=> {
        let incompleteCount = list.filter((item)=> !item.complete).length;
        setInComplete(incompleteCount);
        document.title=`To Do List: ${incomplete}`;

    },[list]);

    let exportSettings={

        defaultValues,
        list,
        incomplete,
        addItemToList,
        toggleComplete,
        showCompleted,
        changeShowCompleted,
        ChangeAmountOfItems,
        itemsPrPage,
    }

    return (
        <SettingsContext.Provider value={exportSettings}>
            {props.children}
        </SettingsContext.Provider>
    );
};

export default SettingsProvider
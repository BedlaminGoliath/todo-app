import React, { useState, useEffect } from "react";

export const SettingsContext = React.createContext();

function SettingsProvider(props){

    const [defaultValues] = useState({ difficulty:3});

    const [itemsPrPage, setItemsPrPage] = useState(3);

    const [showCompleted,setShowCompleted] = useState(false);

    const [list, setList] = useState(JSON.parse(localStorage.getItem("list")));
      const [incomplete, setInComplete] =  useState([]);

    const changeItemsPrPage=(number)=>{
        number = Number(number);
        localStorage.setItem("itemsPrPage", number);
        setItemsPrPage(number);
    };

    const changeShowCompleted=(choice)=>{
        localStorage.setItem("showCompleted", JSON.stringify(choice));
        setShowCompleted(choice);
    };

    useEffect(()=>{
        let savedItemsSetting = localStorage.getItem("itemsPrPage");
        let savedShowSetting = JSON.parse(localStorage.getItem("showCompleted"));
        let savedList = JSON.parse(localStorage.getItem("list"));

        setList(savedList);
        changeItemsPrPage(savedItemsSetting);
        changeShowCompleted(savedShowSetting);
    },[]);

    const addToList = (item)=> setList([...list,item]);

    useEffect(()=> { localStorage.setItem("list", JSON.stringify(list));}, [list]);

    const toggleComplete=(id)=> {
        let items = list.map((item)=>{
            if(item.id===id){
                item.complete = !item.complete;
            } return item;
        });
        if(!showCompleted){
            setList(items.filter((item)=> !item.complete));
        } else {
            setList(items);
        }
    }

    useEffect(()=>{
        let sortedList = list?.sort((a,b)=> a.difficulty - b.difficulty)||[];
        let incompleteCount = sortedList.filter((item)=> !item.complete).length;
        setInComplete(incompleteCount);
        document.title = `To do List: ${incomplete}`;
    },[list]);

    let exportedSettings = {
        list,
        addToList,
        defaultValues,
        toggleComplete,
        itemsPrPage,
        showCompleted,
        changeItemsPrPage,
        changeShowCompleted,
        incomplete,
    };

    return(
        <SettingsProvider.Provider value={exportedSettings}>
            {props.children}
        </SettingsProvider.Provider>
    );

}

export default SettingsProvider;

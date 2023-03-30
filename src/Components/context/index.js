import React, { useState, useEffect } from "react";


export const SettingsContext = React.createContext();


const SettingsProvider=(props)=>{

    const [defaultValues] = useState({ difficulty:3});

    const [ itemsOnPage, setItemsOnPage] = useState(3);

    const[seeCompletedItems, setSeeCompletedItems] = useState(false); 

    const [list, setList] = useState(JSON.parse(localStorage.getItem("list")));
    console.log(list);
    const [incomplete, setIncomplete] = ([]);


    const changeItemsPerPage = (newAmount)=>{
        newAmount = Number(newAmount);
        localStorage.setItem("itemsOnPage", newAmount);
        setItemsOnPage(newAmount);
    };

    const changeSeeCompletedItems = (choice)=>{
        localStorage.setItem("showCompleted", JSON.stringify(choice));
        setSeeCompletedItems(choice);
    };

    useEffect(()=>{
        let savedItems = localStorage.getItem("itemsOnPage");
        let savedShow = JSON.parse(localStorage.getItem("seeCompletedItems"));
        let savedList= JSON.parse(localStorage.getItem("list"));

        setList(savedList);
        changeItemsPerPage(savedItems);
        changeSeeCompletedItems(savedShow);
        },[]);

        // console.log(list);
    const addToList = (item)=> setList([...list,item]);
    
   function toggleComplete(id){
        const items = list.map((item) => {
            if (item.id === id) {
              item.complete = !item.complete;
            }
            return item;
          });
          if (!seeCompletedItems) {
            setList(items.filter((item) => !item.complete));
          } else {
            setList(items)
          }
        }

        useEffect(()=> {
            let sortedList = list?.sort((a,b)=> a.difficulty - b.difficulty) || [];
            let incompleteCount = sortedList.filter((item)=> !item.complete).length;
            setIncomplete(incompleteCount);
            document.title = `To Do List: ${incomplete}`;
        },[list]);
        
        let exportedSettings = {
            list,
            addToList,
            incomplete,
            setSeeCompletedItems,
            toggleComplete,
            changeSeeCompletedItems,
            itemsOnPage,
            setItemsOnPage,
            seeCompletedItems,
            defaultValues
        };
        
        return (
            <SettingsContext.Provider value={exportedSettings}>
            {props.children}
            </SettingsContext.Provider>
    );
}



export default SettingsProvider;
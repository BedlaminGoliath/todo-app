import React, { useState, useEffect } from "react";

export const Context = React.createContext();

export const SettingsContext = React.createContext();


function SettingProvider(props){

    const [ itemsOnPage, setItemsPerPage] = useState(3);

    const[ seeCompletedItems, setSeeCompletedItems] = useState(true); 


    
    
    let exportedSettings = {
        itemsOnPage,
        setItemsPerPage,
        seeCompletedItems,
        setSeeCompletedItems
    }

    return(
        <SettingsContext.Provider value={exportedSettings}>
            {props.children}
        </SettingsContext.Provider>
    )
}

export default SettingProvider;
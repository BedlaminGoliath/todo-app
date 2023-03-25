import React, {useState} from react;
import Context from "../../App";

export const SettingsContext = React.createContext();

function SettingContext(props){
    const [ itemsOnPage, setItemsPerPage] = useState(2);

    const changeItems = (number) => {
        
        setItemsPerPage(number);
    };
    
    let exportedSettings = {
        itemsOnPage,
        setItemsPerPage
    }

    return(
        <SettingsContext.Provider value={exportedSettings}>
            {props.children}
        </SettingsContext.Provider>
    )
}

export default SettingContext;
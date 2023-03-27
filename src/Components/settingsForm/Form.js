import React,{ useContext }from "react";
import { SettingsContext } from "../context/Settings";
import { TextInput, Switch, NumberInput, Button, Card } from '@mantine/core';

function Form(){

    const context  = useContext(SettingsContext);

    // console.log(context);
    return(

            <Card>
                <h2>User Settings:</h2>
                <NumberInput 
                    onChange={(num)=>context.setItemsPerPage(num) }
                    placeholder={context.itemsOnPage} 
                    label="number of items per page"
                />
                <Switch
                    checked={context.seeCompletedItems}
                    onChange={(e)=>context.setSeeCompletedItems(e.currentTarget.checked)}
                    label="show completed items"
                />

            </Card>

    )


}

export default Form;

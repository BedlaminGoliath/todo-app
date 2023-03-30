import React, {useContext} from "react";
import { SettingsContext } from "../context/index";
import { Modal } from "@mantine/core";

function Form(props){
    let settings = useContext(SettingsContext);

    const handleSubmit=(e)=>{
        e.preventDefault();
    };

    const handleItemsPerPage=(e)=>{
        let value = e.target.value;
        settings.handleItemsPerPage(value);
    };

    const handleShowCompleted=(e)=>{
        let value = e.target.value;
        settings.handleShowCompleted(value);
    };

    return(
        <Modal onClose={props.handleCloseModal} opened={props.showModal}>
            <form className="settingsModal" onSubmit={handleSubmit}>
                <div>
                    <label>
                        <span>number of items per page</span>
                        <input type="number"
                        onChange={handleItemsPerPage}
                        defaultValue={settings.itemsPerPage}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        <span>Show Completed</span>
                        <input type="checkbox" onChange={handleShowCompleted} defaultChecked={settings.seeCompletedItems}/>
                    </label>
                </div>
            </form>

        </Modal>
    )
}

export default Form;

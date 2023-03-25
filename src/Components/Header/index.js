import React, { useContext } from "react";
import { Header } from "@mantine/core";
import { Context } from "../../App";
import './Header.scss';

const HeaderComponent = () => {
    const defUser = useContext(Context);

    return(
    <Header className="header">
        <h1>
            To Do List: <span>{defUser.incomplete} pending items</span>
        </h1>
    </Header>
    );
};

export default HeaderComponent;
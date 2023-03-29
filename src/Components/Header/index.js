import React, { useContext } from "react";
import { Header } from "@mantine/core";
import { SettingsContext } from "../context/Settings";
import './Header.scss';

const HeaderComponent = () => {

    const defUser = useContext(SettingsContext);

    return(
    <Header className="header">
        <h1>
        To Do
        </h1>
        <h3>{defUser.incomplete}</h3>
    </Header>
    );
};

export default HeaderComponent;
import React, { useContext } from "react";
import { Group } from "@mantine/core";
import { Select, Switch } from "@mantine/core";
import { SettingsContext } from "../Context/Settings/Index";

const Header = () => {

  const settings = useContext(SettingsContext);

  return (
    <Group position="center">
      <label>Display Items:
      <Select
        placeholder="Pick one"
        data={[
          { value: 3, label: "3" },
          { value: 6, label: "6" },
          { value: 9, label: "9" },
          { value: 12, label: "12" },
        ]}
        onChange={settings.setItemsPrPage}
      />
      </label>
      <label>Completed:
      <Switch
        checked={settings.showCompleted} 
        onChange={(e) => settings.changeShowCompleted(e.currentTarget.checked)}
        />
      </label>
    </Group>
  );
};

export default Header;
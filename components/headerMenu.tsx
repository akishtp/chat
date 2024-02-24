import { Text } from "react-native";
import React from "react";
import { MenuOption } from "react-native-popup-menu";

export const HeaderMenu = ({ text, action, value, icon }) => {
  return (
    <MenuOption onSelect={() => action(value)}>
      <Text>{text}</Text>
      <Text>{icon}</Text>
    </MenuOption>
  );
};

export default HeaderMenu;

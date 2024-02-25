import { Text, View } from "react-native";
import React from "react";
import { MenuOption } from "react-native-popup-menu";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const HeaderMenu = ({ text, action, value, icon }) => {
  return (
    <MenuOption onSelect={() => action(value)}>
      <View
        className="flex-row justify-between items-center"
        style={{ height: hp(4), paddingHorizontal: wp(4) }}
      >
        <Text>{text}</Text>
        <Text>{icon}</Text>
      </View>
    </MenuOption>
  );
};

export default HeaderMenu;

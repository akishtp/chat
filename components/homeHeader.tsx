import { View, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "expo-image";
import React from "react";
import { useAuth } from "../context/authContext";
import { Menu, MenuOptions, MenuTrigger } from "react-native-popup-menu";
import { Octicons } from "@expo/vector-icons";
import HeaderMenu from "./headerMenu";
import { StatusBar } from "expo-status-bar";
import { blurhash } from "../utils/commons";

export default function HomeHeader() {
  const { user, logout } = useAuth();
  const handleLogout = async () => {
    await logout();
  };

  const handleProfile = () => {};
  return (
    <View
      className="items-center flex-row justify-between"
      style={{ paddingHorizontal: wp(4), height: hp(7) }}
    >
      <StatusBar style="dark" />

      <Text style={{ fontSize: hp(3.6) }} className=" font-bold">
        Chat
      </Text>
      <Menu>
        <MenuTrigger>
          <Image
            style={{ height: hp(5), aspectRatio: 1, borderRadius: 100 }}
            source={user?.profileUrl || require("../assets/user.jpg")}
            placeholder={blurhash}
            transition={500}
          />
        </MenuTrigger>
        <MenuOptions
          customStyles={{
            optionsContainer: {
              borderRadius: 4,
              marginTop: hp(4),
              width: wp(50),
            },
          }}
        >
          <HeaderMenu
            text="Profile"
            action={handleProfile}
            value="null"
            icon={<Octicons name="person" size={hp(2.7)} color="#a3a3a3" />}
          />
          <View className="h-0.5 bg-neutral-200"></View>
          <HeaderMenu
            text="Logout"
            action={handleLogout}
            value="null"
            icon={<Octicons name="sign-out" size={hp(2.7)} color="#a3a3a3" />}
          />
        </MenuOptions>
      </Menu>
    </View>
  );
}

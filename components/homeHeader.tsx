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

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function HomeHeader() {
  const { user } = useAuth();

  const handleProfile = () => {};
  return (
    <View
      className="bg-slate-950 items-center flex-row justify-between"
      style={{ paddingHorizontal: wp(4), height: hp(7) }}
    >
      <Text style={{ fontSize: hp(3.6) }} className="text-white font-bold">
        Chat
      </Text>
      <Menu>
        <MenuTrigger>
          <Image
            style={{ height: hp(5), aspectRatio: 1, borderRadius: 100 }}
            source={user?.profileUrl}
            placeholder={blurhash}
            transition={500}
          />
        </MenuTrigger>
        <MenuOptions>
          <HeaderMenu
            text="Hello"
            action={handleProfile}
            value="null"
            icon={<Octicons name="person" size={hp(2.7)} color="#a3a3a3" />}
          />
        </MenuOptions>
      </Menu>
    </View>
  );
}

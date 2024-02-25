import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Octicons } from "@expo/vector-icons";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function ChatRoomHeader({ user, router }) {
  return (
    <Stack.Screen
      options={{
        header: () => (
          <View
            className="items-center flex-row gap-x-4"
            style={{ paddingHorizontal: wp(4), height: hp(7) }}
          >
            <Octicons name="chevron-left" size={hp(3.6)} color="#a3a3a3" />
            <Image
              style={{ height: hp(5), aspectRatio: 1, borderRadius: 100 }}
              source={user?.profileUrl || require("../assets/user.jpg")}
              placeholder={blurhash}
              transition={500}
            />
            <Text style={{ fontSize: hp(2.6) }} className=" font-bold">
              {user.username}
            </Text>
          </View>
        ),
      }}
    />
  );
}

import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useAssets } from "expo-asset";

export default function ChatItem({ item, router, noBorder }) {
  const [assets, error] = useAssets([require("../assets/user.jpg")]);
  const openChatRoom = () => {
    router.push({ pathname: "/chatroom", params: item });
  };
  return (
    <TouchableOpacity
      className={`flex-row ${noBorder ? "" : "border-b border-slate-700"}`}
      style={{
        marginHorizontal: wp(4),
        paddingVertical: hp(1),
        gap: 10,
      }}
      onPress={openChatRoom}
    >
      <Image
        style={{ height: hp(6.6), aspectRatio: 1, borderRadius: 100 }}
        source={item.profileUrl}
        placeholder={assets[0]}
        transition={500}
      />
      <View className="flex-1 justify-center gap-y-2">
        <View className="flex-row justify-between items-center">
          <Text
            className="font-bold text-neutral-100"
            style={{ fontSize: hp(2) }}
          >
            {item.username}
          </Text>
          <View className="bg-slate-200 text-white rounded-full h-2.5 w-2.5" />
        </View>
        <View className="flex-row justify-between">
          <Text className="text-neutral-300">Last Message</Text>
          <Text className="text-neutral-300">12:00pm</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

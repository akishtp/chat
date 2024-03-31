import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { blurhash } from "../utils/commons";

export default function ChatItem({ item, router, noBorder }) {
  const openChatRoom = () => {
    router.push({ pathname: "/chatRoom", params: item });
  };
  return (
    <TouchableOpacity
      className={`flex-row ${noBorder ? "" : "border-b border-neutral-300"}`}
      style={{
        marginHorizontal: wp(4),
        paddingVertical: hp(1),
        gap: 10,
      }}
      onPress={openChatRoom}
    >
      <Image
        style={{ height: hp(6.6), aspectRatio: 1, borderRadius: 100 }}
        source={item?.profileUrl || require("../assets/user.jpg")}
        placeholder={blurhash}
        transition={500}
      />
      <View className="flex-1 justify-center">
        <Text className="font-bold text-black" style={{ fontSize: hp(2) }}>
          {item.username}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

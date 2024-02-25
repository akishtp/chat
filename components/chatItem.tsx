import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useAssets } from "expo-asset";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

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
      <View className="flex-1 justify-center gap-y-2">
        <View className="flex-row justify-between items-center">
          <Text className="font-bold text-black" style={{ fontSize: hp(2) }}>
            {item.username}
          </Text>
          <View className="bg-slate-800 rounded-full h-2.5 w-2.5" />
        </View>
        <View className="flex-row justify-between">
          <Text className="text-neutral-600">Last Message</Text>
          <Text className="text-neutral-600">12:00pm</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

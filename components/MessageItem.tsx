import { View, Text } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function MessageItem({ message, currentUser }) {
  if (currentUser.uid === message.uid) {
    return (
      <View className="justify-end flex-row my-0.5">
        <Text
          className="bg-slate-200 flex-row items-center py-2 px-4 rounded-xl"
          style={{ fontSize: hp(2) }}
        >
          {message.text}
        </Text>
      </View>
    );
  }

  return (
    <View className="justify-start flex-row my-0.5">
      <Text
        className="bg-slate-400 flex-row items-center py-2 px-4 rounded-xl"
        style={{ fontSize: hp(2) }}
      >
        {message.text}
      </Text>
    </View>
  );
}

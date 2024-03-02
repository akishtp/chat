import { View, Text, ScrollView } from "react-native";
import React from "react";
import MessageItem from "./MessageItem";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function MessageList({ messages, currentUser }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          paddingHorizontal: wp(2),
          paddingVertical: hp(1),
          flexDirection: "column-reverse",
        }}
      >
        {messages.map((message, index) => {
          return (
            <MessageItem
              message={message}
              currentUser={currentUser}
              key={index}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}

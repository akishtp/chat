import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import ChatRoomHeader from "../../components/chatRoomHeader";

export default function ChatRoom() {
  const item = useLocalSearchParams();
  const router = useRouter();

  return (
    <View>
      <ChatRoomHeader />
    </View>
  );
}

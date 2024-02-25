import { FlatList } from "react-native";
import React from "react";
import ChatItem from "./chatItem";
import { useRouter } from "expo-router";

export default function ChatList({ users }) {
  const router = useRouter();
  return (
    <FlatList
      data={users}
      contentContainerStyle={{ flex: 1, paddingVertical: 25 }}
      keyExtractor={(item) => (Math.random() + 1).toString(36).substring(7)}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <ChatItem
          noBorder={index + 1 == users.length}
          router={router}
          item={item}
        />
      )}
    />
  );
}

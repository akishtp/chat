import { View, Text, Button, Pressable } from "react-native";
import React from "react";
import { useAuth } from "../../context/authContext";

export default function Home() {
  const { logout, user } = useAuth();
  const handleLogout = async () => {
    await logout();
  };
  console.log(user);

  return (
    <View>
      <Text>Home</Text>
      <Pressable onPress={handleLogout} className="h-14 bg-red-500">
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
}

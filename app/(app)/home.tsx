import { View, Text, Button, Pressable } from "react-native";
import React from "react";
import { useAuth } from "../../context/authContext";

export default function Home() {
  const { logout } = useAuth();
  const handleLogout = async () => {
    console.log("pressed");
    await logout();
  };
  return (
    <View>
      <Text>Home</Text>
      <Pressable onPress={handleLogout} className="h-14 bg-red-500">
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
}

import React from "react";
import { Stack } from "expo-router";
import HomeHeader from "../../components/homeHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { MenuProvider } from "react-native-popup-menu";

export default function _layout() {
  return (
    <MenuProvider>
      <SafeAreaView className="flex-1">
        <Stack>
          <Stack.Screen
            name="home"
            options={{
              header: () => <HomeHeader />,
            }}
          />
        </Stack>
      </SafeAreaView>
    </MenuProvider>
  );
}

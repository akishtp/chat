import { View, TextInput, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Octicons } from "@expo/vector-icons";

export default function Login() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        <StatusBar style="dark" />
        <View
          className="flex-1 gap-y-2"
          style={{ paddingHorizontal: hp(2), paddingVertical: wp(4) }}
        >
          <Text style={{ fontSize: hp(4) }} className="font-black">
            Login
          </Text>
          <View className="flex-1" />
          <View className="h-14 bg-neutral-200 rounded-xl items-center px-4 flex-row">
            <Octicons name="mail" size={hp(2.7)} color="grey" />
            <TextInput
              style={{ fontSize: hp(2) }}
              className="flex-1 font-semibold text-neutral-700 ml-4"
              placeholder="Enter your mail"
              placeholderTextColor="grey"
            />
          </View>
          <View className="h-14 bg-neutral-200 rounded-xl items-center px-4 flex-row">
            <Octicons name="lock" size={hp(2.7)} color="grey" />
            <TextInput
              style={{ fontSize: hp(2) }}
              className="flex-1 font-semibold text-neutral-700 ml-4"
              placeholder="password"
              placeholderTextColor="grey"
            />
          </View>
          <TouchableOpacity className="bg-slate-700 h-14 rounded-lg justify-center">
            <Text
              style={{ fontSize: hp(2.7) }}
              className="text-white text-center font-medium"
            >
              Login
            </Text>
          </TouchableOpacity>
          <View className="flex-row justify-between">
            <Text
              className="text-right text-neutral-500 font-bold"
              style={{ fontSize: hp(1.8) }}
            >
              New Here? Signup
            </Text>
            <Text
              className="text-right text-neutral-500 font-bold"
              style={{ fontSize: hp(1.8) }}
            >
              Forgot password?
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

import {
  Alert,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useRef, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Loading from "../compoennts/Loading";
import { useAuth } from "../context/authContext";

export default function Signup() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { signup } = useAuth();

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const usernameRef = useRef("");
  const profileRef = useRef("");

  const handleSignup = async () => {
    if (
      !emailRef.current ||
      !passwordRef.current ||
      !usernameRef.current ||
      !profileRef.current
    ) {
      Alert.alert("Signup", "Please fill all fields");
      return;
    }
    setLoading(true);

    let response = await signup(
      emailRef.current,
      passwordRef.current,
      usernameRef.current,
      profileRef.current
    );

    setLoading(false);

    if (!response.success) {
      Alert.alert("Signup", response.message);
    }
  };
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        <StatusBar style="light" />
        <View
          className="flex-1 gap-y-1"
          style={{ paddingHorizontal: hp(2), paddingVertical: wp(4) }}
        >
          <Text style={{ fontSize: hp(4) }} className="text-white">
            Signup
          </Text>
          <View className="flex-1"></View>
          <View className="gap-y-2">
            <View className="h-14 bg-neutral-900 rounded-xl items-center px-4 flex-row">
              <Octicons name="person" size={hp(2.7)} color="#a3a3a3" />
              <TextInput
                onChangeText={(value) => (usernameRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-200 ml-4"
                placeholder="username"
                placeholderTextColor="#a3a3a3"
              />
            </View>
            <View className="h-14 bg-neutral-900 rounded-xl items-center px-4 flex-row">
              <Octicons name="mail" size={hp(2.7)} color="#a3a3a3" />
              <TextInput
                onChangeText={(value) => (emailRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-200 ml-4"
                placeholder="mail"
                placeholderTextColor="#a3a3a3"
              />
            </View>
            <View className="h-14 bg-neutral-900 rounded-xl items-center px-4 flex-row">
              <Octicons name="lock" size={hp(2.7)} color="#a3a3a3" />
              <TextInput
                onChangeText={(value) => (passwordRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-200 ml-4"
                placeholder="password"
                placeholderTextColor="#a3a3a3"
                secureTextEntry
              />
            </View>
            <View className="h-14 bg-neutral-900 rounded-xl items-center px-4 flex-row">
              <Octicons name="image" size={hp(2.7)} color="#a3a3a3" />
              <TextInput
                onChangeText={(value) => (profileRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-200 ml-4"
                placeholder="Image Url"
                placeholderTextColor="#a3a3a3"
              />
            </View>
            <View>
              {loading ? (
                <View className="items-center h-14 bg-slate-800 rounded-lg justify-center">
                  <Loading size={hp(8)} />
                </View>
              ) : (
                <TouchableOpacity
                  className="bg-slate-900 h-14 rounded-lg justify-center"
                  onPress={handleSignup}
                >
                  <Text
                    style={{ fontSize: hp(2.7) }}
                    className="text-white text-center font-medium"
                  >
                    Signup
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            <Pressable
              className="flex-row"
              onPress={() => router.push("login")}
            >
              <Text
                className="text-right text-neutral-300 font-bold"
                style={{ fontSize: hp(1.8) }}
              >
                Already have an Account?{" "}
              </Text>
              <Text
                className="text-right text-slate-400 font-bold"
                style={{ fontSize: hp(1.8) }}
              >
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

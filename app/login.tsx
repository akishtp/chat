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
import Loading from "../components/Loading";
import { useAuth } from "../context/authContext";

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleLogin = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Login", "Please fill all fields");
      return;
    }
    setLoading(true);
    let response = await login(emailRef.current, passwordRef.current);
    setLoading(false);
    if (!response.success) {
      Alert.alert("Login", response.message);
    }
  };
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        <StatusBar style="dark" />
        <View
          className="flex-1 gap-y-1"
          style={{ paddingHorizontal: hp(2), paddingVertical: wp(4) }}
        >
          <Text style={{ fontSize: hp(4) }}>Login</Text>
          <View className="flex-1"></View>
          <View className="gap-y-2">
            <View className="h-14 bg-neutral-300 rounded-xl items-center px-4 flex-row">
              <Octicons name="mail" size={hp(2.7)} color="#a3a3a3" />
              <TextInput
                onChangeText={(value) => (emailRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-900 ml-4"
                placeholder="mail"
                placeholderTextColor="#a3a3a3"
              />
            </View>
            <View className="h-14 bg-neutral-300 rounded-xl items-center px-4 flex-row">
              <Octicons name="lock" size={hp(2.7)} color="#a3a3a3" />
              <TextInput
                onChangeText={(value) => (passwordRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-900 ml-4"
                placeholder="password"
                placeholderTextColor="#a3a3a3"
                secureTextEntry
              />
            </View>
            <View>
              {loading ? (
                <View className="items-center h-14 rounded-lg justify-center">
                  <Loading size={hp(8)} />
                </View>
              ) : (
                <TouchableOpacity
                  className="bg-slate-800 h-14 rounded-lg justify-center"
                  onPress={handleLogin}
                >
                  <Text
                    style={{ fontSize: hp(2.7) }}
                    className=" text-center font-medium text-white"
                  >
                    Login
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            <View className="flex-row justify-between gap-x-2">
              <Pressable
                className="flex-row"
                onPress={() => router.push("signup")}
              >
                <Text
                  className="text-right text-neutral-600 font-bold"
                  style={{ fontSize: hp(1.8) }}
                >
                  New Here?{" "}
                </Text>
                <Text
                  className="text-right text-slate-800 font-bold"
                  style={{ fontSize: hp(1.8) }}
                >
                  Signup
                </Text>
              </Pressable>
              <Text
                className="text-right text-neutral-600 font-bold"
                style={{ fontSize: hp(1.8) }}
              >
                Forgot password?
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

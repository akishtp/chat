import { SafeAreaProvider } from "react-native-safe-area-context";
import React, { useEffect } from "react";
import { Slot, useRouter, useSegments } from "expo-router";
import { AuthContextProvider, useAuth } from "../context/authContext";

const MainLayout = () => {
  const { isAuthenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (typeof isAuthenticated === undefined) return;
    const inApp = segments[0] == `(app)`;

    if (isAuthenticated && !inApp) {
      router.replace("home");
    } else if (isAuthenticated == false) {
      router.replace("login");
    }
  }, [isAuthenticated]);

  return (
    <SafeAreaProvider>
      <Slot />
    </SafeAreaProvider>
  );
};

export default function RootLayout() {
  return (
    <AuthContextProvider>
      <MainLayout />
    </AuthContextProvider>
  );
}

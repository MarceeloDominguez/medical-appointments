import { router, Stack } from "expo-router";
import * as SecureStore from "expo-secure-store";
import React, { useEffect } from "react";

export default function AuthLayout() {
  useEffect(() => {
    const checkToken = async () => {
      const token = await SecureStore.getItemAsync("token");
      if (token) {
        router.replace("/(tabs)");
      }
    };
    checkToken();
  }, []);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "fade",
      }}
    ></Stack>
  );
}

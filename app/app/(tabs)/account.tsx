import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router, Stack } from "expo-router";
import * as SecureStore from "expo-secure-store";
import React from "react";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AccountScreen() {
  const logout = async () => {
    await SecureStore.deleteItemAsync("token");
    router.replace("/(auth)/login");
  };

  const handleLogout = () => {
    Alert.alert(
      "Confirmar cierre de sesión",
      "¿Estás seguro de que deseas cerrar sesión?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Cerrar sesión", style: "destructive", onPress: logout },
      ]
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light.background }}>
      <Stack.Screen
        options={{
          title: "Mi perfil",
          headerTitleAlign: "left",
          headerShown: true,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Colors.light.background,
          },
          headerRight: () => (
            <Ionicons
              name="log-out-outline"
              size={24}
              color={Colors.light.text}
              style={{ marginRight: 15 }}
              onPress={handleLogout}
            />
          ),
        }}
      />
    </SafeAreaView>
  );
}

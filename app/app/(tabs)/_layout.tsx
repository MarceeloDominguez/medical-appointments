import { Colors } from "@/constants/Colors";
import Icon from "@expo/vector-icons/Ionicons";
import { router, Tabs } from "expo-router";
import * as SecureStore from "expo-secure-store";
import React, { useEffect } from "react";

export default function TabLayout() {
  useEffect(() => {
    const checkToken = async () => {
      const token = await SecureStore.getItemAsync("token");
      if (!token) {
        router.replace("/(auth)/login");
      }
    };
    checkToken();
  }, []);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.light.background,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: Colors.light.primary,
        tabBarInactiveTintColor: "#687076",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Icon name="home-sharp" color={color} size={22} />
          ),
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "Calendar",
          tabBarIcon: ({ color }) => (
            <Icon name="calendar-clear" color={color} size={22} />
          ),
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarIcon: ({ color }) => (
            <Icon name="chatbubble" color={color} size={22} />
          ),
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => (
            <Icon name="person" color={color} size={22} />
          ),
          tabBarLabel: "",
        }}
      />
    </Tabs>
  );
}

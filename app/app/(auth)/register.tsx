import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function RegisterScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href="/(auth)/login">Go to Login</Link>
      <Text>LoginScreen</Text>
      <Link href="/(tabs)">Go to Tabs</Link>
    </View>
  );
}

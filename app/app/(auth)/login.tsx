import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function LoginScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>LoginScreen</Text>
      <Link href="/(auth)/register">Go to Register</Link>
    </View>
  );
}

import Header from "@/components/Header";
import { Colors } from "@/constants/Colors";
import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: Colors.light.background,
        padding: 20,
      }}
    >
      <SafeAreaView>
        <Header />
      </SafeAreaView>
    </ScrollView>
  );
}

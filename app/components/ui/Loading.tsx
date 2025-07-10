import { Colors } from "@/constants/Colors";
import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={Colors.light.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingTop: 100,
  },
});

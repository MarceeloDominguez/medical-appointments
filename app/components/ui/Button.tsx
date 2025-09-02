import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  onPress?: () => void;
  title: string;
};

export default function Button({ onPress, title }: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.light.primary,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    borderRadius: 8,
  },
  textButton: {
    color: Colors.light.background,
    fontWeight: "bold",
  },
});

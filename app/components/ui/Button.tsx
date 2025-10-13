import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

type ButtonProps = {
  onPress?: () => void;
  title: string | React.ReactElement;
  style?: ViewStyle;
  disabled?: boolean;
};

export default function Button({
  onPress,
  title,
  style,
  disabled,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, style, { opacity: disabled ? 0.8 : 1 }]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
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

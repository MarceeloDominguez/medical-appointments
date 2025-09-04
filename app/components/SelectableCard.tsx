import { Colors } from "@/constants/Colors";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";

type SelectableCardProps = {
  isSelected: boolean;
  disabled?: boolean;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  title: string;
  subtitle?: string;
};

export default function SelectableCard({
  isSelected,
  disabled,
  onPress,
  style,
  textStyle,
  title,
  subtitle,
}: SelectableCardProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={{
        ...styles.cardSelectDate,
        ...style,
        backgroundColor: disabled
          ? "#cacad8"
          : isSelected
          ? Colors.light.primary
          : Colors.light.background,
        borderColor: isSelected ? Colors.light.primary : "#bbc1c7",
      }}
    >
      <Text
        style={{
          ...styles.text,
          ...textStyle,
          color: isSelected ? Colors.light.background : Colors.light.text,
        }}
      >
        {title}
      </Text>
      {subtitle && (
        <Text
          style={{
            ...styles.text,
            ...textStyle,
            color: isSelected ? Colors.light.background : Colors.light.text,
          }}
        >
          {subtitle}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardSelectDate: {
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    width: 60,
    borderWidth: 0.5,
  },
  text: {
    fontWeight: "600",
    textTransform: "capitalize",
    fontSize: 13,
  },
});

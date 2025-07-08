import { Colors } from "@/constants/Colors";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomSearch from "./CustomSearch";

type Props = {
  title: string;
  subtitle: string;
  showIconBell?: boolean;
};

export default function Header({
  title,
  subtitle,
  showIconBell = false,
}: Props) {
  return (
    <View>
      <View style={styles.wrapperText}>
        <View style={{ flex: 1, marginRight: 10 }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        {showIconBell && (
          <View style={styles.wrapperIconBell}>
            <Feather name="bell" size={20} color={Colors.light.text} />
          </View>
        )}
      </View>
      <CustomSearch />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.light.text,
  },
  subtitle: {
    fontSize: 14,
    marginTop: 4,
    color: Colors.light.textSecondary,
  },
  wrapperIconBell: {
    backgroundColor: Colors.light.borderColor,
    padding: 6,
    borderRadius: 8,
  },
});

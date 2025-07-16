import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type InfoCardProp = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

export default function InfoCard({
  description,
  title,
  children,
}: InfoCardProp) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      {children && <View style={{ marginTop: 12 }}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 14,
  },
  title: {
    color: Colors.light.text,
    fontWeight: "bold",
    fontSize: 15,
  },
  description: {
    color: Colors.light.textSecondary,
    fontSize: 13,
    marginTop: 5,
    lineHeight: 18,
  },
});

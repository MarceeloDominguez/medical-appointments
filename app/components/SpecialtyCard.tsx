import { Colors } from "@/constants/Colors";
import Icon from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type SpecialtyCard = {
  id: string;
  name: string;
};

type SpecialtyCardProps = {
  item: SpecialtyCard;
};

export default function SpecialtyCard({ item }: SpecialtyCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperText}>
        <Icon name="person-outline" size={24} color={Colors.light.text} />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.subtitle}>Selecciona un médico especialista</Text>
        </View>
      </View>
      <Icon
        name="chevron-forward-outline"
        size={20}
        color={Colors.light.primary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.light.borderColor,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 8,
  },
  wrapperText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  name: {
    color: Colors.light.text,
    fontSize: 16,
    fontWeight: "500",
  },
  subtitle: {
    color: Colors.light.textSecondary,
    fontSize: 13,
    marginTop: 2,
  },
});

import { Colors } from "@/constants/Colors";
import Icon from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type SpecialtyCard = {
  id: string;
  name: string;
};

type SpecialtyCardProps = {
  item: SpecialtyCard;
};

export default function SpecialtyCard({ item }: SpecialtyCardProps) {
  const router = useRouter();

  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        router.push({ pathname: "/specialty/[id]", params: { id: item.id } })
      }
    >
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
    </Pressable>
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
    textTransform: "capitalize",
  },
  subtitle: {
    color: Colors.light.textSecondary,
    fontSize: 13,
    marginTop: 2,
  },
});

import { Colors } from "@/constants/Colors";
import Icon from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type SpecialtyCard = {
  id: string;
  name: string;
};

type SpecialtyCardProps = {
  item: SpecialtyCard;
};

const specialtyImages: Record<string, any> = {
  cardiologia: require("@/assets/icons/cardiologia.png"),
  dermatologia: require("@/assets/icons/dermatologia.png"),
  pediatria: require("@/assets/icons/pediatria.png"),
  psiquiatria: require("@/assets/icons/neurologia.png"),
  traumatologia: require("@/assets/icons/traumatologia.png"),
  neurologia: require("@/assets/icons/neurologia.png"),
};

function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD") // separa las tildes
    .replace(/[\u0300-\u036f]/g, ""); // elimina las tildes
}

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
        <Image
          style={styles.iconSpecialty}
          source={
            specialtyImages[normalize(item.name)] ??
            require("@/assets/icons/cardiologia.png")
          }
        />
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
  iconSpecialty: {
    width: 40,
    height: 40,
    resizeMode: "contain",
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

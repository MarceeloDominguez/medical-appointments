import { Colors } from "@/constants/Colors";
import {
  default as ClockIcon,
  default as HospitalIcon,
} from "@expo/vector-icons/FontAwesome5";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function InfoDoctorCard() {
  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <View style={styles.wrapperInfo}>
          <HospitalIcon name="hospital" size={16} color={"#e21717"} />
          <Text style={styles.title}>Hospital</Text>
        </View>
        <Text style={styles.subtitle}>RS. Herminei</Text>
      </View>
      <View style={styles.containerInfo}>
        <View style={styles.wrapperInfo}>
          <ClockIcon name="clock" size={16} color={Colors.light.primary} />
          <Text style={styles.title}>Horarios</Text>
        </View>
        <Text style={styles.subtitle}>07:00 - 18:00</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    marginBottom: 10,
  },
  containerInfo: {
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    gap: 5,
  },
  wrapperInfo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  title: {
    color: Colors.light.textSecondary,
    fontSize: 13,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.light.text,
    fontWeight: "600",
  },
});

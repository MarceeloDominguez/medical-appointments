import { Colors } from "@/constants/Colors";
import { WorkingHours } from "@/type/type";
import {
  default as ClockIcon,
  default as HospitalIcon,
} from "@expo/vector-icons/FontAwesome5";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type InfoDoctorCardProps = {
  hospital: string;
  workingHours?: WorkingHours | null;
};

export default function InfoDoctorCard({
  hospital,
  workingHours,
}: InfoDoctorCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <View style={styles.wrapperInfo}>
          <HospitalIcon name="hospital" size={16} color={"#e21717"} />
          <Text style={styles.title}>Hospital</Text>
        </View>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.subtitle}>
          {hospital}
        </Text>
      </View>
      <View style={styles.containerInfo}>
        <View style={styles.wrapperInfo}>
          <ClockIcon name="clock" size={16} color={Colors.light.primary} />
          <Text style={styles.title}>Horarios</Text>
        </View>
        <Text style={styles.subtitle}>
          {workingHours?.start ? workingHours?.start : "11:00"} -{" "}
          {workingHours?.end ? workingHours?.end : "14:00"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 10,
  },
  containerInfo: {
    flex: 1,
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
    textAlign: "center",
  },
});

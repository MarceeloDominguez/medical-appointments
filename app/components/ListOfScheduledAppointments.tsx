import { Colors } from "@/constants/Colors";
import Calendar from "@expo/vector-icons/Ionicons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ListOfScheduledAppointments() {
  return (
    <View style={styles.container}>
      <View style={styles.containerAvatarNameDoctor}>
        <Image
          source={require("@/assets/images/avatar-default.png")}
          style={styles.avatar}
        />
        <View style={{ flex: 1 }}>
          <Text numberOfLines={1} style={styles.doctorName}>
            Dr. Stone Gaze
          </Text>
          <Text numberOfLines={1} style={styles.specialty}>
            Cardiología
          </Text>
        </View>
      </View>
      <View style={styles.wrapperCardBottom}>
        <Calendar name="calendar-clear-outline" size={18} color="#f0f3f7" />
        <Text style={styles.date}>Viernes, 10 de Sep. 2025, 14:00 hs.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.primary,
    padding: 15,
    borderRadius: 12,
    marginTop: 16,
  },
  containerAvatarNameDoctor: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#a6a8aa",
    resizeMode: "contain",
    backgroundColor: "#f0f3f7",
  },
  doctorName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
    textTransform: "capitalize",
  },
  specialty: {
    fontSize: 13,
    color: "#f0f3f7",
    marginTop: 4,
    textTransform: "capitalize",
  },
  wrapperCardBottom: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#183188",
    padding: 10,
    borderRadius: 12,
  },
  date: {
    color: "#f0f3f7",
    fontSize: 13,
    fontWeight: "500",
  },
});

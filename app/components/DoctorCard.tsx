import { Colors } from "@/constants/Colors";
import { default as IconStar } from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function DoctorCard() {
  const router = useRouter();

  return (
    <Pressable
      style={styles.container}
      onPress={() => router.push({ pathname: "/doctor/[id]" })}
    >
      <View style={styles.avatar}></View>
      <View style={{ flex: 1 }}>
        <Text numberOfLines={1} style={styles.doctorName}>
          Dr. Stone Gaze
        </Text>
        <Text numberOfLines={1} style={styles.doctorBio}>
          Cardiologa
        </Text>
      </View>
      <View style={styles.wrapperIconStar}>
        <IconStar name="star-sharp" size={16} color="#f38744" />
        <Text style={styles.rating}>4.5</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 4,
    flex: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#a6a8aa",
  },
  doctorName: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.light.text,
  },
  doctorBio: {
    fontSize: 13,
    color: Colors.light.textSecondary,
    marginTop: 4,
  },
  wrapperIconStar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    padding: 6,
  },
  rating: {
    color: Colors.light.textSecondary,
    fontWeight: "600",
    fontSize: 13,
  },
});

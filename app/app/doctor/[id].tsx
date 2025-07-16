import InfoCard from "@/components/InfoCard";
import InfoDoctorCard from "@/components/InfoDoctorCard";
import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function DoctorDetails() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Colors.light.background },
        }}
      />
      <View style={styles.containerAvatarNameDoctor}>
        <View style={styles.avatar}></View>
        <View style={{ flex: 1 }}>
          <Text numberOfLines={1} style={styles.doctorName}>
            Dr. Stone Gaze
          </Text>
          <Text numberOfLines={1} style={styles.doctorBio}>
            Cardiologa
          </Text>
        </View>
      </View>
      <InfoDoctorCard />
      <InfoCard
        title="Biografía"
        description="Eu sunt ea id ea ullamco et culpa nostrud. Enim veniam cillum ipsum aliquip consectetur incididunt nulla nisi proident voluptate anim."
      />
      <InfoCard
        title="Lugar de trabajo"
        description="Eu sunt ea id ea ullamco et culpa nostrud. Consequat nostrud nulla labore velit."
      >
        <View
          style={{
            height: 120,
            borderWidth: 1,
            borderColor: "#a6a8aa",
            borderRadius: 12,
          }}
        />
      </InfoCard>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    paddingHorizontal: 20,
  },
  containerAvatarNameDoctor: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    marginTop: 10,
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
});

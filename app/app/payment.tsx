import ScheduleDateCard from "@/components/ScheduleDateCard";
import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Payment() {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: Colors.light.background,
        padding: 20,
      }}
      showsVerticalScrollIndicator={false}
    >
      <Stack.Screen
        options={{
          headerTitle: "Pago",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Colors.light.background },
          headerTitleStyle: {
            color: Colors.light.text,
            fontWeight: "600",
          },
        }}
      />
      <View style={styles.containerAvatarNameDoctor}>
        <Image
          source={require("@/assets/images/avatar-default.png")}
          style={styles.avatar}
        />
        <View style={{ flex: 1 }}>
          <Text numberOfLines={1} style={styles.doctorName}>
            Doctor name
          </Text>
          <Text numberOfLines={1} style={styles.specialty}>
            Specialty
          </Text>
        </View>
      </View>
      <ScheduleDateCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
  },
  doctorName: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.light.text,
    textTransform: "capitalize",
  },
  specialty: {
    fontSize: 13,
    color: Colors.light.textSecondary,
    marginTop: 4,
    textTransform: "capitalize",
  },
});

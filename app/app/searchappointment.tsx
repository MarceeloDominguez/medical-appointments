import Header from "@/components/Header";
import SpecialtyCard from "@/components/SpecialtyCard";
import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

const SPECIALTIES = [
  { id: "1", name: "Cardiología" },
  { id: "2", name: "Dermatología" },
  { id: "3", name: "Pediatría" },
  { id: "4", name: "Psiquiatría" },
  { id: "5", name: "Traumatología" },
  { id: "6", name: "Neurología" },
];

export default function SearchAppointment() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: "Reservar una cita",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Colors.light.background,
          },
          headerTitleStyle: {
            color: Colors.light.text,
            fontWeight: "600",
          },
        }}
      />
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={SPECIALTIES}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{ marginBottom: 10 }}
        contentContainerStyle={{ gap: 10, paddingBottom: 60 }}
        ListHeaderComponent={() => (
          <Header
            title="Especialidades médicas"
            subtitle="Selecciona una especialidad médica para ver las citas disponibles"
          />
        )}
        renderItem={({ item }) => <SpecialtyCard item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    flex: 1,
    padding: 20,
  },
});

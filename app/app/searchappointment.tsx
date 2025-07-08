import Header from "@/components/Header";
import SpecialtyCard from "@/components/SpecialtyCard";
import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

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
        }}
      />
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{ marginBottom: 20 }}
        ListHeaderComponent={() => (
          <Header
            title="Especialidades médicas"
            subtitle="Selecciona una especialidad médica para ver las citas disponibles"
          />
        )}
        renderItem={({ item }) => <SpecialtyCard />}
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

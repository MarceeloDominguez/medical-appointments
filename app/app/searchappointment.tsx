import Header from "@/components/Header";
import SpecialtyCard from "@/components/SpecialtyCard";
import Error from "@/components/ui/Error";
import Loading from "@/components/ui/Loading";
import { Colors } from "@/constants/Colors";
import { useGetSpecialties } from "@/queries/specialties";
import { Stack } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

export default function SearchAppointment() {
  const { data: SPECIALTIES, isLoading, error } = useGetSpecialties();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error title="Hubo un error, volver a intentar." />;
  }

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

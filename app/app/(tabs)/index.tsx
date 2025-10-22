import CustomSearch from "@/components/CustomSearch";
import Header from "@/components/Header";
import ListOfScheduledAppointments from "@/components/ListOfScheduledAppointments";
import ListServiceOptions from "@/components/ListServiceOptions";
import { Colors } from "@/constants/Colors";
import { serviceOptions } from "@/constants/ServiceOptions";
import { useAuth } from "@/contexts/AuthContext";
import { useGetAppointmentsByUserId } from "@/queries/appointment";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const { user } = useAuth();
  const { data } = useGetAppointmentsByUserId(user?.id || "");

  return (
    <View style={styles.container}>
      <Header
        title={"Hola, " + (user ? user.name : "Invitado")}
        subtitle="Que siempre estés con buena salud"
        showIconBell={true}
        style={{ paddingHorizontal: 20 }}
      />
      <CustomSearch
        placeholderText="Síntomas, enfermedades..."
        style={{ marginHorizontal: 20 }}
      />
      {data && data.length > 0 && <ListOfScheduledAppointments />}
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={serviceOptions}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ gap: 10 }}
        contentContainerStyle={{
          padding: 20,
        }}
        numColumns={2}
        renderItem={({ item }) => <ListServiceOptions item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    paddingTop: 50,
    flex: 1,
  },
});

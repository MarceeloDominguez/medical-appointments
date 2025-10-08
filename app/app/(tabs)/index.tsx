import CustomSearch from "@/components/CustomSearch";
import Header from "@/components/Header";
import ListOfScheduledAppointments from "@/components/ListOfScheduledAppointments";
import ListServiceOptions from "@/components/ListServiceOptions";
import { Colors } from "@/constants/Colors";
import { serviceOptions } from "@/constants/ServiceOptions";
import { useAuth } from "@/contexts/AuthContext";
import React from "react";
import { FlatList, StyleSheet } from "react-native";

export default function HomeScreen() {
  const { user } = useAuth();

  return (
    <FlatList
      keyExtractor={(_, index) => index.toString()}
      data={serviceOptions}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => (
        <Header
          title={"Hola, " + (user ? user.name : "Invitado")}
          subtitle="Que siempre estés con buena salud"
          showIconBell={true}
        >
          <CustomSearch placeholderText="Síntomas, enfermedades..." />
          <ListOfScheduledAppointments />
        </Header>
      )}
      ListHeaderComponentStyle={{ marginBottom: 20 }}
      columnWrapperStyle={{ gap: 10 }}
      contentContainerStyle={styles.container}
      numColumns={2}
      renderItem={({ item }) => <ListServiceOptions item={item} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    padding: 20,
    paddingTop: 50,
    flex: 1,
  },
});

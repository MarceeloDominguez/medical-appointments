import CustomSearch from "@/components/CustomSearch";
import DoctorCard from "@/components/DoctorCard";
import Error from "@/components/ui/Error";
import Loading from "@/components/ui/Loading";
import { Colors } from "@/constants/Colors";
import { useGetDoctorsBySpecialty } from "@/queries/doctors";
import { useSpecialtyById } from "@/queries/specialties";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function SpecialtyDetails() {
  const { id } = useLocalSearchParams();
  const { data, isLoading } = useSpecialtyById(Number(id));
  const {
    data: doctorsBySpecialty,
    isLoading: doctorsBySpecialtyLoading,
    error,
  } = useGetDoctorsBySpecialty(Number(id));

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () =>
        isLoading || !data?.name ? (
          <View style={{ width: 100 }}>
            <ActivityIndicator size="small" color={Colors.light.text} />
          </View>
        ) : (
          <Text style={styles.specialtyName}>{data.name}</Text>
        ),
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: Colors.light.background,
      },
    });
  }, [navigation, isLoading, data]);

  if (doctorsBySpecialtyLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <CustomSearch placeholderText="Buscar un doctor" />
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={doctorsBySpecialty}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{ marginBottom: 10 }}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({ item }) => <DoctorCard doctor={item} />}
        ListEmptyComponent={() => (
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text style={{ color: Colors.light.text }}>
              No hay doctores disponibles para esta especialidad.
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingHorizontal: 20,
  },
  contentContainerStyle: { gap: 20, paddingBottom: 60, paddingTop: 20 },
  specialtyName: {
    color: Colors.light.text,
    fontWeight: "600",
    fontSize: 18,
    textTransform: "capitalize",
  },
});

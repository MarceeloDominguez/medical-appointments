import CustomSearch from "@/components/CustomSearch";
import DoctorCard from "@/components/DoctorCard";
import { Colors } from "@/constants/Colors";
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

  return (
    <View style={styles.container}>
      <CustomSearch />
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={[1, 2, 3, 4, 5]}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{ marginBottom: 10 }}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({ item }) => <DoctorCard />}
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

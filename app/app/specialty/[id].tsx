import { Colors } from "@/constants/Colors";
import { useSpecialtyById } from "@/queries/specialties";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

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
    });
  }, [navigation, isLoading, data]);

  return (
    <View>
      <Text>SpecialtyDetails</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  specialtyName: {
    color: Colors.light.text,
    fontWeight: "600",
    fontSize: 18,
    textTransform: "capitalize",
  },
});

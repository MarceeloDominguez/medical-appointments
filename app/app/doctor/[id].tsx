import InfoCard from "@/components/InfoCard";
import InfoDoctorCard from "@/components/InfoDoctorCard";
import Error from "@/components/ui/Error";
import Loading from "@/components/ui/Loading";
import { Colors } from "@/constants/Colors";
import { useGetDoctorById } from "@/queries/doctors";
import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function DoctorDetails() {
  const { id } = useLocalSearchParams();
  const doctorId = Array.isArray(id) ? id[0] : id ?? "";
  const { data, isLoading, error } = useGetDoctorById(doctorId);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

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
            {data?.user.name}
          </Text>
          <Text numberOfLines={1} style={styles.doctorBio}>
            {data?.specialty.name}
          </Text>
        </View>
      </View>
      <InfoDoctorCard
        hospital={data?.hospital!}
        workingHours={data?.workingHours}
      />
      <InfoCard title="Biografía" description={data?.bio} />
      <InfoCard title="Lugar de trabajo" description={data?.location}>
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
    textTransform: "capitalize",
  },
  doctorBio: {
    fontSize: 13,
    color: Colors.light.textSecondary,
    marginTop: 4,
    textTransform: "capitalize",
  },
});

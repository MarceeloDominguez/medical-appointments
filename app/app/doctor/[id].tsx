import InfoCard from "@/components/InfoCard";
import InfoDoctorCard from "@/components/InfoDoctorCard";
import Button from "@/components/ui/Button";
import Error from "@/components/ui/Error";
import Loading from "@/components/ui/Loading";
import { Colors } from "@/constants/Colors";
import { useGetDoctorById } from "@/queries/doctors";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";

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
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Stack.Screen
          options={{
            headerTitle: "",
            headerShadowVisible: false,
            headerStyle: { backgroundColor: Colors.light.background },
          }}
        />
        <View style={styles.containerAvatarNameDoctor}>
          <Image
            source={require("@/assets/images/avatar-default.png")}
            style={styles.avatar}
          />
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
          <View style={styles.containerMap}>
            <MapView
              style={styles.mapView}
              initialRegion={{
                latitude: -34.6037,
                longitude: -58.3816,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
            />
          </View>
        </InfoCard>
      </ScrollView>
      <View style={styles.containerButton}>
        <Link href={`/makeappointment?doctorId=${doctorId}`} asChild>
          <Button title="Agendar cita" />
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    paddingHorizontal: 20,
    marginBottom: 120,
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
    resizeMode: "contain",
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
  containerMap: {
    overflow: "hidden",
    borderRadius: 12,
  },
  mapView: {
    height: 120,
  },
  containerButton: {
    height: 120,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#e8ecf1",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  // button: {
  //   backgroundColor: Colors.light.primary,
  //   height: 40,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   margin: 20,
  //   borderRadius: 8,
  // },
  // textButton: {
  //   color: Colors.light.background,
  //   fontWeight: "bold",
  // },
});

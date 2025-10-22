import { Colors } from "@/constants/Colors";
import { useAuth } from "@/contexts/AuthContext";
import { useGetAppointmentsByUserId } from "@/queries/appointment";
import { formatDate } from "@/utils/date";
import Calendar from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function ListOfScheduledAppointments() {
  const { user } = useAuth();
  const { data, isLoading } = useGetAppointmentsByUserId(user?.id || "");

  if (isLoading || !data) {
    return (
      <View style={styles.containerLoading}>
        <ActivityIndicator size="small" color={Colors.light.primary} />
      </View>
    );
  }

  return (
    <View>
      <Text style={styles.title}>Tus próximas citas</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View style={styles.containerAvatarNameDoctor}>
              <Image
                source={require("@/assets/images/avatar-default.png")}
                style={styles.avatar}
              />
              <View style={{ flex: 1 }}>
                <Text numberOfLines={1} style={styles.doctorName}>
                  {item.doctor.user.name}
                </Text>
                <Text numberOfLines={1} style={styles.specialty}>
                  {item.doctor.specialty.name}
                </Text>
              </View>
            </View>
            <View style={styles.wrapperCardBottom}>
              <Calendar
                name="calendar-clear-outline"
                size={18}
                color="#f0f3f7"
              />
              <Text style={styles.date}>{formatDate(item.date)}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    paddingHorizontal: 20,
    color: Colors.light.text,
  },
  container: {
    backgroundColor: Colors.light.primary,
    padding: 15,
    borderRadius: 12,
    marginTop: 16,
  },
  containerAvatarNameDoctor: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#a6a8aa",
    resizeMode: "contain",
    backgroundColor: "#f0f3f7",
  },
  doctorName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
    textTransform: "capitalize",
  },
  specialty: {
    fontSize: 13,
    color: "#f0f3f7",
    marginTop: 4,
    textTransform: "capitalize",
  },
  wrapperCardBottom: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#183188",
    padding: 10,
    borderRadius: 12,
  },
  date: {
    color: "#f0f3f7",
    fontSize: 13,
    fontWeight: "500",
  },
  containerLoading: {
    marginTop: 16,
    alignItems: "center",
    height: 130,
    justifyContent: "center",
  },
});

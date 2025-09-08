import ScheduleDateCard from "@/components/ScheduleDateCard";
import Button from "@/components/ui/Button";
import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const paymentMethods = [
  { id: 1, name: "Con obra social / prepaga" },
  { id: 2, name: "Particular (sin cobertura)" },
];

export default function Payment() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: Colors.light.background,
        padding: 20,
      }}
      showsVerticalScrollIndicator={false}
    >
      <Stack.Screen
        options={{
          headerTitle: "Cobertura médica",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Colors.light.background },
          headerTitleStyle: {
            color: Colors.light.text,
            fontWeight: "600",
          },
        }}
      />
      <View style={styles.containerAvatarNameDoctor}>
        <Image
          source={require("@/assets/images/avatar-default.png")}
          style={styles.avatar}
        />
        <View style={{ flex: 1 }}>
          <Text numberOfLines={1} style={styles.doctorName}>
            Doctor name
          </Text>
          <Text numberOfLines={1} style={styles.specialty}>
            Specialty
          </Text>
        </View>
      </View>
      <ScheduleDateCard />
      <View style={{ marginTop: 24 }}>
        <Text style={styles.text}>Forma de atención</Text>
        <View>
          {paymentMethods.map((item) => (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item.id}
              onPress={() => setSelectedMethod(item.name)}
              style={styles.buttonSelected}
            >
              <Text style={styles.buttonSelectedText}>{item.name}</Text>
              <View
                style={{
                  ...styles.containerCircle,
                  borderColor:
                    selectedMethod === item.name
                      ? Colors.light.primary
                      : "#a6a8aa",
                }}
              >
                <View
                  style={{
                    backgroundColor:
                      selectedMethod === item.name
                        ? Colors.light.primary
                        : "#ccc",
                    ...styles.circle,
                  }}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.containerButtonBottom}>
        <Button title="Confirmar turno" style={{ marginHorizontal: 0 }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
  },
  doctorName: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.light.text,
    textTransform: "capitalize",
  },
  specialty: {
    fontSize: 13,
    color: Colors.light.textSecondary,
    marginTop: 4,
    textTransform: "capitalize",
  },
  text: {
    fontSize: 13,
    color: Colors.light.text,
    fontWeight: "bold",
    marginBottom: 5,
  },
  buttonSelected: {
    height: 50,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
  },
  buttonSelectedText: {
    fontSize: 13,
    color: Colors.light.text,
    fontWeight: "500",
  },
  containerCircle: {
    width: 16,
    height: 16,
    borderRadius: 16 / 2,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
  },
  containerButtonBottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20,
  },
});

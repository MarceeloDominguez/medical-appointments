import Header from "@/components/Header";
import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const days = Array.from({ length: 7 }).map((_, index) => {
  const date = new Date();
  date.setDate(date.getDate() + index);
  return {
    id: index.toString(),
    day: date.toLocaleDateString("es-ES", { weekday: "short" }),
    date: date.getDate(),
    isSunday: date.getDay() === 0,
  };
});

export default function MakeAppointment() {
  const [selecctedDate, setSelecctedDate] = useState<string | null>(null);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Stack.Screen
        options={{
          headerTitle: "Agendar cita",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Colors.light.background },
          headerTitleStyle: {
            color: Colors.light.text,
            fontWeight: "600",
          },
        }}
      />

      <View style={styles.wrapperHeader}>
        <Header
          title={`Selecciona una fecha y hora \npara tu cita`}
          subtitle="Tu médico te atenderá en la fecha y hora seleccionada"
        />
      </View>
      <View style={{ marginTop: 26 }}>
        <Text style={styles.title}>Selecciona el día</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.containerSelectDate}>
            {days.map((day) => (
              <Pressable
                onPress={() => setSelecctedDate(day.id)}
                disabled={day.isSunday}
                key={day.id}
                style={{
                  ...styles.cardSelectDate,
                  backgroundColor: day.isSunday
                    ? "#cacad8"
                    : selecctedDate === day.id
                    ? Colors.light.primary
                    : Colors.light.background,
                  borderColor:
                    selecctedDate === day.id ? Colors.light.primary : "#bbc1c7",
                }}
              >
                <Text
                  style={{
                    color:
                      selecctedDate === day.id
                        ? Colors.light.background
                        : Colors.light.text,
                    ...styles.day,
                  }}
                >
                  {day.day}
                </Text>
                <Text
                  style={{
                    color:
                      selecctedDate === day.id
                        ? Colors.light.background
                        : Colors.light.text,
                    ...styles.date,
                  }}
                >
                  {day.date}
                </Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  wrapperHeader: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 16,
    color: Colors.light.text,
    fontWeight: "500",
    paddingLeft: 20,
  },
  containerSelectDate: {
    flexDirection: "row",
    marginHorizontal: 20,
    gap: 12,
    marginVertical: 12,
  },
  cardSelectDate: {
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    width: 60,
    borderWidth: 0.5,
  },
  day: {
    fontWeight: "600",
    textTransform: "capitalize",
    fontSize: 13,
  },
  date: {
    fontWeight: "600",
    fontSize: 13,
  },
});

import Header from "@/components/Header";
import SelectableCard from "@/components/SelectableCard";
import Button from "@/components/ui/Button";
import { Colors } from "@/constants/Colors";
import { Link, Stack } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

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
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
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
      <View style={styles.wrapperComponentSelectableCard}>
        <Text style={styles.title}>Selecciona un día</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.containerSelectDate}>
            {days.map((day) => (
              <SelectableCard
                isSelected={selectedDate === day.id}
                disabled={day.isSunday}
                onPress={() => setSelectedDate(day.id)}
                key={day.id}
                title={day.day}
                subtitle={day.date.toString()}
              />
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.wrapperComponentSelectableCard}>
        <Text style={styles.title}>Elige un horario en la mañana</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.containerSelectDate}>
            {["8:00", "9:00", "10:00", "11:00", "12:00"].map((time) => (
              <SelectableCard
                isSelected={selectedTime === time}
                onPress={() => setSelectedTime(time)}
                key={time}
                title={time}
                style={{ width: 80 }}
              />
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.wrapperComponentSelectableCard}>
        <Text style={styles.title}>Elige un horario en la tarde</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.containerSelectDate}>
            {["14:00", "15:00", "16:00", "17:00", "18:00"].map((time) => (
              <SelectableCard
                isSelected={selectedTime === time}
                onPress={() => setSelectedTime(time)}
                key={time}
                title={time}
                style={{ width: 80 }}
              />
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.wrapperButton}>
        <Link href="/payment" asChild>
          <Button title="Siguiente" />
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  wrapperComponentSelectableCard: {
    marginTop: 26,
  },
  wrapperButton: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 40,
  },
});

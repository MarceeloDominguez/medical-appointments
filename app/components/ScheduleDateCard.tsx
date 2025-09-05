import { Colors } from "@/constants/Colors";
import Icon from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ScheduleDateCard() {
  return (
    <View style={{ marginTop: 16 }}>
      <View style={styles.containerHeader}>
        <Text style={styles.dateTitle}>Día y hora</Text>
        <View>
          <Text style={styles.textEdit}>Editar</Text>
        </View>
      </View>
      <View style={styles.wrapperInfo}>
        <View style={styles.containerIcon}>
          <Icon
            name="calendar-clear-outline"
            size={22}
            color={Colors.light.primary}
          />
        </View>
        <View style={styles.wrapperTexts}>
          <Text style={styles.title}>Turno</Text>
          <Text style={styles.textDate}>
            Viernes, 10 de Sep. 2025, 14:00 hs.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  dateTitle: {
    fontSize: 13,
    color: Colors.light.text,
    fontWeight: "bold",
  },
  textEdit: {
    fontSize: 13,
    fontWeight: "bold",
    color: Colors.light.primary,
  },
  wrapperInfo: {
    flexDirection: "row",
    gap: 10,
    marginTop: 12,
  },
  containerIcon: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#254edb",
    backgroundColor: "rgba(72, 69, 219, 0.2)",
  },
  wrapperTexts: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 12,
    color: Colors.light.textSecondary,
  },
  textDate: {
    fontSize: 13,
    color: Colors.light.text,
    fontWeight: "600",
  },
});

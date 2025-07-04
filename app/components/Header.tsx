import { Colors } from "@/constants/Colors";
import Feather from "@expo/vector-icons/Feather";
import IconSearch from "@expo/vector-icons/Ionicons";
import IconsFilter from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Header() {
  return (
    <View>
      <View style={styles.wrapperText}>
        <View>
          <Text style={styles.title}>Hola Marcelo!</Text>
          <Text style={styles.subtitle}>Que siempre estés con buena salud</Text>
        </View>
        <View style={styles.wrapperIconBell}>
          <Feather name="bell" size={20} color={Colors.light.text} />
        </View>
      </View>
      <View style={styles.wrapperInput}>
        <IconSearch
          name="search-outline"
          size={20}
          style={styles.iconSearch}
          color={Colors.light.text}
        />
        <TextInput
          placeholder="Síntomas, enfermedades..."
          style={styles.input}
        />
        <View style={styles.wrapperIconFilter}>
          <IconsFilter
            size={24}
            name="filter-list"
            color={Colors.light.primary}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.light.text,
  },
  subtitle: {
    fontSize: 14,
    marginTop: 4,
    color: Colors.light.textSecondary,
  },
  wrapperIconBell: {
    backgroundColor: Colors.light.borderColor,
    padding: 6,
    borderRadius: 8,
  },
  wrapperInput: {
    flexDirection: "row",
    marginTop: 20,
    gap: 10,
  },
  iconSearch: {
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  input: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.light.borderColor,
    paddingLeft: 40,
    paddingRight: 10,
    height: 40,
    flex: 1,
  },
  wrapperIconFilter: {
    backgroundColor: Colors.light.borderColor,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
});

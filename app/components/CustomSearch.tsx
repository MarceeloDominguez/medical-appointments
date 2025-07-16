import { Colors } from "@/constants/Colors";
import IconSearch from "@expo/vector-icons/Ionicons";
import IconsFilter from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

type CustomSearchProps = {
  placeholderText?: string;
};

export default function CustomSearch({
  placeholderText = "Placeholder text",
}: CustomSearchProps) {
  return (
    <View style={styles.wrapperInput}>
      <IconSearch
        name="search-outline"
        size={20}
        style={styles.iconSearch}
        color={Colors.light.text}
      />
      <TextInput placeholder={placeholderText} style={styles.input} />
      <View style={styles.wrapperIconFilter}>
        <IconsFilter
          size={24}
          name="filter-list"
          color={Colors.light.primary}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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

import { Colors } from "@/constants/Colors";
import { ServiceOption } from "@/constants/ServiceOptions";
import Icon from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const WIDTH = Dimensions.get("window").width;

const CARD_WIDTH = WIDTH / 2 - 25;

type Props = {
  item: ServiceOption;
};

export default function ListServiceOptions({ item }: Props) {
  return (
    <Link
      href={item.route as any}
      style={{
        ...styles.container,
        backgroundColor: item.color,
      }}
    >
      <View style={styles.card}>
        <View
          style={{
            backgroundColor: item.backgroundIcon,
            borderColor: item.borderColor,
            ...styles.wrapperIcon,
          }}
        >
          <Icon name={item.icon} size={25} color={item.iconColor} />
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    width: CARD_WIDTH,
    borderRadius: 10,
  },
  card: {
    padding: 8,
  },
  wrapperIcon: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 0.5,
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 16,
    color: Colors.light.text,
    fontWeight: "bold",
    marginTop: 10,
  },
  description: {
    fontSize: 13,
    color: Colors.light.textSecondary,
    marginTop: 4,
  },
});

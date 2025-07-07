import Header from "@/components/Header";
import ListServiceOptions from "@/components/ListServiceOptions";
import { Colors } from "@/constants/Colors";
import { serviceOptions } from "@/constants/ServiceOptions";
import React from "react";
import { FlatList, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <FlatList
      keyExtractor={(_, index) => index.toString()}
      data={serviceOptions}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => <Header />}
      ListHeaderComponentStyle={{ marginBottom: 20 }}
      columnWrapperStyle={{ gap: 10 }}
      contentContainerStyle={styles.container}
      numColumns={2}
      renderItem={({ item }) => <ListServiceOptions item={item} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    padding: 20,
    paddingTop: 50,
    flex: 1,
  },
});

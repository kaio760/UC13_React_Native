import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "@react-native-vector-icons/feather";

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name="activity" size={30} color="#0000ff" />
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  });

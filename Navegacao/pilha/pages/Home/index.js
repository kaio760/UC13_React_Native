import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  function dadosNavega() {
    navigation.navigate("Contato", { nome: "Kaio", email: "kaio@gmail.com" });
  }

return (
    <View style={styles.container}>
        <Text style={styles.title} accessibilityRole="header">
            Página Home
        </Text>
        <Text style={styles.subtitle}>Bem-vindo à página inicial!</Text>

        <View style={{ marginBottom: 10 }}>
            <Button
                title="Ir para Sobre"
                onPress={() => navigation.navigate("Sobre")}
            />
        </View>

        <View style={{ marginBottom: 10 }}>
            <Button
                title="Ir para Contato"
                onPress={dadosNavega}
            />
        </View>
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
    lineHeight: 30,
    letterSpacing: 1,
    textShadowColor: "#aaa",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 24,
    fontFamily: "Arial",
    letterSpacing: 0.5,
    marginBottom: 30,
  },
});
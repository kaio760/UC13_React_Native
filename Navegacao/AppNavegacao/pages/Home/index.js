import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  function dadosNavega() {
    navigation.navigate("Contato", { email: "kaio@gmail.com", password: "123" });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title} accessibilityRole="header">
        Página Home
      </Text>
      <Text style={styles.subtitle}>Bem-Vindo. Está é a pagina inicial 😁!</Text>

      <View style={{ marginBottom: 10 }}>
        <Button
          title="Ir para Sobre"
          onPress={() => navigation.navigate("Sobre")}
        />
      </View>

      <View style={{ marginBottom: 10 }}>
        <Button title="Ir para Contato" onPress={dadosNavega} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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

  
});

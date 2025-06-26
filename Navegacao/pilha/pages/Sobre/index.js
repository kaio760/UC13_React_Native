import React from "react";
import { StyleSheet, Text, View, Button, } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Sobre() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pagina Sobre</Text>


      <View style={{ marginTop: 20, width: "70%" }}>
        <Button
          title="Ir para Contato"
          onPress={() => navigation.navigate("Contato")}
          accessibilityLabel="Navegar para a página Contato"
        />
      </View>

      <View style={{ marginTop: 10, width: "70%" }}>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
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

  title: {
    fontSize:18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    lineHeight: 30,

    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
});

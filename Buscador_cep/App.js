import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";
import api from "./src";

export default function App() {
  const [cep, setCep] = useState("");
  const [dados, setDados] = useState(null);

  const buscarCep = async () => {
    if (cep.length !== 8) {
      alert("É necessário que o CEP tenha 8 dígitos.");
      return;
    }
  
    try {
      const response = await api.get(`${cep}/json/`); // Axios já devolve JSON
      setDados(response.data);                        // Usa response.data
    } catch (error) {
      console.error(error);
      alert("Erro ao buscar o CEP");
    }
  };

  //deletar assim que apertar o botao deletar
  const deletarCep = () => {
    setDados(null);
    setCep("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscador de CEP</Text>
      <TextInput style={styles.input} placeholder="Digite o CEP" keyboardType="numeric" value={cep} onChangeText={setCep} />

      <TouchableOpacity style={styles.botao} onPress={buscarCep}>
        <Text style={styles.botaoTexto}>Buscar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={deletarCep}>
        <Text style={styles.botaoTexto}>Excluir</Text>
      </TouchableOpacity>

      {dados && !dados.erro && (
        <View style={styles.resultado}>
          <Text>Rua: {dados.logradouro}</Text>
          <Text>Bairro: {dados.bairro}</Text>
          <Text>Cidade: {dados.localidade}</Text>
          <Text>Estado: {dados.uf}</Text>
        </View>
      )}
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
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },

  input: {
    height: 40,
    borderColor: "grey",
    borderWidth: 1.5,
    width: "70%",
    paddingHorizontal: 15,
    marginBottom: 25,
    alignSelf: "center",
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },

  botao: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
    width: 120,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },

  botaoTexto: {
    alignSelf: "center",
    color: "#fff",
    fontWeight: "bold",
  },



});
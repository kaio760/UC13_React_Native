import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Login() {
    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function Logar() {
        console.log(email);
        if (email === "" || password === "") {
            alert("Preencha todos os campos");
            return;
        } else if (email !== "Kaio") {
            alert("Email não encontrado.");
            return;
        } else if (password !== "123") {
            alert("Senha incorreta.");
            return;
        } else {
            navigation.navigate("Home", { nomeUsuario: "Kaio" });
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.viewInput}>
                <Text style={styles.texts}>E-mail</Text>

                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholder="E-mail"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <Text style={styles.texts}>Senha</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    placeholder="Senha"
                    secureTextEntry={true}
                />
            </View>

            <View style={styles.viewBtn}>
                <TouchableOpacity style={styles.btn} onPress={Logar}>
                    <Text style={styles.btnText}>Entrar</Text>
                </TouchableOpacity>
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

  viewInput: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  texts: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },

  btn:{
    backgroundColor: "darkorange",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  }
  
});

import React, { useState, useEffect } from 'react'; 
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
  const [nome, setNome] = useState('');
  const [textoDigitado, setTextoDigitado] = useState('');
  const [txtBotao, setTxtBotao] = useState('Entrar');

  function alterarNome() {
    if (textoDigitado === '' && txtBotao === 'Entrar') {
      Alert.alert('Atenção!', 'Nome não digitado!');
      return;
    }

    if (txtBotao === 'Sair') {
      setNome('');
      setTextoDigitado('');
      setTxtBotao('Entrar');
      return;
    }

    setNome(textoDigitado);
    setTxtBotao('Sair');

    async function saveStorage() {
      await AsyncStorage.setItem('nomes', nome);
      alert('salvo')
    }

    saveStorage();
  }

  return (
    <View style={styles.container}>
      <Text style={{}}>{nome ? `Seja bem-vindo, ${nome}!` : ''}</Text>

      <TextInput style={{borderWidth:0.8, height:40, margin:10, borderRadius:20}} placeholder="Digite seu nome..." value={textoDigitado} onChangeText={setTextoDigitado}/>

      <TouchableOpacity onPress={alterarNome} style={{backgroundColor: 'darkorange', padding: 10, marginTop:3, borderRadius:10}} >
        <Text style={{color:'black'}}>{txtBotao}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

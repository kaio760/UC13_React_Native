import React, { useState, useEffect, useMemo, useRef } from 'react'; 
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
  const [nome, setNome] = useState('');
  const [textoDigitado, setTextoDigitado] = useState('');
  const [txtBotao, setTxtBotao] = useState('Entrar');
  const [userLog, setUserLog] = useState('');
  const senhaInput = useRef(null);

  useEffect(()=>{
    async function getStorage() {
      const nomeStorage = await AsyncStorage.getItem('nomes');
      if(nomeStorage !== null){
        userLog(nomeStorage);
      }
    }
    getStorage();
  },[]);

  useEffect(()=>{
    async function saveStorage() {
      await AsyncStorage.setItem('nomes', userLog); 
    }
    saveStorage();
  },[userLog]);

  const letrasNome = useMemo(()=>{
    return userLog.length;
    //console.log('Mudou');
  },[userLog])

  function alterarNome() {
    if (textoDigitado === '' && txtBotao === 'Entrar') {
      Alert.alert('Atenção!', 'Nome não digitado!');
      return;
    }
  
    if (txtBotao === 'Entrar' && senhaInput.current.value === '') {
      Alert.alert('Atenção!', 'Senha não digitada!');
      return;
    }

    else if (txtBotao === 'Sair') {
      setNome('');
      setTextoDigitado('');
      setTxtBotao('Entrar');
      return;
    }

    



    setUserLog(textoDigitado);
    setNome(textoDigitado);
    setTextoDigitado('');
    setTxtBotao('Sair');
    senhaInput.current.focus();

    async function saveStorage() {
      await AsyncStorage.setItem('nomes', textoDigitado);
      alert('Nome salvo com sucesso!');
    }

    saveStorage();
  }

  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 2, color: 'red', fontSize: 13}}>{userLog ? "Usuário Logado: " + userLog : ""}</Text>
      <Text style={{marginBottom: 8, color: 'red', fontSize: 13}}>{userLog ? "Usuário Logado contém: " + letrasNome + " Letras!" : ""}</Text>
      <Text style={{marginBottom: 10, fontSize: 18}}>{nome ? "Seja bem-vindo, " + nome + "!" : ''}</Text>

      <TextInput style={{borderWidth: 0.8, height: 40, margin: 10, borderRadius: 20, paddingHorizontal: 10}} placeholder="Digite seu nome..." value={textoDigitado} onChangeText={setTextoDigitado} />
      <TextInput style={{borderWidth: 0.8, height: 40, margin: 10, borderRadius: 20, paddingHorizontal: 10}} placeholder="Digite sua senha..." ref={senhaInput} secureTextEntry={true} />

      <TouchableOpacity onPress={alterarNome} 
        style={{backgroundColor: 'darkorange', padding: 10, marginTop: 10, borderRadius: 10, alignItems: 'center'}} 
      >
        <Text style={{color: 'black', fontWeight: 'bold'}}>{txtBotao}</Text>
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
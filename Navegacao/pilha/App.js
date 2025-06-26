import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}
        options={{
          title:'tela de inicio',
          headerStyle:{
            backgroundColor: '#2296f3'
          },
          headerTintColor:'#ffff'
        }}
        ></Stack.Screen>
        <Stack.Screen name="Sobre" component={Sobre}></Stack.Screen>
        <Stack.Screen name="Contato" component={Contato}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

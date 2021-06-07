import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { Text, View, Button, Alert } from 'react-native';
import {css} from './assets/css/Css';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home,Login,Rastreio} from './views';
import AreaRestrita from "./views/areaRestrita/AreaRestrita";
import NovoCadastro from "./views/NovoCadastro";
import Opcao from "./views/Opcao";
import CadastroChaves from "./views/areaChaves/CadastroChaves";
import Devolucao from "./views/areaChaves/Devolucao";
import Reserva from "./views/areaChaves/Reserva";
import AreaChaves from "./views/areaChaves/AreaChaves";



export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
                name="Home"
                component={Home}
                options={{
                title:"APP UVV - CONTROLE DE CHAVES",
                headerStyle:{backgroundColor:"blue"},
                headerTintColor:'#fff',
                headerTitleStyle:{fontWeight:'bold', alignSelf:'center'}
            }}
        />
        <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
        <Stack.Screen name="AreaChaves" component={AreaChaves} options={{headerShown:false}} />
        <Stack.Screen name="AreaRestrita" options={{headerShown:false}} component={AreaRestrita} />
        <Stack.Screen name="NovoCadastro" options={{headerShown:false}} component={NovoCadastro} />
        <Stack.Screen name="CadastroChaves" options={{headerShown:false}} component={CadastroChaves} />
        <Stack.Screen name="Devolucao" options={{headerShown:false}} component={Devolucao} />
        <Stack.Screen name="Reserva" options={{headerShown:false}} component={Reserva} />
        <Stack.Screen name="Opcao" options={{headerShown:false}} component={Opcao} />
      </Stack.Navigator>
    </NavigationContainer>
);

}

import React, {useState,useEffect} from 'react';
import {Text, View, Button, AsyncStorage} from 'react-native';
import {css} from '../../assets/css/Css';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {CadastroChaves,Reserva,Devolucao} from '../index';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AreaChaves() {

    const [nome,setNome]=useState(null);
    const Tab = createMaterialBottomTabNavigator();

    useEffect(()=>{
        async function getUser()
        {
            let response=await AsyncStorage.getItem('userData');
            let json=JSON.parse(response);
            setNome(json.nome);
        }
        getUser();
    },[]);

    return (
        <Tab.Navigator
                activeColor='red'
                inactiveColor='#fff'
                barStyle={css.area__tab}
        >
            <Tab.Screen
                    name="Chaves"
                    component={CadastroChaves}
                    options={{
                    tabBarIcon:()=>(
                        <Icon name="key" size={20} color="#999" />
                    )
                }}
            />
            <Tab.Screen
                    name="Reservar"
                    component={Reserva}
                    options={{
                    tabBarIcon:()=>(
                        <Icon name="plus" size={20} color="#999" />
                    )
                }}
            />
            <Tab.Screen
                    name="Devolver"
                    component={Devolucao}
                    options={{
                    tabBarIcon:()=>(
                        <Icon name="minus" size={20} color="#999" />
                    )
                }}
            />
        </Tab.Navigator>
    );
}
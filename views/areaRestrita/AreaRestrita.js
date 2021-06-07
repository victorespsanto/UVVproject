import React, {useState,useEffect} from 'react';
import {Text, View, Button, AsyncStorage} from 'react-native';
import {css} from '../../assets/css/Css';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Profile,Cadastro,Edicao} from '../index';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AreaRestrita() {

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
                activeColor='#999'
                inactiveColor='#fff'
                barStyle={css.area__tab}
        >
            <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                    tabBarIcon:()=>(
                        <Icon name="users" size={20} color="#999" />
                    )
                }}
            />
            <Tab.Screen
                    name="Editar"
                    component={Cadastro}
                    options={{
                    tabBarIcon:()=>(
                        <Icon name="edit" size={20} color="#999" />
                    )
                }}
            />
            <Tab.Screen
                    name="Deletar"
                    component={Edicao}
                    options={{
                    tabBarIcon:()=>(
                        <Icon name="trash" size={20} color="#999" />
                    )
                }}
            />
        </Tab.Navigator>
    );
}
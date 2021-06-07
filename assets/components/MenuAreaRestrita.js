import React, { useEffect } from 'react';
import {Text, TouchableOpacity, View, AsyncStorage, BackHandler, Alert} from "react-native";
import {css} from "../css/Css";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MenuAreaRestrita(props)
{

    useEffect(() => {
        const backAction = () => {
            Alert.alert("Alerta!", "Deseja mesmo sair do app?", [
                {
                    text: "Não",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "Sim", onPress: () => {
                    props.navigation.navigate('Home');
                    BackHandler.exitApp();
                    }
                }
            ]);
            return true;
        };
    
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
    
        return () => backHandler.remove();
    }, []);

    async function logout()
    {
        await AsyncStorage.clear();
        props.navigation.navigate('Login');
    }

    return (
        <View style={css.area__menu}>
            <TouchableOpacity style={css.button__home2} onPress={()=>props.navigation.navigate('Home')}>
                <Icon name="home" size={20} color="#999" />
            </TouchableOpacity>

            <Text style={css.area__title}>{props.title}</Text>

            <TouchableOpacity style={css.button__logout} onPress={()=>logout()}>
                <Icon name="sign-out" size={20} color="#999" />
            </TouchableOpacity>
        </View>
    );
}
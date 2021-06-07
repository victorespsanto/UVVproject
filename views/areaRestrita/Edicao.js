import React, {useState,useEffect} from 'react';
import {Text, View, Button, AsyncStorage, TextInput, Alert, TouchableOpacity} from 'react-native';
import {css} from '../../assets/css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuAreaRestrita from "../../assets/components/MenuAreaRestrita";
import config from "../../config/config";

export default function Edicao({navigation}) {

    const [idUser, setIdUser] = useState(null);
    const [nome, setNome] = useState(null);
    const [display, setDisplay] = useState('none')
    
    const [msg, setMsg] = useState(null);

    useEffect(()=>{
       async function getIdUser()
       {
           let response=await AsyncStorage.getItem('userData');
           let json=JSON.parse(response);
           setIdUser(json.id);
           setNome(json.nome.toUpperCase());
       }
       getIdUser();
    });

    function alerta() {
        Alert.alert("Alerta!", "Deseja mesmo apagar registro?", [
            {
                text: "Não",
                onPress: () => null,
                style: "cancel"
            },
            { text: "Sim", onPress: () => {
                sendForm();
                setMsg('Registro apagado!!');
                setDisplay('flex');
                setTimeout(()=>{
                    setDisplay('none');
                },5000);
                logout();
                }
            }
        ]);
        return true;
    };

    function logout()
    {
        navigation.navigate('Home');
    }
    

    async function sendForm()
    {
        let response=await fetch(`${config.urlRoot}delete`,{
            method:'POST',
            body:JSON.stringify({
                id: idUser,
               
            }),
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
        let json=await response.json();
        setMsg(json);
    }


    return (
        <View style={[css.container, css.containerTop, css.darkbg]}>
            <MenuAreaRestrita title='Apagar registro' navigation={navigation} />

            <View style={css.login__form} >
                <Text style={css.text__head}>Nome:</Text>
                <Text style={css.text__Profile}> {nome}</Text>
                <Text style={css.text__head}>Número identificador: </Text>
                <Text style={css.text__Profile}> {idUser}</Text>
            </View>

            
            <View style={[css.login__form, css.trocaSenha]} >
                
                <TouchableOpacity style={css.login__button} onPress={()=>alerta()}>
                    <Text style={css.login__buttonText}>Apagar registro</Text>
                </TouchableOpacity>

                <Text style={css.login__msg(display)} >{ msg }</Text>
            </View>    
        </View>
    );
}
import React, {useState,useEffect} from 'react';
import {Text, View, Button, TextInput, TouchableOpacity} from 'react-native';
import {css} from '../assets/css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuAreaRestrita from "../assets/components/MenuAreaRestrita";
import config from "../config/config";

export default function NovoCadastro({navigation}) {

    
    const [nome, setNome] = useState(null);
    const [senha, setSenha] = useState(null);
    const [confSenha, setConfSenha] = useState(null);
    const [msg, setMsg] = useState(null);
    const [display, setDisplay] = useState('none');
/*
    useEffect(()=>{
       async function getIdUser()
       {
           let response=await AsyncStorage.getItem('userData');
           let json=JSON.parse(response);
           setIdUser(json.id);
       }
       getIdUser();
    });
*/
    async function sendForm()
    {

        if ( senha === confSenha ) {
            let response=await fetch(`${config.urlRoot}create`,{
                method:'POST',
                body:JSON.stringify({                
                    nome: nome,
                    senha: senha                
                }),
                headers:{
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            //let json=await response.json();
            setMsg('Cadastro realizado!');
            setDisplay('flex');
            setTimeout(()=>{
                setDisplay('none');
            },5000);
        } else {
            setMsg('Senhas não conferem!');
            setDisplay('flex');
            setTimeout(()=>{
                setDisplay('none');
            },5000);
        }
    }
        


    return (
        <View style={[css.container, css.containerTop, css.darkbg]}>
            <MenuAreaRestrita title='Novo Usuário' navigation={navigation} />

            <View style={[css.login__form, css.area__novoUsusario]}>
                <Text style={css.login__msg(display)}>{msg}</Text>
                <TextInput style={css.login__input} placeholder='Nome:' onChangeText={text=>setNome(text)} />
                <TextInput style={css.login__input} placeholder='Senha:' onChangeText={text=>setSenha(text)} secureTextEntry={true} />
                <TextInput style={css.login__input} placeholder='Confirmação da Senha:' onChangeText={text=>setConfSenha(text)} secureTextEntry={true} />
                <TouchableOpacity style={css.login__button} onPress={()=>sendForm()}>
                    <Text style={css.login__buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
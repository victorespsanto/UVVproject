import React, {useState,useEffect} from 'react';
import {Text, View, Button, AsyncStorage, TextInput, TouchableOpacity} from 'react-native';
import {css} from '../../assets/css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuAreaRestrita from "../../assets/components/MenuAreaRestrita";
import config from "../../config/config";

export default function Profile({navigation}) {

    const [idUser, setIdUser] = useState(null);
    const [nome, setNome] = useState(null);
    const [senhaAntiga, setSenhaAntiga] = useState(null);
    const [novaSenha, setNovaSenha] = useState(null);
    const [confNovaSenha, setConfNovaSenha] = useState(null);
    const [msg, setMsg] = useState(null);
    const [display, setDisplay] = useState('none');

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

    async function sendForm()
    {
        let response=await fetch(`${config.urlRoot}verifyPass`,{
            method:'POST',
            body:JSON.stringify({
                id: idUser,
                senhaAntiga: senhaAntiga,
                novaSenha: novaSenha,
                confNovaSenha: confNovaSenha
            }),
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
        let json=await response.json();
        setMsg(json);
        setDisplay('flex');
        setTimeout(()=>{
            setDisplay('none');
        },5000);
    }


    return (
        <View style={[css.container, css.containerTop, css.darkbg]}>
            <MenuAreaRestrita title='Perfil' navigation={navigation} />

            <View style={css.login__form} >
                <Text style={css.text__head}>Nome:</Text>
                <Text style={css.text__Profile}> {nome}</Text>
                <Text style={css.text__head}>Número identificador: </Text>
                <Text style={css.text__Profile}> {idUser}</Text>
            </View>

            <View style={[css.login__form, css.trocaSenha]} >
                <Text style={css.text__head}>Troca de senha </Text>
                <Text style={css.login__msg(display)}>{msg}</Text>
                <TextInput style={css.login__input} placeholder='Senha Antiga:' onChangeText={text=>setSenhaAntiga(text)} secureTextEntry={true} />
                <TextInput style={css.login__input}placeholder='Nova Senha:' onChangeText={text=>setNovaSenha(text)} secureTextEntry={true} />
                <TextInput style={css.login__input} placeholder='Confirmação da Nova Senha:' onChangeText={text=>setConfNovaSenha(text)} secureTextEntry={true}/>
                <TouchableOpacity style={css.login__button} onPress={()=>sendForm()}>
                    <Text style={css.login__buttonText}>Trocar</Text>
                </TouchableOpacity>
                </View>    
        </View>
    );
}
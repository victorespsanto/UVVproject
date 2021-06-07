import React, {useState,useEffect} from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View, AsyncStorage} from 'react-native';
import {css} from '../assets/css/Css';
import config from '../config/config.json';

export default function Login({navigation})

{

    const [display, setDisplay]=useState('none');
    const [nome, setNome]=useState(null);
    const [senha, setSenha]=useState(null);
    const [login, setLogin]=useState(null);

    //Envio do formulário de login
    async function sendForm()
    {
        let response=await fetch(`${config.urlRoot}login`,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                senha: senha
            })
        });
        let json=await response.json();
        if(json === 'error'){
            setDisplay('flex');
            setTimeout(()=>{
                setDisplay('none');
            },5000);
        } else {
            await AsyncStorage.setItem('userData', JSON.stringify(json));
            navigation.navigate('Opcao');
        }
    }

    return(
        <KeyboardAvoidingView style={[css.container, css.darkbg]}>
            <View style={css.login__logomarca}>
                <Image source={require('../assets/img/logomarca.png')} />
            </View>

            <View>
                <Text style={css.login__msg(display)}>Usuário ou senha inválidos!</Text>
            </View>

            <View style={css.login__form}>
                <TextInput style={css.login__input} placeholder='Usuário:' onChangeText={text=>setNome(text)} />
                <TextInput style={css.login__input} placeholder='Senha:' onChangeText={text=>setSenha(text)} secureTextEntry={true} />
                <TouchableOpacity style={css.login__button} onPress={()=>sendForm()}>
                    <Text style={css.login__buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={css.buttonNNovoCadastro} onPress={()=>navigation.navigate('NovoCadastro')}>
                    <Text style={css.text__novoCadastro}>NÃO SOU CADASTRADO</Text>
                </TouchableOpacity>
            </View>



        </KeyboardAvoidingView>
    );

}
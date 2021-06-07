import React, {useState,useEffect} from 'react';
import {Text, View, Alert , AsyncStorage, TextInput, TouchableOpacity} from 'react-native';
import {css} from '../../assets/css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuAreaRestrita from "../../assets/components/MenuAreaRestrita";
import config from "../../config/config";

export default function Cadastro({navigation}) {

    const [idUser, setIdUser] = useState(null);
    const [nome, setNome] = useState(null);
    const [display, setDisplay] = useState('none');
    const [msg, setMsg] = useState(null);
    const [textInput, setTextInput] = useState('');

    useEffect(()=>{
       async function getIdUser()
       {
           let response=await AsyncStorage.getItem('userData');
           let json=JSON.parse(response);
           setIdUser(json.id);
           //setNome(json.nome);
       }
       getIdUser();
    });

    function alerta() {
        Alert.alert("Alerta!", "Deseja mesmo alterar o nome?", [
            {
                text: "Não",
                onPress: () => null,
                style: "cancel"
            },
            { text: "Sim", onPress: () => {
                sendForm();
                setMsg('Nome alterado!!');
                setDisplay('flex');
                setTimeout(()=>{
                    setDisplay('none');
                },5000);
                setTextInput('')
                }
            }
        ]);
        return true;
    };

    async function sendForm()
    {
        let response=await fetch(`${config.urlRoot}update`,{
            method:'POST',
            body:JSON.stringify({
                id: idUser,
                nome: nome
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
            <MenuAreaRestrita title='Alterar nome' navigation={navigation} />

            
            <View style={[css.login__form, css.trocaSenha]} >
                <Text style={css.text__head}>Alterar nome</Text>
                <Text style={css.login__msg(display)}>{msg}</Text>
                <TextInput style={css.login__input} placeholder='Nome:' onChangeText={text=>setNome(text)} />
                <TouchableOpacity style={css.login__button} onPress={()=>alerta()}>
                    <Text style={css.login__buttonText}>Alterar</Text>
                </TouchableOpacity>
                </View>    
        </View>
    );
}
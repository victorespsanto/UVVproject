import React, {useState,useEffect} from 'react';
import {Text, View, Button, TextInput, TouchableOpacity} from 'react-native';
import {css} from '../../assets/css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuAreaRestrita from "../../assets/components/MenuAreaRestrita";
import config from "../../config/config";

export default function Reserva({navigation}) {

    
    const [id, setId] = useState(null);
    const [userId, setUserId] = useState(null);
    const [msg, setMsg] = useState(null);
    const [display, setDisplay] = useState('none');

    function sendForm()
    {
        let response= fetch(`${config.urlRoot}updateChave`,{
            method:'POST',
            body:JSON.stringify({                
                id: id,
                userId: 17                
            }),
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
        //let json=await response.json();
        setMsg('Chave ' + {id} + ' devolvida');
        setDisplay('flex');
        setTimeout(()=>{
            setDisplay('none');
        },5000);
        navigation.navigate('CadastroChaves')
    
    }
        


    return (
        <View style={[css.container, css.containerTop, css.darkbg]}>
            <MenuAreaRestrita title='Reservar chaves' navigation={navigation} />

            <View style={[css.login__form, css.area__novoUsusario]}>
                <Text style={css.login__msg(display)}>{msg}</Text>
                <TextInput style={css.login__input} placeholder='Identificador da chave'  onChangeText={text=>setId(text)}/>
                <TouchableOpacity style={css.login__button} onPress={()=>sendForm()}>
                    <Text style={css.login__buttonText}>Devolver</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
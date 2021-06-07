import React, {useState,useEffect} from 'react';
import {Text, View, Button, TextInput, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';
import {css} from '../../assets/css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuAreaRestrita from "../../assets/components/MenuAreaRestrita";
import config from "../../config/config.json";

export default function CadastroChaves({navigation}) {

    
    const [dados, setDados] = useState([]);
    const [carregando, setCarregando] = useState(true);
    

    useEffect(
        ()=>{
            fetch(`${config.urlRoot}read`)
                .then((resp)=>resp.json())
                .then((json)=>setDados(json))
                .catch(()=>('Erro ao carregar dados'))
                .finally(()=>setCarregando(false));
        }, []
        
        );

    return (
        <View style={[css.container, css.containerTop, css.darkbg]}>
            <MenuAreaRestrita title='Cadastro de chaves' navigation={navigation} />

            { carregando ? <ActivityIndicator/> : ( 
                <FlatList 
                    data = {dados}
                    keyExtractor = {(item) => item.id}
                    renderItem = {({item})=> (
                        <View style={item.userId === 17 ? css.vieW_cadastroChaves('green') : css.vieW_cadastroChaves('red') }>
                            <Text style={css.text__CadastroChaves}>ID CHAVE: {item.id}</Text>
                            <Text style={css.text__CadastroChaves}>AMBIENTE: {item.ambiente}</Text>
                            <Text style={css.text__CadastroChaves}>LOCAL: {item.local}</Text>
                            <Text style={item.userId === 17 ? [css.text__CadastroChaveReservada('none'), css.text__CadastroChaves] : [css.text__CadastroChaveReservada('flex'), css.text__CadastroChaves]}>ID DO USUÁRIO: {item.userId}</Text>
                        </View>          
                    )}                  
         
                />
            )
            }
        </View>
    );
}
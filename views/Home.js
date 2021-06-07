import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {css} from '../assets/css/Css';

export default function Home({navigation}) {

    return (
        
        <View style={css.container3}>
            
            <TouchableOpacity style={css.button__home} onPress={() => navigation.navigate('Login')}>
                <Image source={require('../assets/img/login.png')}/>
            </TouchableOpacity>

            <TouchableOpacity style={css.button__language} >
                <Text style={css.text_language}>PORTUGUÊS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={css.button__language}>
                <Text style={css.text_language}>ENGLISH</Text>
            </TouchableOpacity>

            <TouchableOpacity style={css.button__language} >
                <Text style={css.text_language}>ESPAÑOL</Text>
            </TouchableOpacity>

            
        </View>

        
    );
}
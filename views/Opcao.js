import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {css} from '../assets/css/Css';

export default function Home({navigation}) {

    return (
        <View style={css.container2}>
            <TouchableOpacity style={css.button__home} onPress={() => navigation.navigate('AreaRestrita')}>
                <Image source={require('../assets/img/user.png')}/>
            </TouchableOpacity>

            <TouchableOpacity style={css.button__homeOpcao} onPress={() => navigation.navigate('AreaChaves')}>
                <Image source={require('../assets/img/keys.png')}/>
            </TouchableOpacity>
        </View>

        
    );
}
import React from 'react';
import {Text, View, Button} from 'react-native';

export default function Chaves({navigation}) {

    return (
        <View>
            <Text>Esse é o componente Chaves</Text>
            <Button
                    title='Ir para Login'
                    onPress={() => navigation.navigate('Login')}
            />
        </View>
    );
}
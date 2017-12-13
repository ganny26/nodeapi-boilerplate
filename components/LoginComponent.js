import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Button, TouchableHighlight,Alert} from 'react-native';


class LoginComponent extends Component {


    render() {
        function onSignIn() {
            Alert.alert('Login success!')
        }
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button padding="50" color="#841584" onPress={onSignIn} title="Signin with google" />
                </View>
                <View >
                    <Button  color="#841584" onPress={onSignIn} title="Signin with facebook" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {

        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#fff',
        paddingHorizontal: 10
    },
    buttonContainer: {
        marginBottom: 20
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        borderRadius: 5
    },

    syleBtn: {
        alignItems: 'center'
    }
})

export default LoginComponent
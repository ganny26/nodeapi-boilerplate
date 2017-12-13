import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text,Button,TouchableHighlight  } from 'react-native';


class LoginEmailComponent extends Component {
   
      
    render() {
      
        return (
            <View  style={styles.container}>
           
           
           
                 <TextInput
                    placeholder="Username"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    underlineColorAndroid="transparent"
                    style={styles.input}
                    returnKeyType="next"
                    onSubmitEditing={()=>this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false} />
                <TextInput
                    placeholder="Password"
                    underlineColorAndroid="transparent"
                    placeholderTextColor="rgba(255,255,255,0.7)" 
                    style={styles.input} 
                    returnKeyType="go"
                    secureTextEntry
                    ref={(input)=>this.passwordInput=input}
                    />
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity> 
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
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        borderRadius: 5
    },
    signInContainer: {
        textAlign: 'center',
        color: '#ffffff'
       
    },
    syleBtn:{
        borderRadius:20
    }
})

export default LoginEmailComponent
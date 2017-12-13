import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import HeaderComponent from './components/HeaderComponent';
import LoginComponent from './components/LoginComponent';
import LoginEmailComponent from './components/LoginEmailComponent';

export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <StatusBar backgroundColor="#ffffff" animated={true} />
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('./images/splash.png')} />
          <Text style={styles.title}>WiFi Connect</Text>
          <Text style={styles.subtext}>Connect without internet from anywhere!</Text>
        </View>
        <View style={styles.formContainer}>
          {/* <LoginComponent/> */}
          <LoginEmailComponent />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 96,
    height: 96
  }, title: {
    color: '#fff',
    fontSize: 20,
    marginTop: 10,
    width: 180,
    textAlign: 'center',
    opacity: 0.9
  },
  subtext:{
    fontSize:18,
    textAlign: 'center',
    width: 250,
    marginTop: 20,

    color: '#fff',
  },
  formContainer: {
    marginTop: 20,
    marginBottom: 60
  }
});

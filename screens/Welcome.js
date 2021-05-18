import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';

import {Button, Input, LinearProgress, } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Welcome(props) {
  return (
    <View style={styles.Container}>
        <View>
            <View style={styles.Swipe}>
              <Text style={{ fontSize : 25}}>Bienvenue sur </Text>
              <Image 
                style={{ width: 165, height: 100}}
                source={require("../assets/Logo.png")}></Image>
              <Text style={{ fontSize : 15}}>Vous êtes nouveau ici ?</Text>
              <Text style={{ fontSize : 15, textAlign: 'center'}}>Rejoignez nous et commencez sans plus attendre !</Text>
              <Text> </Text>
              <LinearProgress 
              color = "#ED590C"
              />
              <Text> </Text>

            </View>
        </View>

      <StatusBar style="auto" />
      <View style={styles.Button}>
        <Button        
            title="Login"
            type="solid"
            buttonStyle={{backgroundColor: "#ED590C"}}
            onPress={() => props.navigation.navigate('Login')}
        />    
            <Button 
            title="Inscription"
            type="solid"
            buttonStyle={{backgroundColor: "#ED590C"}}
            onPress={() => props.navigation.navigate('Inscription')}
        />  
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ScrollView :{
  },

  Swipe :{
    flexDirection: 'column',
    alignItems: 'center',
  },
  Button: {
  flexDirection: 'row',
  }
});




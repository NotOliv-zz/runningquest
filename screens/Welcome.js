import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import {Button, LinearProgress} from 'react-native-elements'


export default function Welcome(props) {
  return (
    <View style={styles.Container}>

        <View>
            <View style={styles.Swipe}>
            
              <Text style={{ fontSize : 25}}>Bienvenue sur </Text>
              <Image 
                style={{ width: 165, height: 100}}
                source={require("../assets/Logo.png")}></Image>
              <Text style={{ fontSize : 15}}>Courez, explorez et collectionnez les trophées !</Text>
              <Text style={{ fontSize : 15, textAlign: 'center'}}>Entrez dans la course :</Text>
              <Text> </Text>
              <LinearProgress 
              color = "#ED590C"
              />
              <Text> </Text>

            </View>
        </View>
{/*---------------------- BOUTON LOGIN -----------------------*/}

      <StatusBar style="auto" />
      <View style={styles.Button}>
        <Button        
            title="Login"
            type="solid"
            buttonStyle={{backgroundColor: "#ED590C", marginRight:50, width:100}}
            onPress={() => props.navigation.navigate('Login')}
        />    

{/*---------------------- BOUTON INSCRIPTION-----------------------*/}
        
            <Button 
            title="Inscription"
            type="solid"
            buttonStyle={{backgroundColor: "#ED590C", width:100}}
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
  Swipe :{
    flexDirection: 'column',
    alignItems: 'center',
  },
  Button: {
  flexDirection: 'row',
  }
});




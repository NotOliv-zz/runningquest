import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import {Avatar,Card, ListItem, Button, Icon, Header} from 'react-native-elements'


export default function Navheader(props) {
  return (

    <View style={{
      textAlign: "center",
      alignSelf: "center"
    }}>

        <Header 
       
         leftComponent={
          <Avatar
              rounded
              size="medium"
              title="Avatar"
              source={require("../assets/bolt.jpg")}
              containerStyle={{marginTop: 5, marginLeft: 10}}
              onPress={() => props.attribut("Profil")}
            />
          }
    
          centerComponent={
            <Image
              title="Logo"
              style={{ width: 140, height: 60}}
              source={require("../assets/Logo.png")}
            />
          }
          
          rightComponent={
            <Avatar
            rounded
            size="small"
            title="Params"
            source={require("../assets/Parametre.png")}
            containerStyle={{marginTop: 10, marginLeft: 10}}
            onPress={() => props.attribut("Params")}
          />
        }

          containerStyle={{
            backgroundColor: '#FFFFFF',
     
            
          }}  
          />
</View>
  )
}


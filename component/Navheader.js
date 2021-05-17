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
              title="BP"
              onPress={() => console.log("Clic on profil picture")}
              activeOpacity={0}
              source={require("../assets/bolt.jpg")}
              containerStyle={{marginTop: 5, marginLeft: 10}}
            />
          }
    
          centerComponent={
            <Image
              style={{ width: 140, height: 60}}
              source={require("../assets/Logo.png")}
            />
          }
          
          rightComponent={
            <Image
              style={{ width: 30, height: 30, marginTop: 15, marginRight: 10}}
              source={require("../assets/Parametre.png")}
              onPress={() => console.log("Clic on params button")}
            />
          }

          containerStyle={{
            backgroundColor: '#FFFFFF',
            justifyContent: 'space-bewteen',
            alignItems:"center",
            justifyContent: 'center',
          }}  
          />
</View>
  )
}


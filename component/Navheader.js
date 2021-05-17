import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import {Avatar,Card, ListItem, Button, Icon, Header} from 'react-native-elements'

export default function Navheader(props) {
  return (

    <View >

        <Header 
         leftComponent={
            <Avatar
              rounded
              size="medium"
              title="BP"
              onPress={() => console.log("Clic on profil picture")}
              activeOpacity={0}
              source={require("../assets/bolt.jpg")}
            />
          }
    
          centerComponent={
            <Image
              style={{ width: 140, height: 70}}
              source={require("../assets/Logo.png")}
            />
          }
          
          rightComponent={
            <Image
              style={{ width: 30, height: 30,}}
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


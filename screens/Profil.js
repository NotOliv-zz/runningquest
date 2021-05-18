import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navheader from "../component/Navheader";
import {Avatar,Card, ListItem, Button, Icon, Header, Text} from 'react-native-elements'


const list = [
  {
    title: "Changer d'adresse email",
    icon: 'av-timer'
  },  
  {
    title: 'Modifier photo de profil',
    icon: 'flight-takeoff'
  },  
  {
    title: 'Modifier pseudo',
    icon: 'flight-takeoff'
  },
  {
    title: 'Mes Amis',
    icon: 'flight-takeoff'
  },
  {
    title: 'Paramètres App',
    icon: 'flight-takeoff'
  },
  {
    title: 'Unités de mesure',
    icon: 'flight-takeoff'
  },
  {
    title: "Integration partenaires",
    icon: 'flight-takeoff'
  },
  {
    title: "Notifications",
    icon: 'flight-takeoff'
  }
]


export default function Profil(props) {
  return (

    
    <View style={styles.container}>
      <View style={styles.profilheader} >

        <Avatar
          rounded
          size="large"
          title="Avatar"
          activeOpacity={0}
          source={require("../assets/bolt.jpg")}
          containerStyle={{marginTop:100, marginBottom:20}}
          onPress={() => props.attribut("Profil")}
        />
        
      <Text style={styles.text} >Olivier Bouvet</Text>

      </View>
      {
    list.map((item, i) => (
      <ListItem key={i} bottomDivider>
        <Icon name={item.icon} />
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    ))
  }
  <View style={{alignItems: 'center'}}>
    <Button 
      buttonStyle={{
        marginTop:20,
        backgroundColor: "#ED420C",
        width:100
     }}
      title="Retour"
      onPress={() => props.navigation.navigate('BottomNavigator', {screen: 'Home'})}
    />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profilheader: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    
  }
});

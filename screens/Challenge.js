import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

import {Button, Card} from 'react-native-elements'
import Navheader from "../component/Navheader"

const dataChallenge = [
  {
    name: "Et de 15 !",
    picto: require("../assets/Badge/15km.jpg"),
  },
  {
    name: "30 de plus !",
    picto: require("../assets/Badge/30km.jpg"),
  },
  {
    name: " être connecté",
    picto: require("../assets/Badge/Connect.jpg"),
  },
  {
    name: " Contre la montre",
    picto: require("../assets/Badge/Time.jpg"),
  },
]

const dataTrophee = [
  {
    name: "Et de 15 !",
    picto: require("../assets/Badge/15km.jpg"),
  },
  {
    name: "30 de plus !",
    picto: require("../assets/Badge/30km.jpg"),
  },
  {
    name: " être connecté",
    picto: require("../assets/Badge/Connect.jpg"),
  },
  {
    name: " Contre la montre",
    picto: require("../assets/Badge/Time.jpg"),
  },
]

export default function Ranking(props) {
  return (
    
<View>
         
  <Navheader/>

  <View>

  <Card containerStyle={styles.card}>
    <Card.Title>Mes challenges</Card.Title>
    <Card.Divider style={{backgroundColor:"#ED590C"}}/>
    <ScrollView horizontal={true}>
    <View  style={{ flexDirection: "row"}}>
      {
        dataChallenge.map((u, i) => {
          return (

            <View key={i}>

              <View style={{ alignItems: "center", marginRight: 10, marginBottom: 20}}>

                <Image style={styles.image} source={u.picto}/>
                <Text>{u.name}</Text>
              
              </View>
              
            </View>
          );
        })
      }
    </View>
    </ScrollView>
  </Card>

  <Button buttonStyle={styles.button} title='Créer un challenge !' />

  <Card containerStyle={styles.card}>
    <Card.Title>Mes trophées</Card.Title>
    <Card.Divider style={{backgroundColor:"#ED590C"}}/>
    <ScrollView horizontal={true}>
    <View  style={{ flexDirection: "row"}}>
      {
        dataTrophee.map((u, i) => {
          return (

            <View key={i}>

              <View style={{ alignItems: "center", marginRight: 10, marginBottom: 20}}>

                <Image style={styles.image} source={u.picto}/>
                <Text>{u.name}</Text>
              
              </View>
              
            </View>
          );
        })
      }
    </View>
    </ScrollView>
  </Card>

  </View>
</View>

  )}


const styles = StyleSheet.create({
  button: {
    borderRadius: 10, 
    marginTop: "auto", 
    marginBottom: "auto", 
    marginLeft:"auto" , 
    marginRight:"auto" , 
    backgroundColor: "#ED590C", 
    width:300 
  },
  card: {
    display: "flex",
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 30
},
  image: {
    width: 100, 
    height: 100, 
    marginBottom: 5
  }

})
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import {Avatar,Card, ListItem, Button, Icon, Header, Badge} from 'react-native-elements'
import Navheader from "../component/Navheader"

const activites = [
  {
    name: 'Running du soir',
    carte: require("../assets/RunMap/Run1.png"),
    distance: '12 km',
    date: "22 mai 2021",
    newexploration: "+25%"
  },
  {
    name: 'Run du matin',
    carte: require("../assets/RunMap/Run2.png"),
    distance: '6 km',
    date: "13 mai 2021",
    newexploration: "+1,2%"
  },
  {
    name: 'Run test',
    carte: require("../assets/RunMap/Run3.png"),
    distance: '6 km',
    date: "13 mai 2021",
    newexploration: "+1,2%"
  }
 ]


export default function Activity(props) {
  return (
  
    <View style={styles.container}>
         
        <Navheader
          attribut = {props.navigation.navigate}
        />

        <Text>My Last Activities</Text>

      <ScrollView>

        
            
          {
          activites.map((u, i) => {
          
            return (
              <Card key={i} >
              <View style={styles.cards}>
               <Card.Divider/>
               
                    <View >
                      <Text h1>{u.name}</Text>
                      <Text>Distance : {u.distance}</Text>
                      <Text>Date : {u.date}</Text>
                      <Text>New routes discovered :</Text>
                      <Badge 
                        status="warning"
                         value={
                            <Text 
                            >5.5 km
                            </Text>} 
                      />
                         <Badge 
                        status="warning"
                         value={
                            <Text 
                            >{u.newexploration}
                            </Text>} 
                      />
                      
                  </View>
                  <View>
                      <Image
                        style={{ width: 150, height: 150, margin:10}}
                        source={u.carte}
                      />
                    </View>

              </View>
              </Card>
                );
              })
            }
         

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cards: {
    width: 300,
    flexDirection:"row",
    justifyContent: 'center',
    alignItems: "center"
  }
});


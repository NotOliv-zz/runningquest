import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
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

    <ScrollView>
      
    <Text style={styles.titre}>Mes challenges</Text>

        
      {
      dataChallenge.map((u, i) => {
      
        return (
          <View style={{flexDirection:"row",}}>
              <View style={{alignItems:"center"}}>
                  <Text>{u.name}</Text>
                  <Image 
                    style={{ width: 100, height: 100, margin:10}}
                    source={u.picto}/>
              </View>
          </View>
            );
          })
        }
    
    <Text style={styles.titre}>Mes trophées</Text>
      {
      dataTrophee.map((u, i) => {
      
        return (
          <View style={{flexDirection:"row"}}>
              <View style={{alignItems:"center"}}>
                  <Text>{u.name}</Text>
                  <Image 
                    style={{ width: 100, height: 100, margin:10}}
                    source={u.picto}/>
              </View>
          </View>
            );
          })
        }
    
  </ScrollView>

</View>
);
}

const styles = StyleSheet.create({
  titre: {
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 20,
    fontWeight: "bold",
  },
});

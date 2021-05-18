import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffectn, useState } from 'react';
import { StyleSheet, Text, View, Image, Picker, ScrollView, SafeAreaView,TextInput, Dimensions} from 'react-native';
import {Card,CardItem} from 'react-native-elements'
import Navheader from "../component/Navheader";
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView from 'react-native-maps';


export default function Home(props) {

 


  var runner = ["Adeline","Florent","Olivier","Jean-Luc"]

  var ranking = runner.map((runner,i)=>{
    return (<Text key={i}>{i+1} - {runner}</Text>)
  }

  )

  return (
        
    <View style={styles.container}>

        <Navheader
          attribut = {props.navigation.navigate}
        />

      <View style={{flexDirection: 'row', height:50, padding:5, alignItems : 'center'}}>
         <Icon name="search" color="orange" />
         <TextInput 
         style={{width:'80%', borderRadius: 10,height:30,fontSize :15,marginLeft:15,
         borderColor: '#f0f0f0',
         borderWidth: 1}}
         placeholder="Ville"/>
      </View>

      <ScrollView>
        <View style={styles.container}>
          <Card containerStyle={{backgroundColor: "#ED590C"}}>
              {/* <Image style={styles.img}
                  source={require('../assets/Map-Levallois.jpg')}
              /> */}
              <MapView 
              style={styles.map} 
              provider="google"
              initialRegion={{
                latitude: 48.9,
                longitude: 2.2833,
                latitudeDelta: 0.0322,
                longitudeDelta: 0.0221,
              }}
              />      

              <View style={{flexDirection:'row',justifyContent: 'center', height:50,alignItems: 'center'}}>
                <View style={styles.box}>
                      <Text>Distance</Text>
                      <Text>15 km</Text>
                </View>
          
                <View style={styles.box}>
                      <Text>Exploration</Text>
                      <Text>15%</Text>
                
                </View>
                
                <View style={styles.box}>
                      <Text>Nb de pas</Text>
                      <Text>15888</Text>
                
                </View>

                <View style={styles.box}>
                      <Text>Rang</Text>
                      <Text>6eme</Text>
                
                </View>
            
              </View>

              </Card>

              <View style={{alignItems: 'center',borderRadius: 10, borderColor:'#D3D3D3', borderWidth:1, width:'90%',marginTop:10,padding:5}}>
              <Text  style={{marginTop:10}}>Mon Challenge</Text>
                <View style={{flexDirection:'row',justifyContent: 'center', height:50,alignItems: 'center', marginTop:5}}>
                 
                <Image style={{ width: 50, height: 50, margin:10}}
                  
                  source={require('../assets/Badge/30km.jpg')}
                />

               </View>

               <Text  style={{marginTop:10}}>Derniers trophées</Text>

                <View style={{flexDirection:'row',justifyContent: 'center', height:50,alignItems: 'center', marginTop:10}}>
                 
                <Image style={{ width: 50, height: 50, margin:10}}
                  source={require('../assets/Badge/30km.jpg')}
                />

                <Image style={{ width: 50, height: 50, margin:10}}
                  
                  source={require('../assets/Badge/30km.jpg')}
                />
           

               <Image style={{ width: 50, height: 50, margin:10}}
                  source={require('../assets/Badge/30km.jpg')}
                />

               </View>
               </View>




       
        </View>
      
      </ScrollView>
    </View>
   
    
  );
}

          


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
   
  },
  view :{
    textAlign:'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#f0f0f0',
    borderWidth: 1,
    padding : 10,
    width : '70%',
    marginBottom : 5,
    backgroundColor: '#fff',


  },
  
      img: {
        borderColor: '#f0f0f0',
        borderWidth: 1,
        width: '100%', 
        height: 200,
        marginBottom: 10,
       
     
  },
  box:{
    borderWidth: 1,
    borderRadius: 10,
    borderColor : '#fff',
    height:50,
    margin :5,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding : 4
  }, 
  map: {
    width: "100%",
    height:200,
    marginBottom:20
  }
});

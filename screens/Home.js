import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView,TextInput} from 'react-native';
import {Card,CardItem} from 'react-native-elements'
import Navheader from "../component/Navheader";
import Icon from 'react-native-vector-icons/FontAwesome';




export default function Home(props) {




  return (
        
    <View style={styles.container}>

        <Navheader
          attribut = {props.navigation.navigate}
        />

      <Text>Home</Text>
     
      <View style={{flexDirection: 'row', height:40, padding:5, alignItems : 'center'}}>
      <Icon name="search" color="orange" />
         <TextInput 
         style={{marginLeft:15, width:'80%', borderRadius: 10,height:30,fontSize :15,marginLeft:15,
         borderColor: '#f0f0f0',
         borderWidth: 1}}
         placeholder="Search"/>
      </View>

      <ScrollView>
        <View style={styles.container}>
          <Card containerStyle={{backgroundColor: "#ED590C"}}>
              <Image style={styles.img}
                  source={require('../assets/Map-Levallois.jpg')}
              />

              <View style={{flexDirection:'row',justifyContent: 'center', height:50,alignItems: 'center'}}>
                <View style={styles.box}>
                      <Text>nb km</Text>
                      <Text>15</Text>
                </View>
          
                <View style={styles.box}>
                      <Text>Superficie</Text>
                      <Text>15%</Text>
                
                </View>
                
                <View style={styles.box}>
                      <Text>Nb de pas</Text>
                      <Text>15888</Text>
                
                </View>

                <View style={styles.box}>
                      <Text>Classement</Text>
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
        marginBottom: 2,
       
     
  },
  box:{
    borderWidth: 1,
    borderRadius: 10,
  
    borderColor : '#fff',
    height:40,
    margin :5,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding : 1


  },
 
    
  
  
});



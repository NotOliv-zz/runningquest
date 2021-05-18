import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffectn, useState } from 'react';
import { StyleSheet, Text, View, Image, Picker, ScrollView, SafeAreaView } from 'react-native';
import Navheader from "../component/Navheader";


export default function Home(props) {

  const [selectedValue, setSelectedValue]=useState("Paris");
console.log(selectedValue)
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

      <Text>Home</Text>
      
      <ScrollView>
        <View style={styles.container}>
          <Image style={styles.img}
            
              source={require('../assets/Map-Levallois.jpg')}
          />
        
          <View>
            <Text style={{ margin: 10, justifyContent: 'center'}}>10% d'exploration</Text>
          </View>
        
          <View style={styles.view}>
            <Text style={{fontWeight: "bold"}}> Localisation </Text>
            <Picker
              selectedValue = {selectedValue}
              onValueChange ={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              style={{ height: 40, width: 150 }}
              >
                <Picker.Item label="Reims" value="Reims"/>
                <Picker.Item label="Paris" value="Paris"/>
            </Picker>
          </View>

          <View style={styles.view}>
            <Text style={{fontWeight: "bold"}} >Classement de ta ville Top 3</Text>
              {ranking}
            <Text>3555 - Jean-Luc</Text>
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
    marginBottom : 10,
    backgroundColor: '#fff',


  },
  
      img: {
        borderColor: '#f0f0f0',
        borderWidth: 1,
        width: 300, 
        height: 250,
        marginBottom: 10,
        marginTop: 10 
     
  },
});

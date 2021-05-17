import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffectn, useState } from 'react';
import { StyleSheet, Text, View, Image, Picker } from 'react-native';


export default function Home() {

  const [selectedValue, setSelectedValue]=useState("Paris");
console.log(selectedValue)
  var runner = ["Adeline","Florent","Olivier","Jean-Luc"]

  var ranking = runner.map((runner,i)=>{
    return (<Text>{i+1} - {runner}</Text>)
  }

  )




  return (
    <View style={{flex :1, alignItems: 'center'}}>
     

      <Image style={{ width: '80%', height: '50%', marginBottom: 10, marginTop: 30 }}
        
          source={require('../assets/Map-Levallois.jpg')}
      />
      
      <View>
        <Text style={{ margin: 10 }}>10% d'exploration</Text>

        
      </View>
      
    <View style={styles.view}>
      <Text> Localisation </Text>
      <Picker
        selectedValue = {selectedValue}
        onValueChange ={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        style={{ height: 50, width: 150 }}
        >
          <Picker.Item label="Reims" value="Reims"/>
          <Picker.Item label="Paris" value="Paris"/>
      </Picker>
    </View>



    
      <View style={styles.view}>
        <Text >Classement de ta ville Top 3</Text>
      {ranking}
      <Text>3555 - Jean-Luc</Text>
      </View>

      <StatusBar style="auto" />


    </View>
  );
}

          


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view :{
    textAlign:'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 1,
    padding : 10,
    width : '60%',
    marginBottom : 10


  },
});

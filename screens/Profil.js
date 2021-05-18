import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navheader from "../component/Navheader";

export default function Profil(props) {
  return (

    
    <View style={styles.container}>

        <Navheader
          attribut = {props.navigation.navigate}
        />

 
      <Text>Profil test</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
});

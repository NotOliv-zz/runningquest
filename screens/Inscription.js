import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Button, Input} from 'react-native-elements'

export default function Inscription(props) {
  return (
    <View style={styles.container}>
    <Text>Inscription</Text>
    <StatusBar style="auto" />
    <Button 
         title="Je suis inscrit"
         type="solid"
         buttonStyle={{backgroundColor: "#009788"}}
         onPress={() => props.navigation.navigate('BottomNavigator', {screen: 'Home'})}
     />    
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
});

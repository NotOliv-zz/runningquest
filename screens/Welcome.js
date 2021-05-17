import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Button, Input} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Welcome(props) {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <StatusBar style="auto" />
      <Button 
           title="Login"
           type="solid"
           buttonStyle={{backgroundColor: "#009788"}}
           onPress={() => props.navigation.navigate('Login')}
       />    
          <Button 
           title="Inscription"
           type="solid"
           buttonStyle={{backgroundColor: "#009788"}}
           onPress={() => props.navigation.navigate('Inscription')}
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

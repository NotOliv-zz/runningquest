import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Button, Input, Icon} from 'react-native-elements'

export default function Inscription(props) {
  return (

    <View style={styles.container}>

    <View style={styles.Input}>

    <Input
      placeholder='Pseudo'
      leftIcon={
        <Icon name='user' type='font-awesome' size={24} color='black' />
      }
      />

    <Input
      placeholder='Email'
      leftIcon={
        <Icon
        name='at'
        type='font-awesome'
        size={24}
        color='black'
        />
      }
    />

    <Input
        placeholder='Password'
        secureTextEntry={true} 
        leftIcon={
          <Icon
          name="unlock-alt"
          type='font-awesome'
          size={24}
          color='black'
          />
        }       
    />
      </View>
      <Button 
         title="Inscription"
         type="solid"
         buttonStyle={{backgroundColor: "#ED590C"}}
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
  Input: {
    width:300
  }
});

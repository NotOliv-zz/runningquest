import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

import {Button, Input, LinearProgress} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Welcome(props) {
  return (
    <View style={styles.container}>
      <View style={progress.container}>
        <Text>Bienvenue sur </Text>
        <Image 
          style={{ width: 165, height: 100}}
          source={require("../assets/Logo.png")}></Image>
        <Text>Vous êtes nouveau ici ?</Text>
        <Text>Rejoignez nous et commencez plus attendre !</Text>
        <LinearProgress style={{trackColor: "#ED590C"}}/>
      </View>
      <StatusBar style="auto" />
      <View style={button.container}>
        <Button
        
            title="Login"
            type="solid"
            buttonStyle={{backgroundColor: "#ED590C"}}
            onPress={() => props.navigation.navigate('Login')}
        />    
            <Button 
            title="Inscription"
            type="solid"
            buttonStyle={{backgroundColor: "#ED590C"}}
            onPress={() => props.navigation.navigate('Inscription')}
        />  
      </View>

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

const progress = StyleSheet.create({
  container:{
  }

})

const button = StyleSheet.create({
  container: {
    flexDirection: 'row',
  }
})



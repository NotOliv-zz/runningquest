import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

import {Button, Input, LinearProgress} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Welcome(props) {
  return (
    <View style={styles.container}>
      <View style={progress.container}>
        <Image source={require('./assets')}></Image>
        <Text>Welcome test</Text>
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
  borderWidth: 20
  }

})

const button = StyleSheet.create({
  container: {
    flexDirection: 'row',
  }
})



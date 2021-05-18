import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import {Button, Input, LinearProgress, ListItem} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import {FlatListSlider} from 'react-native-flatlist-slider';


/*const images = [
  {
   Text: 'Bienvenue sur',
   banner: require ('../assets/Logo.png'),
  },
 {
   banner: require ('../assets/Map-Levallois.jpg'),
   desc:
     'Red fort in India New Delhi is a magnificient masterpeiece of humans',
 },
 ]
 <FlatListSlider 
 data={images} 
 imageKey={'banner'}
 height={50}
 timer={0}
 onPress={item => alert(JSON.stringify(item))}
 contentContainerStyle={{paddingHorizontal: 16}}
 indicatorContainerStyle={{position:'absolute', bottom: 20}}
 indicatorActiveColor={'#ED590C'}
 indicatorInActiveColor={'#ffffff'}
 indicatorActiveWidth={15}
 animation
 />

 */

export default function Welcome(props) {
  return (
    <View style={styles.container}>
      <View>
        <ListItem >
          <View style={swipe.container}>
            <Text style={{ fontSize : 25}}>Bienvenue sur </Text>
            <Image 
              style={{ width: 165, height: 100}}
              source={require("../assets/Logo.png")}></Image>
            <Text style={{ fontSize : 15}}>Vous êtes nouveau ici ?</Text>
            <Text style={{ fontSize : 15, textAlign: 'center'}}>Rejoignez nous et commencez sans plus attendre !</Text>
            <LinearProgress style={color = "#ED590C"}
            />
          </View>
        </ListItem>
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

const swipe = StyleSheet.create({
  container:{
    flexDirection: 'column',
    borderWidth: 20,
    borderColor: '#C4C4C4',
    alignItems: 'center',
    backgroundColor: '#C4C4C4'

  }

})

const button = StyleSheet.create({
  container: {
    flexDirection: 'row',
  }
})



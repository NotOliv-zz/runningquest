import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Avatar,Button, Input, LinearProgress} from 'react-native-elements'

export default function Api(props) {
  return (
    <View style={styles.container}>
      <Text>Synchronise ton application de running préférée pour importer tes activités</Text>

<View style={{ flexDirection:"row", margin:50}}>
    <Avatar 
      rounded
      size="medium"
      title="Garmin"
      activeOpacity={0.7}
      source={require("../assets/sportsapp/garmin.png")}
      onPress={() => console.log("Click in Garmin!")}
    />
    <Avatar
      rounded
      size="medium"
      title="Strava"
      onPress={() => console.log("Works!")}
      activeOpacity={0.7}
      source={require("../assets/sportsapp/strava.jpg")}
      onPress={() => console.log("Click in Strava!")}
    />
    </View >
    <View style={{ flexDirection:"row"}}>
    <Avatar
      rounded
      size="medium"
      title="Runtastic"
      activeOpacity={0.7}
      source={require("../assets/sportsapp/runtastic.png")}
      onPress={() => console.log("Click in Runtastic!")}
    />
    <Avatar
      rounded
      size="medium"
      title="Nike"
      onPress={() => console.log("Works!")}
      activeOpacity={0.7}
      source={require("../assets/sportsapp/nike2.jpg")}
      onPress={() => console.log("Click in Nike!")}
    />
    </View>
            <Button 
            title="Synchronisation"
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
});

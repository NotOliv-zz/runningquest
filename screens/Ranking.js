import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default function Ranking() {
  return (

    

    <SafeAreaView>
    <ScrollView>

      <Card style={styles.container}>
        <Card.Title>Mes challenges</Card.Title>
        <Card.Divider style={{ backgroundColor: '#ed420c' }}/>
        <View
          style={{
            flexDirection: "row",
            justifyContent: 'space-around',
            marginBottom: 30,
          }}>
          <Image 
            style={{ width: 100, height: 100}}
            source={require('../assets/Badge/15km.jpg')}></Image>
          <Image 
            style={{ width: 100, height: 100}}
            source={require('../assets/Badge/15km.jpg')}></Image>
          <Image 
            style={{ width: 100, height: 100}}
            source={require('../assets/Badge/15km.jpg')}></Image>
        </View>   

        <View
          style={{
            flexDirection: "row",
            justifyContent: 'space-around',
            marginBottom: 30,
          }}>  
          <Image 
            style={{ width: 100, height: 100}}
            source={require('../assets/Badge/15km.jpg')}></Image>
          <Image 
            style={{ width: 100, height: 100}}
            source={require('../assets/Badge/15km.jpg')}></Image>
          <Image 
            style={{ width: 100, height: 100}}
            source={require('../assets/Badge/15km.jpg')}></Image>
        </View> 

        <Button 
        buttonStyle={{borderRadius: 5, backgroundColor:"#ed420c"}}
        title="Créer un challenge"
         />
      
      </Card>


      <Card style={styles.container}>
        <Card.Title>Mes trophées</Card.Title>
        <Card.Divider style={{ backgroundColor: '#ed420c' }}/>
        <View
          style={{
            flexDirection: "row",
            justifyContent: 'space-around',
            marginBottom: 30,
          }}>
          <Image 
            style={{ width: 100, height: 100}}
            source={require('../assets/Badge/15km.jpg')}></Image>
          <Image 
            style={{ width: 100, height: 100}}
            source={require('../assets/Badge/15km.jpg')}></Image>
          <Image 
            style={{ width: 100, height: 100}}
            source={require('../assets/Badge/15km.jpg')}></Image>
        </View>   

        <View
          style={{
            flexDirection: "row",
            justifyContent: 'space-around',
            marginBottom: 30,
          }}>  
          <Image 
            style={{ width: 100, height: 100}}
            source={require('../assets/Badge/15km.jpg')}></Image>
          <Image 
            style={{ width: 100, height: 100}}
            source={require('../assets/Badge/15km.jpg')}></Image>
          <Image 
            style={{ width: 100, height: 100}}
            source={require('../assets/Badge/15km.jpg')}></Image>
        </View> 
      
      </Card>

    
    </ScrollView>   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 130,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

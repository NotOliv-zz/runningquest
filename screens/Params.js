import React from 'react';
import { StyleSheet, View } from 'react-native';
import {ListItem, Button, Icon} from 'react-native-elements'


const list = [
  {
    title: "Unités de mesures",
    icon: 'av-timer'
  },  
  {
    title: "Integrations des app partenaires",
    icon: 'flight-takeoff'
  },  
  {
    title: 'Notifications',
    icon: 'flight-takeoff'
  }
]


export default function Params(props) {
  return (

    
    <View style={styles.container}>

      {
    list.map((item, i) => (
      <ListItem key={i} bottomDivider>
        <Icon name={item.icon} />
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    ))
  }
  <View style={{alignItems: 'center',}}>
    <Button 
      buttonStyle={{
        marginTop:20,
        backgroundColor: "#ED420C",
        width:100
     }}
      title="Retour"
      onPress={() => props.navigation.navigate('BottomNavigator', {screen: 'Home'})}
    />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:150
  },
  profilheader: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    
  }
});

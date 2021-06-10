import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Avatar, ListItem, Button, Icon, Text} from 'react-native-elements'
import {connect} from 'react-redux';

const list = [
  {
    title: "Changer d'adresse email",
    icon: 'av-timer'
  },  
  {
    title: 'Modifier photo de profil',
    icon: 'flight-takeoff'
  },  
  {
    title: 'Modifier pseudo',
    icon: 'flight-takeoff'
  }
]


function Profil(props) {
  return (

    
    <View style={styles.container}>
      <View style={styles.profilheader} >

        <Avatar
          rounded
          size="large"
          title="Avatar"
          activeOpacity={0}
          source={{ uri:props.photo }}
          containerStyle={{marginTop:100, marginBottom:20}}
        />
        
      <Text style={styles.text} >{props.pseudo}</Text>

      </View>
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
  <View style={{alignItems: 'center'}}>
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
  },
  profilheader: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    
  }
});

function mapStateToProps(state) {

  return {
    photo : state.MyProfil.profilpicfromstrava,
    pseudo : state.MyProfil.pseudo
  }
 }

export default connect(
  mapStateToProps,
  null
 )(Profil);
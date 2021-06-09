import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, Image} from 'react-native';

import {Avatar, Header} from 'react-native-elements'
import {connect} from 'react-redux';

function Navheader(props) {

  return (

    <View style={{
      textAlign: "center",
      alignSelf: "center",
      elevation: 1, //  shadow on Android
      shadowOpacity: 1, //  shadow on iOS

    }}>

        <Header 
       
         leftComponent={
          <Avatar
              rounded
              size="medium"
              title="Avatar"
              source={{ uri:props.photo === "" ? "https://image.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg":props.photo}}
              containerStyle={{marginTop: 5, marginLeft: 10}}
              onPress={() => props.attribut("Profil")}
            />
          }
        
    
          centerComponent={
            <Image
              title="Logo"
              style={{ width: 140, height: 60}}
              source={require("../assets/Logo.png")}
            />
          }
          
          rightComponent={
            <Avatar
            rounded
            size="small"
            title="Params"
            source={require("../assets/Parametre.png")}
            containerStyle={{marginTop: 10, marginLeft: 10}}
            onPress={() => props.attribut("Params")}
          />
        }

          containerStyle={{
            backgroundColor: '#FFFFFF',
          
     
            
          }}  
          />
</View>
  )
}

function mapStateToProps(state) {
  return {photo : state.MyProfil.profilpicfromstrava}
 }

export default connect(
  mapStateToProps,
  null
 )(Navheader);
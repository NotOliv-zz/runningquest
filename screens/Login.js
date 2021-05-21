import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Button, Input, Icon} from 'react-native-elements'

import {connect} from 'react-redux';



function LoginPage(props) {

  const [signInEmail, setSignInEmail] = useState('')
  const [signInPassword, setSignInPassword] = useState('')
  const [setUserExists, userExists] = useState('')

  //____________________________________ FONCTION SIGN IN ________________________________________//
  
  var handleSubmitSignIn = async () => {

<<<<<<< HEAD
    const data = await fetch('http://192.168.1.18:3000/sign-in', {
=======
    const data = await fetch('http://192.168.1.23:3000/sign-in', {
>>>>>>> e40b2cc3e13d94f83cf39d95e24df3b7f35dfad9
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `emailFromFront=${signInEmail}&passwordFromFront=${signInPassword}`
    })

    const body = await data.json()


    if(body.result == true){
      props.addToken(body.token)
      props.addActivities(body.user.activities)
      props.addProfil(body.user.profilpicfromstrava)
      props.navigation.navigate('BottomNavigator', {screen: 'Home'})
    }  
    
     console.log(body)

  }



  //____________________________________ DEBUT RETURN ________________________________________//
  return (

    <View style={styles.container}>

      <View style={styles.Input}>
        <Input onChangeText={(value) => setSignInEmail(value)} value={signInEmail} placeholder='Email' leftIcon={<Icon name='at' type='font-awesome' size={24} color='black'/>}/>
        <Input onChangeText={(value) => setSignInPassword(value)} value={signInPassword} placeholder='Password' secureTextEntry={true} leftIcon={<Icon name='unlock-alt' type='font-awesome' size={24} color='black'/>}/>
      </View>
        <Button title="Connexion" type="solid" buttonStyle={{backgroundColor: "#ED590C"}} onPress={() =>handleSubmitSignIn() } />    
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



function mapDispatchToProps(dispatch){
  return {
    addToken: function(token){
      dispatch({type: 'addToken', token})
    },
    addActivities: function(activites){
      dispatch({type: 'addActivities', activites})
    },
    addProfil: function(profil){
      dispatch({type: 'addProfil', profil})
    }
  }
  }

export default connect(
  null,
  mapDispatchToProps
  )(LoginPage)
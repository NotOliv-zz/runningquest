import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Button, Input, Icon} from 'react-native-elements'

export default function LoginPage(props) {

  const [signInEmail, setSignInEmail] = useState('')
  const [signInPassworsd, setSignInPassword] = useState('')
  const [setUserExists, userExists] = useState('')

  //____________________________________ FONCTION SIGN IN ________________________________________//
  
  // var handleSubmitSignin = async () => {

  //   const data = await fetch('/sign-in', {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  //     body: `emailFromFront=${signInEmail}&passwordFromFront=${signInPassword}`
  //   })

  //   const body = await data.json()

  //   if(body.result == true){
  //     setUserExists(true)
  //     props.addToken(body.token)
  //   }  else {
  //     setErrorsSignin(body.error)
  //   }
  // }

  // if(userExists){
  //   return <Redirect to='/screenMyArticles' />
  // }

  // var tabErrorsSignin = listErrorsSignin.map((error,i) => {
  //   return(<p>{error}</p>)
  // })

  // var tabErrorsSignup = listErrorsSignup.map((error,i) => {
  //   return(<p>{error}</p>)
  // })


  //____________________________________ DEBUT RETURN ________________________________________//
  return (

    <View style={styles.container}>

      <View style={styles.Input}>
        <Input onChangeText={(value) => setSignInEmail(value)} value={signInEmail} placeholder='Email' leftIcon={<Icon name='at' type='font-awesome' size={24} color='black'/>}/>
        <Input onChangeText={(value) => setSignInPassword(value)} value={signInPassworsd} placeholder='Password' secureTextEntry={true} leftIcon={<Icon name='unlock-alt' type='font-awesome' size={24} color='black'/>}/>
      </View>
        <Button title="Connexion" type="solid" buttonStyle={{backgroundColor: "#ED590C"}} onPress={() => props.navigation.navigate('API')} />    
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

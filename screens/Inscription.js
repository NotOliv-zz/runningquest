import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, Input, Icon} from 'react-native-elements'




export default function Inscription(props) {

  const [signUpPseudo, setSignUpPseudo] = useState('')
  const [signUpEmail, setSignUpEmail] = useState('')
  const [signUpPassworsd, setSignUpPassword] = useState('')

  const [userExists, setUserExists] = useState(false)


//____________________________________ FONCTION SIGN UP ________________________________________//

// var handleSubmitSignup = async () => {
      
//   const data = await fetch('/sign-up', {
//     method: 'POST',
//     headers: {'Content-Type': 'application/x-www-form-urlencoded'},
//     body: `pseudoFromFront=${signUpPseudo}&emailFromFront=${signUpEmail}&passwordFromFront=${signUpPassword}`
//   })

//   const body = await data.json()

//   if(body.result == true){
//     setUserExists(true)
//     props.addToken(body.saveUser.token)
//   } else {
//     setErrorsSignup(body.error)
//   }
// }


//____________________________________ DEBUT RETURN ________________________________________//
  return (

    <View style={styles.container}>


      <View style={styles.Input}>
        <Input onChangeText={(value) => setSignUpPseudo(value)} value={signUpPseudo} placeholder='Pseudo' leftIcon={<Icon name='user' type='font-awesome' size={24} color='black' />}/>
        <Input onChangeText={(value) => setSignUpEmail(value)} value={signUpEmail} placeholder='Email' leftIcon={<Icon name='at' type='font-awesome' size={24} color='black'/>}/>
        <Input onChangeText={(value) => setSignUpPassword(value)} value={signUpPassworsd} placeholder='Password' secureTextEntry={true} leftIcon={<Icon name='unlock-alt' type='font-awesome' size={24} color='black'/>}/>
      </View>
        <Button title="Inscription" type="solid" buttonStyle={{backgroundColor: "#ED590C"}} onPress={() => props.navigation.navigate('API')} />    
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

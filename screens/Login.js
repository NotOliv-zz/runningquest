import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, Input, Icon} from 'react-native-elements'
import {connect} from 'react-redux';


function LoginPage(props) {

  const [signInEmail, setSignInEmail] = useState('')
  const [signInPassword, setSignInPassword] = useState('')
  const [listErrorsSignin, setErrorsSignin] = useState([])

  //____________________________________ FONCTION SIGN IN ________________________________________//
  
  var handleSubmitSignIn = async () => {

    const data = await fetch('https://intense-tundra-28448.herokuapp.com/sign-in', {

      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `emailFromFront=${signInEmail}&passwordFromFront=${signInPassword}`
    })

    const body = await data.json()

    if(body.result == true){
      props.navigation.navigate('BottomNavigator', {screen: 'Activity'})
      props.addToken(body.user.token)
      props.addActivities(body.user.activities)
      props.addProfil(body.user)
      props.addRanking(body.dataRanking)
      props.addChallenge(body.user.challenge)
      props.addTrophy(body.user.trophy)
      
    }  else {
      setErrorsSignin(body.error)
    }
    
  }


 //____________________________________ MESSAGE D'ERREUR ________________________________________//
  var tabErrorsSignin = listErrorsSignin.map((error,i) => {
    return(<Text key={i}>{error}</Text>)
  })


  //____________________________________ DEBUT RETURN ________________________________________//
  return (

    <View style={styles.container}>

      <View style={styles.Input}>
        <Input onChangeText={(value) => setSignInEmail(value)} value={signInEmail} placeholder='Email' leftIcon={<Icon name='at' type='font-awesome' size={24} color='black'/>}/>
        <Input onChangeText={(value) => setSignInPassword(value)} value={signInPassword} placeholder='Password' secureTextEntry={true} leftIcon={<Icon name='unlock-alt' type='font-awesome' size={24} color='black'/>}/>
        {tabErrorsSignin}
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


  //____________________________________ REDUCERS ________________________________________//
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
    },
    addRanking: function(ranking){
      dispatch({type: 'addRanking', ranking})
    },
    addChallenge: function(challenge){
      dispatch({type: 'addChallenge', challenge:challenge})
    },
    addTrophy: function(trophy){
      dispatch({type: 'addTrophy', trophy:trophy})
    }
  }
  }

export default connect(
  null,
  mapDispatchToProps
  )(LoginPage)
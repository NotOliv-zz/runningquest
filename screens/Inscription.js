import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, Input, Icon} from 'react-native-elements'
import {connect} from 'react-redux';



function Inscription(props) {

  const [signUpPseudo, setSignUpPseudo] = useState('')
  const [signUpEmail, setSignUpEmail] = useState('')
  const [signUpPassword, setSignUpPassword] = useState('')
  const [listErrorsSignup, setErrorsSignup] = useState([])
  


//____________________________________ FONCTION SIGN UP ________________________________________//

var handleSubmitSignUp = async () => {
      
  const data = await fetch('https://intense-tundra-28448.herokuapp.com/sign-up', {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: `pseudoFromFront=${signUpPseudo}&emailFromFront=${signUpEmail}&passwordFromFront=${signUpPassword}`
  })

  const body = await data.json()


    if(body.saveUser) {
    props.addToken(body.saveUser.token)
    props.navigation.navigate('API')
  } else {
    setErrorsSignup(body.error)
  }
}

var tabErrorsSignup = listErrorsSignup.map((error,i) => {
  return(<Text key={i}>{error}</Text>)
})

//____________________________________ DEBUT RETURN ________________________________________//
  return (

    <View style={styles.container}>


      <View style={styles.Input}>
        <Input onChangeText={(value) => setSignUpPseudo(value)} value={signUpPseudo} placeholder='Pseudo' leftIcon={<Icon name='user' type='font-awesome' size={24} color='black' />}/>
        <Input onChangeText={(value) => setSignUpEmail(value)} value={signUpEmail} placeholder='Email' leftIcon={<Icon name='at' type='font-awesome' size={24} color='black'/>}/>
        <Input onChangeText={(value) => setSignUpPassword(value)} value={signUpPassword} placeholder='Password' secureTextEntry={true} leftIcon={<Icon name='unlock-alt' type='font-awesome' size={24} color='black'/>}/>
        {tabErrorsSignup}
      </View>
        <Button title="Inscription" type="solid" buttonStyle={{backgroundColor: "#ED590C"}} onPress={() => handleSubmitSignUp()} />    
      </View>
);
}


//____________________________________ STYLES ________________________________________//

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
    }
  }
  }

export default connect(
  null,
  mapDispatchToProps
  )(Inscription)
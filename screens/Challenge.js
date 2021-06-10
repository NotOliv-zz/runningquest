import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Modal, TextInput, Pressable, Alert } from 'react-native';
import {Button, Card } from 'react-native-elements'
import Navheader from "../component/Navheader"
import RNPickerSelect from 'react-native-picker-select';
import {connect} from 'react-redux';

function Challenge(props) {

  const [modalVisible, setModalVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("Km");
  const [newChallengeName, setNewChallengeName] = useState("");
  const [newChallengeNumber,setNewChallengeNumber] = useState("");
  const [dateStart, setdateStart] = useState("");
  const [dateEnd, setdateEnd] = useState("");


  var handleSubmitChallenge = async (name, number) => {


    const data = await fetch('https://intense-tundra-28448.herokuapp.com/addchallenge', {

      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `nameFromFront=${newChallengeName}&kmFromFront=${newChallengeNumber}&dateStartFromFront=${dateStart}&dateEndFromFront=${dateEnd}&tokenFromFront=${props.token}`
    })
    const body= await data.json()
    
    props.addNewChallenge(name, "https://res.cloudinary.com/dcyuyphdt/image/upload/v1621947674/rq/Challenge_tgzwms.png" )
    setModalVisible(!modalVisible)
  }

  return (
    
<View style={styles.container}>
         
  <Navheader attribut = {props.navigation.navigate}/>

  <View>

{/*---------------------- LISTE DES CHALLENGES -----------------------*/}

  <Card containerStyle={styles.card}>
    <Card.Title>Mes challenges en cours</Card.Title>
    <Card.Divider style={styles.divider}/>
    <ScrollView horizontal={true}>
    <View style={{ flexDirection: "row"}}>
      {
      
        props.dataChallenge.map((u, i) => {
          return (

            <View key={i}>

              <View style={{ alignItems: "center", justifyContent:"center"}}>
                
                <Image style={styles.image} source={({uri : u.Trophee})} />
                <Text>{u.Nom}</Text>
        

              </View>
              
            </View>
          );
        })
      }
    </View>
    </ScrollView>
  </Card>

{/*---------------------- MODAL POUR CREER UN CHALLENGE -----------------------*/}

  <Modal 
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
      Alert.alert("Modal has been closed.");
      setModalVisible(!modalVisible);
    }}
    >
    <View style={styles.centeredView}>
    <View style={styles.modalView}>
      <Text>Nom du challenge</Text>
        <TextInput
            style={{
              height: 40,
              width: 200,
              borderWidth: 1,
              marginBottom: 10,
              marginTop: 10
            }}
            onChangeText={(newChallengeName) => setNewChallengeName(newChallengeName)}
            defaultValue=""
        />
         <Text>Nombre de killomètre</Text>
         <Text>ou pourcentage d'exploration</Text>
        <View style={{flexDirection:"row", alignSjuself:"center"}}>
          <TextInput
            style={{
              height: 40,
              width: 140,
              borderWidth: 1,
              marginBottom: 10,
              marginTop: 10
            }}
            onChangeText={(newChallengeNumber) => setNewChallengeNumber(newChallengeNumber)}
            defaultValue=""
          />
          <View style={styles.customPickerStyles}>
          <RNPickerSelect
          style={{fontWeight: "bold", color: "#fff"}}
            placeholder={{}}
            useNativeAndroidPickerStyle={false} 
            onValueChange={(value) => setCurrentMessage(value)}
            items={[
                { label: "Km", value: "Km" },
                { label: "%", value: "%" },
            ]}
            value={currentMessage}
          />
          </View>
        </View>

        <Text>Inviter des amis</Text>
        <TextInput
            style={{
              height: 40,
              width: 200,
              borderWidth: 1,
              marginBottom: 10,
              marginTop: 10
            }}
            defaultValue=""
        />


      {/* //-------------------DATE DEBUT--------------------- */}
      <Text>Date départ</Text>
      <View style={{flexDirection:"row", alignItems: "center", justifyContent:"center", marginTop:10}}>
      
        <TextInput
            style={{
              height: 40,
              width: 180,
              borderWidth: 1,
              marginBottom: 10,
              marginRight: 5,
              textAlign: 'center'
            }}
            onChangeText={(dateStart) => setdateStart(dateStart)}
            defaultValue=""
                
        />

      </View> 

  

        {/* //-------------------DATE FIN--------------------- */}  
        <Text>Date arrivée</Text>
        <View style={{flexDirection:"row", alignItems: "center", justifyContent:"center", marginTop:10}}>
        
        <TextInput
            style={{
              height: 40,
              width: 180,
              borderWidth: 1,
              marginBottom: 10,
              marginRight: 5,
              textAlign: 'center'
             
            }}
            onChangeText={(dateEnd) => setdateEnd(dateEnd)}
            defaultValue=""                       
        />
      </View> 




    
      <Button
        title="Créer un challenge"
        buttonStyle={styles.button}
        onPress={() => {
          if (newChallengeName.length == 0 || newChallengeNumber.length == 0) {
            alert ("Vous devez entrer un nom de challenge et un nombre de kilomètre ou de pourcentage d'exploration")
          return;
        } else {handleSubmitChallenge(newChallengeName, newChallengeNumber)}
        
      }}/>
      
      <Pressable
        style={styles.buttonRetour}
        onPress={() => setModalVisible(!modalVisible)}
        >
        <Text style={styles.textStyleRetour}>Retour</Text>
      </Pressable>
    </View>
    </View>
 </Modal>

{/*---------------------- BOUTTON POUR CREER UN CHALLENGE -----------------------*/}

<Pressable 
  style={[styles.button]}
  onPress={() => setModalVisible(true)}>
  <Text style={styles.textStyle}>Créer un challenge !</Text>
</Pressable>

{/*---------------------- LISTE DES TROPHEES -----------------------*/}

  <Card containerStyle={styles.card}>
    <Card.Title>Mes trophées gagnés</Card.Title>
    <Card.Divider style={styles.divider}/>
    <ScrollView horizontal={true}>
    <View style={{ flexDirection: "row"}}>
      { 
        props.dataTrophee.map((u, i) => {
          return (

            <View key={i}>

              <View style={{ alignItems: "center", justifyContent:"center"}}>

                <Image style={styles.image} source={{uri:u.Trophee}}/>
                <Text>{u.Nom}</Text>
              
              </View>
              
            </View>
          );
        })
      }
    </View>
    </ScrollView>
  </Card>

  </View>
</View>

  )}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  divider: {
    borderWidth: 1, 
    borderColor:"#ED590C"
  },
  button: {
    borderRadius: 10, 
    marginTop: "auto", 
    marginBottom: "auto", 
    marginLeft:"auto" , 
    marginRight:"auto" , 
    backgroundColor: "#ED420C", 
    width:"auto" 
  },
  buttonRetour: {
    borderRadius: 10, 
    marginTop: 30,  
    backgroundColor: "#ED420C", 
    width:"auto" 
  },
  
  card: {
    display: "flex",
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 30,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderTopColor:"#ffffff",
    borderLeftColor:"#ffffff",
    borderRightColor:"#ED590C",
    borderBottomColor: "#ED590C"
  },
  image: {
    width: 95, 
    height: 95, 
    margin:5
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    margin:10

  },

  textStyleRetour: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize:10,
    margin:10

  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  customPickerStyles: {
    borderColor: "#ED420C",
    borderWidth: 2,
    borderRadius:10,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignContent:"center",
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 20,
    paddingLeft: 8
  
  }
})

/*---------------------- REDUCERS -----------------------*/

function mapStateToProps(state) {

  return {
    dataChallenge:state.UserChallenge,
    dataTrophee:state.trophy,
    token:state.token
  }
 }

 function mapDispatchToProps(dispatch){
  return {
    addNewChallenge: function(Nom, Trophee){
      dispatch({type: 'addNewChallenge', Nom, Trophee})
    },
  }
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
 )(Challenge);
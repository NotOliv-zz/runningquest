import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, Pressable, Modal, Alert, TextInput, ScrollView,  } from 'react-native';

import {Card, Button, Input, Icon, Divider} from 'react-native-elements'
import Navheader from "../component/Navheader"
import RNPickerSelect from 'react-native-picker-select';
import DropDownPicker from 'react-native-dropdown-picker';

import { Ionicons } from '@expo/vector-icons';
import color from 'color';

import {connect} from 'react-redux';





const dataChallenge = [
  {
    nameChallenge: "Tour de Levallois",
    map: require("../assets/Map-Levallois.jpg"),
    ciytLocation: 'Levallois',
    challengeDate: '11/03/2021',
    nbrKm: 25,
    totalAccomplishment: 70,
  },
]

const user= [
  {
    pseudo: "user1",
    nbrKm: 45
  },
  {
    pseudo: "user2",
    nbrKm: 30
  },
  {
    pseudo: "user3",
    nbrKm: 40
  }
]


export default function Challenge (props) {

    const [modalVisible, setModalVisible] = useState(false);
    

    
    var noUser  
      if (user.length === 0)
      {noUser = <Text>Pas encore de Challenger !</Text>}

      var listRanking = user.map(function(u) {
      return <View>
        <Text> {u.pseudo} - {u.nbrKm}Km</Text>
      </View>  
      })

    const sortBykm = (map,compareFn) => (a,b) => compareFn(map(a),map(b));
    const byValue = (a,b) => a - b;
    const toKm = e => e.price;
    const byKm = sortBykm(toKm,byValue);

    console.log([...listRanking].sort(byKm)); 

  return (
    <View style={styles.container}>
      <Navheader attribut = {props.navigation.navigate} />

      {/* Autre style de barre à voir peut-êtr epour plus tard */}
     {/* <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        searchable={true}
        searchPlaceholder="Rechercher..."
        containerStyle={{marginLeft:15, marginTop:10, width: 345, height: 50,}}
        placeholder="ville"
      /> */}

    <View style={{alignItems:"center"}}>
      <View style={{flexDirection:"row", justifyContent:"center", marginTop:10}}>
        <Icon size={20} color= "#ED590C" type= 'font-awesome' name= 'search'/>
        <View style={{marginLeft:10, marginTop:5, width:300}}>
          <RNPickerSelect
            Style={styles.customPickerStyles}
            placeholder={{color:"#ED590C", label: "Selectionnez une ville", value: null}}
            useNativeAndroidPickerStyle={false} 
            onValueChange={(value) => console.log(value)}
            items={[
                { label: "JavaScript", value: "JavaScript" },
                { label: "TypeStript", value: "TypeStript" },
                { label: "Python", value: "Python" },
                { label: "Java", value: "Java" },
                { label: "C++", value: "C++" },
                { label: "C", value: "C" },
            ]}
          />
        </View>
      </View>
      <Divider style={styles.divider}/>
    </View>

      {/* <Input
          placeholder='Ville'
          leftIcon={{ color: "#ED590C", type: 'font-awesome', name: 'search' }}
        > </Input>    */}
            
    {
      dataChallenge.map((u,i)=> {
        return (
        <View key={i}>
          

{/* ---------------------- Map + Citylocation ----------------------- */}

          <View style={styles.cardMap}>
              <View style={{alignItems:"center"}}>
                <Text style={styles.titreVille} >{u.ciytLocation}</Text>
                <Image 
                  style={{ width:"100%", height: 180, borderRadius: 10,}}                                
                  source={u.map}
                />
            </View>
          </View>

{/* ---------------------- Challenge Name + Date -----------------------*/}
        <Card containerStyle={styles.card}>  
        <View style={{alignItems:"center"}}>
          <View >
              <View style={styles.view}>
                <Text style={{
                  fontWeight: 'bold',
                  color: '#ED590C',
                  fontSize: 20,
                }}>{u.nameChallenge}</Text>
                <Text>{u.challengeDate}</Text>
              </View>
          </View>
          <View>
            <View style={styles.view}>
                <Text style={{
                fontWeight: 'bold',
                color: '#ED590C',
                fontSize: 20,
              }}>Mon avancement</Text>

{/*---------------------- Distance and Accomplishment -----------------------*/}

                <Text>{u.nbrKm} Km</Text>
                <Text>{u.totalAccomplishment} %</Text>
            </View>
          </View>
          <View>
            <View style={styles.view}>
              <Text style={{
                fontWeight: 'bold',
                color: '#ED590C',
                fontSize: 20,
                }}>Ranking
              </Text>

{/*---------------------- Map ranking user and sort -----------------------*/}

                {/*{user.map((u, i) => {
                      return <View key = {i}>
                          <Text>{u.pseudo}</Text>
                        </View>                                      
                  })}*/}
                <View>{noUser}{listRanking}</View>
              </View>
            </View>
        </View>

{/*---------------------- Modal -----------------------*/}

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
              <Text style={{fontWeight:"bold"}}>Inviter des amis</Text>
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

                  <Button
                  title="Envoyer l'invation"
                  buttonStyle={styles.button}
                  onPress={() => Alert.alert('Invitation envoyée ')}
                  />  

                  <Pressable
                    style={styles.buttonRetour}
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                  <Text style={styles.textStyleRetour}>Retour</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

          <Pressable
              style={[styles.button]}
              onPress={() => setModalVisible(true)}
              >
              <Text style={styles.textStyle}>Inviter des amis</Text>
          </Pressable>
        
          </Card>
          
        </View>    
        )
      })
    }
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  cardMap: {
    width: "92%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    justifyContent:"center",
    borderRadius: 10,
    borderWidth: 2,
    borderTopColor:"#ED590C",
    borderLeftColor:"#ED590C",
    borderRightColor:"#ED590C",
    borderBottomColor: "#ED590C"
  },
  titreVille: {
    width:"100%",
    fontSize: 20,
    textAlign: "center",
    backgroundColor: '#ED590C',
    fontWeight: 'bold',
    color: '#FFF',
    padding:2,
  },
  card: {
    display: "flex",
    borderRadius: 10,
    marginTop: 13,
    marginBottom: 30,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderTopColor:"#ffffff",
    borderLeftColor:"#ffffff",
    borderRightColor:"#ED590C",
    borderBottomColor: "#ED590C"
  },
  divider: {
    borderWidth: 0.5, 
    borderColor:"#ED590C",
    width:340,
    marginTop:10,
  },
  button: {
    borderRadius: 10, 
    marginTop: "auto", 
    marginBottom: "auto", 
    marginLeft:"auto" , 
    marginRight:"auto" , 
    backgroundColor: "#ED590C", 
    width:"auto" 
  },
  buttonRetour: {
    borderRadius: 10, 
    marginTop: 30,  
    backgroundColor: "#ED590C", 
    width:"auto" 
  },
  textStyleRetour: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize:10,
    margin:10

  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
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
})

const customPickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#ED590C",
    borderRadius: 10,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#ED590C",
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

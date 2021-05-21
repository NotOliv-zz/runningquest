import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, Pressable, Modal, Alert, TextInput, ScrollView,  } from 'react-native';

import {Card, Button, Input, Icon, Divider} from 'react-native-elements'
import Navheader from "../component/Navheader"
import RNPickerSelect from 'react-native-picker-select';
import DropDownPicker from 'react-native-dropdown-picker';
import MapView, { Polyline } from 'react-native-maps';

import { Ionicons } from '@expo/vector-icons';
import color from 'color';

import {connect} from 'react-redux';



const dataChallenge = [
  {
    nameChallenge: "Dernière sortie",
    lat: 48.893217,
    lon: 2.287864,
    ciytLocation: 'Levallois-Perret',
    challengeDate: '19/05/2021',
    nbrKm: 25,
    totalAccomplishment: 56,
  },
  // {
  //   nameChallenge: "Tour de Levallois",
  //   lat: 49.23536,
  //   lon: 4.04214,
  //   ciytLocation: 'Reims',
  //   challengeDate: '11/03/2021',
  //   nbrKm: 31,
  //   totalAccomplishment: 49,
  // },
]

const user= [
  {
    pseudo: "user1",
    nbrKm: 45,
  },
  {
    pseudo: "user2",
    nbrKm: 30,
  },
  {
    pseudo: "user3",
    nbrKm: 40,
  },
  {
    pseudo: "user4",
    nbrKm: 15,
  },
]

    var noUser  
      if (user.length === 0) {
        noUser = <Text>Pas encore de Challenger !</Text>}
    
    /*for(var index=0 ; index<user.length ; index++) {
      console.log(index+1)    
      var indexRanking = index+1
      }*/
    

    var listRanking = user.map(function(u) {
      return <View>
        <Text>{/*{indexRanking} - */}{u.pseudo} - {u.nbrKm}Km</Text>
      </View>  
      })

      /*const [sort, setSort] = useState([])
      
      useEffect(() => { 
        const sortBykm = (map,compareFn) => (a,b) => -compareFn(map(a),map(b));
        const byValue = (a,b) => a - b;
        const toKm = e => e.nbrKm;
        const byKm = sortBykm(toKm,byValue);
        setSort([...user].sort(byKm));  
      }, [sort]);*/

     /* const sortBykm = (map,compareFn) => (a,b) => -compareFn(map(a),map(b));
      const byValue = (a,b) => a - b;
      const toKm = e => e.nbrKm;
      const byKm = sortBykm(toKm,byValue);
      console.log([...user].sort(byKm));  */
    
    
export default function Challenge (props) {

    const [modalVisible, setModalVisible] = useState(false);
    





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
                { label: "Levallois-Perret", value: "Levallois-Peret" },
                { label: "Reims", value: "Reims" },
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
                <MapView
                style={styles.map} 
                provider="google"
                initialRegion={{
                  latitude: u.lat,
                  longitude: u.lon,
                  latitudeDelta: 0.0322,
                  longitudeDelta: 0.0221,
                }}>
                </MapView>  
            </View>
          </View>

{/* ---------------------- Challenge Name + Date -----------------------*/}
        <ScrollView>
        <Card containerStyle={styles.card}>  
        <View style={{alignItems:"center"}}>
          <View  >
              <View style={{alignItems:"center"}}>
                <Text style={{
                  fontWeight: 'bold',
                  color: '#ED590C',
                  fontSize: 15,
                  marginBottom: 5
                }}>{u.nameChallenge}</Text>
                <Text style={{marginBottom:10}} >{u.challengeDate}</Text>
              </View>
          </View>
          <View>
            <View style={{alignItems:"center"}}>
                <Text style={{
                fontWeight: 'bold',
                color: '#ED590C',
                fontSize: 15,
                marginBottom: 5
              }}>Mon avancement</Text>

{/*---------------------- Distance and Accomplishment -----------------------*/}

                <Text style={{alignItems:"center"}}>{u.nbrKm} Km</Text>
                <Text style={{marginBottom:10}}>{u.totalAccomplishment} %</Text>
            </View>
          </View>
          <View>
            <View style={{alignItems:"center"}}>
              <Text style={{
                fontWeight: 'bold',
                color: '#ED590C',
                fontSize: 15,
                marginBottom: 5
                }}>Ranking
              </Text>

{/*---------------------- Map ranking user and sort -----------------------*/}

                {/*{user.map((u, i) => {
                      return <View key = {i}>
                          <Text>{u.pseudo}</Text>
                        </View>                                      
                  })}*/}
                <View style={{marginBottom:10}}>{noUser}{listRanking}</View>
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
        </ScrollView>  
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
  map: {
    width: "100%",
    borderRadius: 10,
    height:250
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
    borderBottomColor: "#ED590C",
    alignContent:"center"
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
    backgroundColor: "#ED420C", 
    width:"auto" 
  },
  buttonRetour: {
    borderRadius: 10, 
    marginTop: 30,  
    backgroundColor: "#ED420C", 
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

import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Pressable, Modal, Alert, TextInput, ScrollView,  } from 'react-native';

import {Card, Button} from 'react-native-elements'
import Navheader from "../component/Navheader"

import { Ionicons } from '@expo/vector-icons';

export default function Challenge (props) {
   
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Navheader
              attribut = {props.navigation.navigate}
            />
            <ScrollView>

            <View style={styles.cardView}>
                <View style={styles.view} >
                    <View>
                    <Image
                        style={{ width: 150, height: 150, margin:10}}
                        source={require("../assets/Map-Levallois.jpg")}
                        />
                    <Text
                      style={{
                      fontSize: 20,
                      textAlign: "center",
                        }}>Levallois-Perret</Text>
                    </View>
                </View>
                <View  >
                    <View style={styles.view}>
                      <Text>My Challenge Name</Text>
                      <Text>date</Text>
                    </View>
                </View>
                <View  >
                    <View style={styles.view}>
                        <Text>Mon avancement</Text>
                        <Text>42 Km</Text>
                        <Text>30 %</Text>
                    </View>
                </View>
                <View  >
                    <View style={styles.view}>
                        <Text>Ranking</Text>
                        <Text>1er - Adeline - 42 Km</Text>
                        <Text>2ème - Florent - 31 Km</Text>
                        <Text>1er - Jean Luc - 27 Km</Text>
                        <Text>1er - Olivier - 23 Km</Text>
                    </View>
                </View>
                <View style={styles.view} >
                <View style={styles.centeredView}>
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
                          <Text
                          style={{
                            fontSize: 20,
                            margin: 10,
                            width: 150,
                            color: '#ED590C',
                          }}>Invitez vos amis</Text>
                            <TextInput
                                style={{
                                  height: 40,
                                  width : 250,
                                  borderWidth: 1,
                                }}
                                defaultValue=" Ajoutez un email"
                            />
                          <Pressable
                            style={[styles.button, styles.buttonSend]}
                            onPress={() => Alert.alert('Invitation envoyée')}
                            >
                            <Text style={styles.textStyle}>Envoyer</Text>
                            </Pressable>                            
                          <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                            >
                            <Text style={styles.textStyle}>Fermer</Text>
                            </Pressable>
                        </View>
                        </View>
                    </Modal>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => setModalVisible(true)}
                        >
                        <Text style={styles.textStyle}>Ajouter des amis</Text>
                    </Pressable>
                    </View>
                </View>
            </View>
                    <View style={styles.row}  >
                      <Button        
                        title="Précédent"
                        type="solid"
                        buttonStyle={{backgroundColor: "#ED590C"}}
                        onPress={() => Alert.alert('Challenge précédent')}
                      />    
                      <Button 
                        title="Suivant"
                        type="solid"
                        buttonStyle={{backgroundColor: "#ED590C"}}
                        onPress={() => Alert.alert('Challenge suivant')}
                      /> 
                    </View>
          </ScrollView>
        </View>


    );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.45,
    shadowRadius: 8,
    elevation: 10
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  view: {
    textAlign:'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#f0f0f0',
    borderWidth: 1,
    backgroundColor: '#fff',
    margin: 2,
    padding: 10,
    width: 300,

  },
  button: {
    borderRadius: 8,
    padding: 10,
    elevation: 2,
  },
  row: {    
    flexDirection: 'row',
    alignItems: 'center',
    textAlign:'center',
    margin: 5,
},
  buttonOpen: {
    backgroundColor: "#ED590C",
  },
  buttonClose: {
    backgroundColor: "#ED590C",
  },
  buttonSend: {
    marginTop: 30,
    marginBottom : 30,
    backgroundColor: "#ED590C",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Pressable, Modal, Alert, TextInput, ScrollView, Button } from 'react-native';

import {Card} from 'react-native-elements'
import Navheader from "../component/Navheader"

import { Ionicons } from '@expo/vector-icons';

export default function Challenge (props) {
   
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Navheader/>
            <ScrollView>

            <View>
                <Card>
                    <View>
                    <Image
                        style={{ width: 150, height: 150, margin:10}}
                        source={require("../assets/Map-Levallois.jpg")}
                        />
                    </View>
                </Card>
                <Card>
                    <View>
                      <Text>My Challenge Name</Text>
                      <Text>date</Text>
                    </View>
                </Card>
                <Card>
                    <View>
                        <Text>Mon avancement</Text>
                        <Text>42 Km</Text>
                        <Text>30 %</Text>
                    </View>
                </Card>
                <Card>
                    <View>
                        <Text>Ranking</Text>
                        <Text>1er - Adeline - 42 Km</Text>
                        <Text>2ème - Florent - 31 Km</Text>
                        <Text>1er - Jean Luc - 27 Km</Text>
                        <Text>1er - Olivier - 23 Km</Text>
                    </View>
                </Card>
                <Card>
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
                          <Text>Invitez vos amis</Text>
                            <TextInput
                                style={{
                                  height: 40,
                                  borderWidth: 1
                                }}
                                defaultValue="Ajoutez un email"
                            />
                          <Button
                            title="Envoyer"
                            onPress={() => Alert.alert('Simple Button pressed')}
                          />                            
                          <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                            >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                            </Pressable>
                        </View>
                        </View>
                    </Modal>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => setModalVisible(true)}
                        >
                        <Text style={styles.textStyle}>Show Modal</Text>
                    </Pressable>
                    </View>
                </Card>
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
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

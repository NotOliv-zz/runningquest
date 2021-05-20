import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Pressable, Modal, Alert, TextInput, ScrollView,  } from 'react-native';

import {Card, Button, Input, Icon, Divider} from 'react-native-elements'
import Navheader from "../component/Navheader"
import RNPickerSelect from 'react-native-picker-select';
import DropDownPicker from 'react-native-dropdown-picker';

import { Ionicons } from '@expo/vector-icons';
import color from 'color';



const dataChallenge = [
  {
    nameChallenge: "Tour de Levallois",
    map: require("../assets/Map-Levallois.jpg"),
    ciytLocation: 'Levallois',
    challengeDate: '11/03/2021',
    nbrKm: 25,
    totalAccomplishment: 70,
  },
  /*{
    nameChallenge: "Tour de Levallois",
    map: require("../assets/Map-Levallois.jpg"),
    ciytLocation: 'Levallois',
    challengeDate: '11/03/2021',
    nbrKm: 30,
    totalAccomplishment: 70,
  }*/
]

const user= [
  {
    pseudo: "user1",
    nbrKm: 45
  },
  {
    pseudo: "user2",
    nbrKm: 30
  }
]

var ListRanking = user.map(function(u) {
  return <View>
          <Text> {u.pseudo} - {u.nbrKm}Km</Text>
         </View>  
})

export default function Challenge (props) {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);
   
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
        <Icon color= "#ED590C" type= 'font-awesome' name= 'search'/>
        <View style={{marginLeft:10, marginTop:10, width:300}}>
          <RNPickerSelect
            Style={styles.customPickerStyles}
            placeholder={{ color:"#ED590C", label: "Selectionnez une ville", value: null}}
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
                <View>{ListRanking}</View>
              </View>
            </View>
          </View>
        
        
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
    borderWidth: 1, 
    borderColor:"#ED590C",
    width:340,
    marginTop:10,
  },
});

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

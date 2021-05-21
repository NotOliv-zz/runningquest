import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, Pressable, Modal, Alert, TextInput, ScrollView,  } from 'react-native';

import {Card, Button, Input, Icon, Divider} from 'react-native-elements'
import Navheader from "../component/Navheader"
import RNPickerSelect from 'react-native-picker-select';
import DropDownPicker from 'react-native-dropdown-picker';
import MapView, { Polyline } from 'react-native-maps';
import polyline from '@mapbox/polyline';

import { Ionicons } from '@expo/vector-icons';
import color from 'color';

import {connect} from 'react-redux';

function Ranking(props) {
  
  const [currentMessage, setCurrentMessage] = useState('Levallois-Perret');
  const [latitude, setLatitude] = useState(48.893217);
  const [longitude, setLongitude] = useState(2.287864);
  const [coordslist, setCoordslist] = useState([]);
  const [initialreg,setInitialreg] = useState();

  const [nameCity, setnameCity] =useState('Levallois-Perret')
  const [lastOuting, setLastOuting] = useState("19/05/2021");
  const [nombreKm, setNombreKm] = useState(142);
  const [nombreExploration, setNombreExploration] = useState(34);
  
  const [rankingAmis1, setRankingAmis1] = useState('Olivier')
  const [rankingAmis2, setRankingAmis2] = useState('Jean-Luc')
  const [rankingAmis3, setRankingAmis3] = useState('Florent')
  const [rankingAmis4, setRankingAmis4] = useState('Adeline')

  const [kmAmis1, setKmAmis1] = useState(142)
  const [kmAmis2, setKmAmis2] = useState(23)
  const [kmAmis3, setKmAmis3] = useState(18)
  const [kmAmis4, setKmAmis4] = useState(15)

  const [rankingVille1, setRankingVille1] = useState('Alexis')
  const [rankingVille2, setRankingVille2] = useState('Viviane')
  const [rankingVille3, setRankingVille3] = useState('Laura')
  const [rankingVille4, setRankingVille4] = useState('Olivier')

  const [kmVille1, setKmVille1] = useState(57)
  const [kmVille2, setKmVille2] = useState(54)
  const [kmVille3, setKmVille3] = useState(51)
  const [kmVille4, setKmVille4] = useState(142)

  const [modalVisible, setModalVisible] = useState(false);
  


console.log(currentMessage)
console.log(longitude)
console.log(latitude)

useEffect(() => {

  //Je décode mes polyline
  var polylineEncode=[]
  for (var i=0;i<props.Activites.length;i++){
    polylineEncode.push(props.Activites[i].polyline.replace(/\\\\/g,'\\'))
  }
    
    var coords=polylineEncode.map((act,i)=>{
       
      var polyDecode=polyline.decode(act)
  
      var coords2= polyDecode.map((poly,i)=>{
  
        return ({latitude : poly[0], longitude : poly[1]})
                        
     })
     
     return (<Polyline key={i} coordinates={coords2} strokeColor="red" strokeWidth={2}  />)
   })
   setCoordslist(coords)


},[])

useEffect(() => {
  if (currentMessage=='Reims'){
    setLatitude(49.258329)
    setLongitude(4.031696)
    setnameCity('Reims')
    setLastOuting("08/05/2021")
    setNombreKm(212)
    setNombreExploration(41)
    setRankingAmis1('Jean-Luc')
    setRankingAmis2('Olivier')
    setRankingAmis3('Adeline')
    setRankingAmis4('Florent')
    setKmAmis1(234)
    setKmAmis2(212)
    setKmAmis3(167)
    setKmAmis4(139)
    setRankingVille1('Mickaël')
    setRankingVille2('Jean-Luc')
    setRankingVille3('Oliver')
    setRankingVille4('Aurélie')
    setKmVille1(243)
    setKmVille2(234)
    setKmVille3(212)
    setKmVille4(210)
  
  }else { 
    if (currentMessage=='Levallois-Perret'){
    setLatitude(48.893217)
    setLongitude(	2.287864)
    setnameCity('Levallois-Perret')
    setLastOuting("19/05/2021")
    setNombreKm(142)
    setNombreExploration(56)
    setRankingAmis1('Olivier')
    setRankingAmis2('Jean-Luc')
    setRankingAmis3('Florent')
    setRankingAmis4('Adeline')
    setKmAmis1(142)
    setKmAmis2(110)
    setKmAmis3(84)
    setKmAmis4(53)
    setRankingVille1('Alexis')
    setRankingVille2('Viviane')
    setRankingVille3('Laura')
    setRankingVille4('Olivier')
    setKmVille1(259)
    setKmVille2(256)
    setKmVille3(248)
    setKmVille4(142)
  }}
  console.log(longitude)
  console.log(latitude)


},[currentMessage])


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
    

    var listRanking = user.map(function(u,i) {
      return <View key={i}>
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
            onValueChange={(value) => setCurrentMessage(value)}
            items={[
                { label: "Levallois-Perret", value: "Levallois-Perret" },
                { label: "Reims", value: "Reims" },
            ]}
            value={currentMessage}
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
                <Text style={styles.titreVille} >{nameCity}</Text>
                <MapView
                style={styles.map} 
                provider="google"
                region={{
                  latitude: latitude,
                  longitude: longitude,
                  latitudeDelta: 0.0322,
                  longitudeDelta: 0.0221,
                }}>
                   {coordslist}
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
                }}>Dernière sortie</Text>
                <Text style={{marginBottom:5}} >{lastOuting}</Text>
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

                <Text style={{alignItems:"center"}}>{nombreKm} Km</Text>
                <Text style={{marginBottom:5}}>{nombreExploration} %</Text>
            </View>
          </View>

{/*---------------------- Map ranking user and sort -----------------------*/}

          <View style={{flexDirection:"row", marginBottom:5}}>

            <View style={{alignItems:"center", marginLeft:10, marginRight:10}}>
              <Text style={{
                fontWeight: 'bold',
                color: '#ED590C',
                fontSize: 15,
                marginBottom: 5
                }}>Ranking amis
              </Text>
                {/*{user.map((u, i) => {
                      return <View key = {i}>
                          <Text>{u.pseudo}</Text>
                        </View>                                      
                  })}*/}
              <Text style={{marginBottom:2}}>1: {rankingAmis1} - {kmAmis1} km</Text>
              <Text style={{marginBottom:2}}>2: {rankingAmis2} - {kmAmis2} km</Text>
              <Text style={{marginBottom:2}}>3: {rankingAmis3} - {kmAmis3} km</Text>
              <Text style={{marginBottom:2}}>4: {rankingAmis4} - {kmAmis4} km</Text>
            </View>
          

            <View style={{alignItems:"center", marginLeft:10, marginRight:10}}>
              <Text style={{
                fontWeight: 'bold',
                color: '#ED590C',
                fontSize: 15,
                marginBottom: 5
                }}>Ranking ville
              </Text>
                {/*{user.map((u, i) => {
                      return <View key = {i}>
                          <Text>{u.pseudo}</Text>
                        </View>                                      
                  })}*/}
              <Text style={{marginBottom:2}}>1: {rankingVille1} - {kmVille1} km</Text>
              <Text style={{marginBottom:2}}>2: {rankingVille2} - {kmVille2} km</Text>
              <Text style={{marginBottom:2}}>3: {rankingVille3} - {kmVille3} km</Text>
              <Text style={{marginBottom:2}}>4: {rankingVille4} - {kmVille4} km</Text>
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
    height:240
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

function mapStateToProps(state) {

  return {Activites:state.ActivitiesList}
 }

export default connect(mapStateToProps,null)(Ranking)
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Pressable, Modal, Alert, TextInput, ScrollView} from 'react-native';
import {Card, Button, Icon, Divider} from 'react-native-elements'
import Navheader from "../component/Navheader"
import RNPickerSelect from 'react-native-picker-select';
import MapView, { Polyline } from 'react-native-maps';
import polyline from '@mapbox/polyline';
import {connect} from 'react-redux';

     
function Ranking (props) {

  const [currentMessage, setCurrentMessage] = useState('Levallois Perret');
  const [latitude, setLatitude] = useState(48.893217);
  const [longitude, setLongitude] = useState(2.287864);
  const [coordslist, setCoordslist] = useState([]);
  const [lastOuting, setLastOuting] = useState("19/05/2021");
  const [nombreKm, setNombreKm] = useState(142);
  const [nombreExploration, setNombreExploration] = useState(34);
  
  const [modalVisible, setModalVisible] = useState(false);

  const [sortFriends, setSortFriends] = useState([])


{/* ---------------------- RECUPERATION DES POLYLINES ----------------------- */}

useEffect(() => {

/*---------------------- TRACEE DES PARCOURS SUR LA CARTE -----------------------*/
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

/*---------------------- AFFICHAGE DES INFORMATIONS ET DE LA CARTE EN FONCTION DU SELECTEUR -----------------------*/

useEffect(() => {
  if (currentMessage=='Reims'){
    setCurrentMessage("Reims")
    setLatitude(49.258329)
    setLongitude(4.031696)
    setLastOuting("08/05/2021")
    setNombreKm(212)
    setNombreExploration(41)
    
  
  }else { 
    if (currentMessage=='Levallois Perret'){
    setCurrentMessage("Levallois Perret")
    setLatitude(48.893217)
    setLongitude(	2.287864)
    setLastOuting("19/05/2021")
    setNombreKm(142)
    setNombreExploration(56)
    
  }}



},[currentMessage])


const user = [
  {
    pseudo: "Eric",
    nbrKm: 45,
  },
  {
    pseudo: "Marie",
    nbrKm: 30,
  },
  {
    pseudo: "Sarah",
    nbrKm: 40,
  },
  {
    pseudo: "Hector",
    nbrKm: 50,
  },
]

/* ---------------------- LISTE CLASSEMENT AMIS ----------------------- */

    var noFriendUser  
      if (user.length === 0) {
        noFriendUser = <Text>Pas encore de Challenger !</Text>}

    var listRankingFriends = sortFriends.map(function(u, i) {

      return <View key={i}>
        <Text>{i+1}: {u.pseudo} - {u.nbrKm}Km</Text>
      </View>  
      })

/* ---------------------- CALCULATEUR CLASSEMENT AMIS ----------------------- */
        
        useEffect(() => {
        const sortBykm = (map,compareFn) => (a,b) => -compareFn(map(a),map(b));
        const byValue = (a,b) => a - b;
        const toKm = e => e.nbrKm;
        const byKm = sortBykm(toKm,byValue);
        setSortFriends([...user].sort(byKm));  
        }, []);


/* ---------------------- CALULATEUR CLASSEMENT VILLE ----------------------- */

        var noCityUser  
        if (user.length === 0) {
          noCityUser = <Text>Pas encore de Challenger dans votre ville !</Text>}
   
          var rank=1

          var rankingCityUser = props.ranking.map ((u, i) => {
            if (u._id.city == currentMessage) {
              return (<View key={i}>
              <Text>{rank++}: {u._id.pseudo} - {u.totalDistance} Km</Text>
            </View>)
            }
        });


  return (
    <View style={styles.container}>
      <Navheader attribut = {props.navigation.navigate} />

{/*---------------------- SELECTEUR POUR CHOISIR LA VILLE -----------------------*/}

      <View style={{alignItems:"center"}}>
        <View style={{flexDirection:"row", justifyContent:"center", marginTop:10}}>
          <Icon size={20} color= "#ED590C" type= 'font-awesome' name= 'search'/>
          <View style={{marginLeft:10, marginTop:5, width:300}}>
            <RNPickerSelect
              placeholder={{color:"#ED590C", label: "Selectionnez une ville", value: null}}
              useNativeAndroidPickerStyle={false} 
              onValueChange={(value) => setCurrentMessage(value)}
              items={[
                  { label: "Levallois Perret", value: "Levallois Perret" },
                  { label: "Reims", value: "Reims" },
              ]}
              value={currentMessage}
            />
          </View>
        </View>
        <Divider style={styles.divider}/>
      </View>
             
      <View >  

{/* ---------------------- MAP ----------------------- */}

        <View style={styles.cardMap}>
            <View style={{alignItems:"center"}}>
              <Text style={styles.titreVille} >{(currentMessage)}</Text>
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

{/* ---------------------- DATE DE LA DERNIERE SORTIE -----------------------*/}
        <ScrollView>
          <Card containerStyle={styles.card}>  
          
            <View style={{justifyContent:"center", flexDirection: "row"}}>

              <View style={{paddingLeft:15, paddingRight:15}}>

                <View>
                  <View style={{alignItems:"center"}}>
                    <Text style={styles.titreText}>Dernière sortie</Text>
                    <Text>{lastOuting}</Text>
                    <Text style={{marginBottom:10}} ></Text>
                  </View>
                </View>

{/*---------------------- CLASSEMENT AMIS -----------------------*/}

                <View style={{alignItems:"center"}}>
                  <Text style={styles.titreText}>Ranking amis</Text>
                  {listRankingFriends}
                </View>
              
              </View>

{/*---------------------- EXPLORATION DE LA VILLE EN KM ET % -----------------------*/}

              <View style={{paddingLeft:15, paddingRight:15}}>

                <View style={{alignItems:"center"}}>
                  <Text style={styles.titreText}>Mon avancement</Text>
                  <Text>{nombreKm} Km</Text>
                  <Text style={{marginBottom:10}}>{nombreExploration} %</Text>
                </View>
            

{/*---------------------- CLASSEMENT VILLE -----------------------*/}

                <View style={{alignItems:"center"}}>
                  <Text style={styles.titreText}>Ranking ville</Text>
                  {rankingCityUser}
                </View>
                
              </View>

            </View>
      
{/*---------------------- MODAL POUR INVITER DES AMIS -----------------------*/}

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
        
{/*---------------------- BOUTTON POUR INVITER DES AMIS -----------------------*/}
            <View style={{marginTop:15}}>
              <Pressable
                style={[styles.button]}
                onPress={() => setModalVisible(true)}
                >
                <Text style={styles.textStyle}>Inviter des amis</Text>
              </Pressable>
            </View>
        
          </Card>
        </ScrollView>
      </View>    
 

    </View>


  );
}

/*---------------------- REDUCERS -----------------------*/

function mapStateToProps(state) {

  return {Activites:state.ActivitiesList, ranking: state.RankingList }
 }

export default connect(
  mapStateToProps,
  null
 )(Ranking);


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
  titreText: {
    fontWeight: 'bold',
    color: '#ED590C',
    fontSize: 15,
    marginBottom: 5
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


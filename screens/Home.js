import React, { useLayoutEffectn, useState,useEffect } from 'react';
import { StyleSheet, Text, View, Image, Picker, ScrollView, SafeAreaView,TextInput, Dimensions} from 'react-native';
import {Card,CardItem, SearchBar, Input, LinearProgress,Icon, Divider} from 'react-native-elements'
import Navheader from "../component/Navheader";
//import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, { Polyline } from 'react-native-maps';
import polyline from '@mapbox/polyline';
import { LinearGradient } from 'expo-linear-gradient';
import {connect} from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';

function Home(props) {
  
  const [currentMessage, setCurrentMessage] = useState('Levallois Perret');
  const [latitude, setLatitude] = useState(48.893217);
  const [longitude, setLongitude] = useState(2.287864);
  const [coordslist, setCoordslist] = useState([]);
  const [initialreg,setInitialreg] = useState()
  const [dataExploration, setDataExploration] = useState('--');
  const [dataTarget, setDataTarget] = useState(34);
  const [dataSpeed, setDataSpeed] = useState('--');
  const [dataRanking, setDataRanking] = useState('--');
  const [myTrophee, setmyTrophee] = useState([]);

useEffect(() => {
 

//Classement
  var rank=0
  for (var p=0;p<props.Rankings.length;p++){
    if (props.Rankings[p]._id.city==currentMessage){
        rank++
      if (props.Rankings[p]._id.token==props.Token){
        setDataExploration(props.Rankings[p].totalDistance);
        setDataSpeed(props.Rankings[p].averageSpeed.toFixed(2))
        setDataRanking(rank);
        break;
      } 

    }
  }


  //Je décode mes polyline
  var polylineEncode=[]

  for (var i=0;i<props.Activites.length;i++){
    console.log(currentMessage,"-----")
    
      polylineEncode.push(props.Activites[i].polyline.replace(/\\\\/g,'\\'))
       
  }
    
    var coords=polylineEncode.map((act,i)=>{
       
      var polyDecode=polyline.decode(act)
  
      var coords2= polyDecode.map((poly,i)=>{
  
        return ({latitude : poly[0], longitude : poly[1]})
                        
     })
     
     return (<Polyline key={i} coordinates={coords2} strokeColor={"red"} strokeWidth={2}  />)
   })
   setCoordslist(coords)

   //////Trophee
   var dataTropheeReverse=props.dataTrophee.reverse()
   console.log(dataTropheeReverse)
   var myTroph=dataTropheeReverse.map((u, i) => {
     if (i<3){
      return (
      
        <Image key={i} style={{ width: 40, height: 40, marginLeft:"auto", marginRight:"auto"}}
        source={{uri : u.Trophee}}
      />

      );
     }
    
  })
  setmyTrophee(myTroph)

},[])

var tropheeLib="--" 
if (myTrophee.length>0){
    tropheeLib="Mes derniers trophées"
}

var explorationLib="--" 
if (dataExploration>0){
  explorationLib=((dataExploration/500)*100).toFixed(0)
}

//j'applique le useefffect si je change de ville
useEffect(() => {

//Classement
var rank=0
setDataExploration('--');
setDataSpeed('--')
setDataRanking('--');
  for (var p=0;p<props.Rankings.length;p++){
    if (props.Rankings[p]._id.city==currentMessage){
        rank++
      if (props.Rankings[p]._id.token==props.Token){
        setDataExploration(props.Rankings[p].totalDistance);
        setDataSpeed(props.Rankings[p].averageSpeed.toFixed(2))
        setDataRanking(rank);
        break;
      } 

    }
  }

//Placement de la carte
  if (currentMessage=='Reims'){
    setLatitude(49.258329)
    setLongitude(4.031696)
    //setDataTarget(41);
    

  }else { 
    if (currentMessage=='Levallois Perret'){
    setLatitude(48.893217)
    setLongitude(	2.287864)
    //setDataExploration(142);

  }}


},[currentMessage])


  return (
        
    <View style={styles.container}>

      <Navheader attribut = {props.navigation.navigate}/>

      <View style={{alignItems:"center"}}>
      <View style={{flexDirection:"row", justifyContent:"center", marginTop:10}}>
        <Icon size={20} color= "#ED590C" type= 'font-awesome' name= 'search'/>
        <View style={{marginLeft:10, marginTop:5, width:300}}>
          
          <RNPickerSelect
            Style={styles.customPickerStyles}
            placeholder={{color:"#ED590C", label: "Selectionnez une ville"}}
            useNativeAndroidPickerStyle={false} 
             onValueChange={(value) => setCurrentMessage(value)}
            //onValueChange={(value) => changeCity(value)}
            items={[
                
                { label: "Reims", value: "Reims" },
                { label: "Levallois Perret", value: "Levallois Perret" },

            ]}
            value={currentMessage}
           
          />
        </View>
      </View>
      <Divider style={styles.divider}/>
    </View>
   
      <ScrollView>
        <View style={styles.container}>
        
          <Card containerStyle={styles.cardMap}>
          
              {/* <Image style={styles.img}
                  source={require('../assets/Map-Levallois.jpg')}
              /> */}
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

              <View style={{flexDirection:'row',justifyContent: 'center',alignItems: 'center'}}>
                <View style={styles.box}>
                      <Text style={{fontSize:13, marginBottom:5}}>Exploration</Text>
                      <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Text style={{fontWeight:"bold", color:"#ED590C" }}>{dataExploration}</Text>
                        <Text style={{fontWeight:"bold"}}> km</Text>
                      </View>
                </View>
          
                <View style={styles.box}>
                      <Text style={{fontSize:13, marginBottom:5}}>Objectif</Text>
                      <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Text style={{fontWeight:"bold", color:"#ED590C" }}>{explorationLib}</Text>
                        <Text style={{fontWeight:"bold"}}> %</Text>
                      </View>
                
                </View>
                
                <View style={styles.box}>
                      <Text style={{fontSize:13, marginBottom:5}}>Vitesse</Text>
                      <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Text style={{fontSize:13,fontWeight:"bold", color:"#ED590C" }}>{dataSpeed}</Text>
                        <Text style={{fontSize:13,fontWeight:"bold"}}> km/h</Text>
                      </View>
                </View>

                <View style={styles.box}>
                      <Text style={{fontSize:13, marginBottom:5}}>Rang Ville</Text>
                      <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Text style={{fontWeight:"bold", color:"#ED590C" }}>{dataRanking}</Text>
                        <Text style={{fontWeight:"bold"}}> ème</Text>
                      </View>
                </View>
            
              </View>

              </Card>
              
              <Card containerStyle={styles.card}>
                <Card.Title>Mes challenges</Card.Title>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center", marginBottom:10}}>
                  <Image style={{ width: 70, height: 70, marginRight:15}}
                    source={require('../assets/Badge/30km.jpg')}
                  />
                  <View>
                    <View>
                      <Text style={{fontWeight:"bold"}}>Explorez 30 nouveaux km</Text>
                      <View style={{flexDirection:"row", marginBottom:15}}>
                        <Text>Il reste </Text>
                        <Text style={{fontWeight:"bold", color:"#ED590C" }}>3 </Text>
                        <Text>jours </Text>
                      </View>
                    </View>
                    <LinearProgress style={{height:20, width:215, borderRadius:10}} variant="determinate" value={0.9} color="#ED590C"/>
                  </View>
                </View>
               
                <Card.Title>{tropheeLib}</Card.Title>
                <View style={{flexDirection:"row", justifyContent:"center"}}>
                {myTrophee}
                </View>
                
              </Card>
                            
        </View>
        </ScrollView>
        
    </View>
   
    
  );
}

          


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  img: {
    borderColor: '#f0f0f0',
    borderWidth: 1,
    width: '100%', 
    height: 200,
    marginBottom: 2,
  },
  box:{
    borderWidth: 1,
    borderRadius: 10,
    borderColor : '#fff',
    height:50,
    width:71,
    marginLeft :5,
    marginRight :5,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding : 4
  }, 
  map: {
    width: "100%",
    borderRadius: 10,
    height:180,
    marginBottom:20
  },
  cardMap: {
    display: "flex",
    backgroundColor: "#ED590C",
    borderRadius: 10,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderTopColor:"#ED590C",
    borderLeftColor:"#ED590C",
    borderRightColor:"#B5B5B5",
    borderBottomColor: "#B5B5B5",
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



function mapStateToProps(state) {

  return {Activites:state.ActivitiesList,Rankings:state.RankingList,Token:state.token, dataTrophee:state.trophy}
 }

export default connect(mapStateToProps,null)(Home)
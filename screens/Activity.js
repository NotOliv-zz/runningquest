import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import {Card, Badge} from 'react-native-elements'
import Navheader from "../component/Navheader"
import {connect} from 'react-redux';
import MapView, { Polyline } from 'react-native-maps';
import polyline from '@mapbox/polyline';


function Activity(props) {

  return (
  
    <View style={styles.container}>
         
    <Navheader attribut = {props.navigation.navigate}/>

    <View>

    <Card containerStyle={styles.card}>
      <Card.Title>Mes dernières activitées</Card.Title>
      <Image 
        style={{marginLeft:82, width: 150, height: 30}}
        source={require("../assets/poweredstrava.png")}>
      </Image>

      <Card.Title style={{fontSize:13}}>Dernier import le 21.05.2021</Card.Title>
      <Card.Divider style={styles.divider}/>
      <ScrollView>
      <View style={{justifyContent: "center",}}>
    
    {/* --------------------------AFFICHAGE DU TRACE SUR LA MAP---------------------------- */}
          {
          props.Activites.map((u, i) => {
          
            let polylinefixed = u.polyline.replace(/\\\\/g,'\\')

            let coordstab = polyline.decode(polylinefixed)
          
            let coords= coordstab.map((poly,i)=>{


              return ({latitude : poly[0], longitude : poly[1]})
              })
        
              let latitude = coordstab[0]
              let longitude = u.start_long

              return (
              
              <Card key={i} containerStyle={styles.miniCard} >
                <View style={{flexDirection:"row"}}>
                  <View style={{marginRight:10}}>
                    <Text h1 style={{marginBottom:5, fontWeight:"bold" }}>{u.run_name}</Text>
                    <Text>Ville : {u.city}</Text>
                    <Text>Distance : {u.distance} km</Text>
                    <Text>Date : {u.date}</Text>
                    <Text></Text>
                    <Text >Nouvelles routes découvertes </Text>
                    <View style={{alignItems:"flex-start"}}>
                      <Badge 
                        badgeStyle={styles.badge}
                        value={<Text style={{color:"#ffffff"}}>+{u.newkm} new km</Text>}
                      />                
                    </View>
                  </View>

                  <View>
                      <MapView
                          style={styles.map} 
                          provider="google"
                          initialRegion={{
                            latitude: coordstab[0][0],
                            longitude: coordstab[0][1],
                            latitudeDelta: 0.0322,
                            longitudeDelta: 0.0221,
                          }}>
                          <Polyline

                          coordinates={coords}
                          
                          strokeColor="red"
                          
                          strokeWidth={2}
                          />
                      </MapView> 
                  </View>
                  
                </View>
 
              </Card>
              
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
  card: {
    display: "flex",
    borderRadius: 10,
    marginTop: 30,
    paddingBottom:120,
    height: "85%",
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderTopColor:"#ffffff",
    borderLeftColor:"#ffffff",
    borderRightColor:"#ED590C",
    borderBottomColor: "#ED590C",
    
  },
  miniCard: {
    borderRadius: 10,
    marginRight:"auto",
    marginLeft:"auto",
    marginTop: 5,
    marginBottom: 5,
    shadowRadius: 4,
    shadowOpacity: 0.5
  },
  info: {
    justifyContent: 'center',
  },
  badge: {
    marginTop: 8,
    backgroundColor: "#ED420C",
    width:125,
  },
    map: {
      marginTop: 15,
      width:100,
      height:100,
      marginBottom:20
    }
});

function mapStateToProps(state) {

  return {Activites:state.ActivitiesList}
 }

export default connect(
  mapStateToProps,
  null
 )(Activity);

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';

import {Avatar,Card, ListItem, Button, Icon, Header, Badge} from 'react-native-elements'
import Navheader from "../component/Navheader"

import {connect} from 'react-redux';
import MapView, { Polyline } from 'react-native-maps';
import polyline from '@mapbox/polyline';

// const activites = [
//   {
//     name: 'Running du soir',
//     carte: require("../assets/RunMap/Run1.png"),
//     distance: '12 km',
//     date: "22 mai 2021",
//     newexploration: "+25%"
//   },
//   {
//     name: 'Run du matin',
//     carte: require("../assets/RunMap/Run2.png"),
//     distance: '6 km',
//     date: "13 mai 2021",
//     newexploration: "+1,2%"
//   },
//   {
//     name: 'Run test',
//     carte: require("../assets/RunMap/Run3.png"),
//     distance: '6 km',
//     date: "13 mai 2021",
//     newexploration: "+1,2%"
//   },
//   {
//     name: 'Run test',
//     carte: require("../assets/RunMap/Run3.png"),
//     distance: '6 km',
//     date: "13 mai 2021",
//     newexploration: "+1,2%"
//   },
//   {
//     name: 'Run test',
//     carte: require("../assets/RunMap/Run3.png"),
//     distance: '6 km',
//     date: "13 mai 2021",
//     newexploration: "+1,2%"
//   },
//   {
//     name: 'Run test',
//     carte: require("../assets/RunMap/Run3.png"),
//     distance: '6 km',
//     date: "13 mai 2021",
//     newexploration: "+1,2%"
//   },
//  ]



function Activity(props) {

  return (
  
    <View style={styles.container}>
         
  <Navheader attribut = {props.navigation.navigate}/>

  <View>

  <Card containerStyle={styles.card}>
    <Card.Title>Mes dernières activitées</Card.Title>
    <Card.Divider style={styles.divider}/>
    <ScrollView>
    <View style={{justifyContent: "center",}}>
 
          {
          props.Activites.map((u, i) => {
          
            let coordstab = polyline.decode(u.polyline)
          
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
                    <Text>Distance : {u.distance} km</Text>
                    <Text>Date : {u.date}</Text>
                    <Text >New routes discovered :</Text>
                    <View style={{alignItems:"flex-start"}}>
                      <Badge 
                        badgeStyle={styles.badge}
                        value={<Text style={{color:"#ffffff"}}>+5.5 new km</Text>}
                      />
                      <Badge 
                        badgeStyle={styles.badge}
                        value={<Text style={{color:"#ffffff"}}>{u.newexploration} exploration</Text>} 
                      />  
                    </View>
                    </View>
                    <View>
                      <MapView
                          style={styles.map} 
                          provider="google"
                          scrollEnabled="false"
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
    paddingBottom:60,
    height: "85%",
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderTopColor:"#ffffff",
    borderLeftColor:"#ffffff",
    borderRightColor:"#ED590C",
    borderBottomColor: "#ED590C"
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
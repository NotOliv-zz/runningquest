import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useLayoutEffectn, useState } from 'react';
import { StyleSheet, Text, View, Image, Picker, ScrollView, SafeAreaView,TextInput, Dimensions} from 'react-native';
import {Card,CardItem} from 'react-native-elements'
import Navheader from "../component/Navheader";
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, { Polyline } from 'react-native-maps';
import polyline from '@mapbox/polyline';
import {connect} from 'react-redux'



function Home(props) {

// useEffect(() =>{

//   async function fetchData() {

//     const data = await fetch('http://192.168.1.30:3000/race-list', {
//       method: 'POST',
//       headers: {'Content-Type': 'application/x-www-form-urlencoded'},
//       body: `token=${props.token}`
//     })


//   }
//   fetchData()

//  },[]);

let polylines=polyline.decode("k{skH_`nWx@sAdAiCdCiEhAaChBeDfAgCt@wAVm@lA{B^g@r@{A^a@v@qA^e@Zk@dAgCPs@\\e@Xk@Vo@`@a@Zg@N_@Rq@Vk@z@uAt@qAhAgCr@qATk@x@oAVg@l@}A`A_Az@gA\\g@t@qA\\e@x@mAv@qA`@]Zc@pAaCv@gAhBgDfAeCtA{BXk@jByC^_@Tq@Lw@d@eBVm@p@yA\\e@jA{BvAwBXi@Xq@\\c@`BqA^]^c@x@kA^WzAsBvAsBTm@\\_@dAo@^]`@YbB_Bz@mAvB_C`@W|AkB~A_B^g@`@_@z@gA|@{@vBsC^_@Xm@Ro@h@Yh@O^YtAsBb@Y~B{BzBiFPs@\\oBRq@n@}Cp@kEj@{CFw@Lw@fB{Jt@}E`@cDPu@ZiBn@yC~@mGj@eDh@mDNs@ZoBRs@TiBz@sECEc@hBo@fDu@zEkArGe@hD{@vEaAvGa@hBSjBg@bD{@pESl@a@fBYlBm@`DQvA_@jBIv@i@bDUn@a@dBq@xAKx@o@~Au@pA_@f@gAdA[j@aBzA[b@a@^{@pA_Av@_B`BwAnB_@`@a@Z}@~@a@Zw@dA[f@}AjB}@`Aa@Z]\\Yd@c@ZcAfAeBxA_F~F_@X[d@]b@_@`@cAx@yApB_AdA[d@mBdDYn@{@pAu@rASn@[h@Ul@}@rCYj@e@j@Un@mBjDs@xAgCjEs@tAUj@qAxB]d@]^c@VqAtBYp@qBvCsAtB]^y@jAk@`B[j@]b@u@tA[b@iAhCYd@]\\Mv@mA|Bm@|A[f@]`@Sr@Uj@u@nAmAzB{@hAYr@aBlDsAzBWl@gBdDu@lAw@jAq@vAw@vAWj@kBlDq@xAw@xA")
//let polylines=polyline.decode("mstkH{doWb@Dm@VDpBEx@?t@CFSDMCc@QACId@Ah@Qj@IJe@Ge@?e@Ka@?FoBBQTm@Xc@Lu@Ro@n@sAJu@Zc@\\sAVi@r@cABD@v@IbFIVATG?FBDI")
console.log(polylines.length)

let coords= polylines.map((poly,i)=>{

return ({latitude : poly[0], longitude : poly[1]})

})
// console.log(coords)

  return (
        
    <View style={styles.container}>

        <Navheader
          attribut = {props.navigation.navigate}
        />

      <View style={{flexDirection: 'row', height:50, padding:5, alignItems : 'center'}}>
         <Icon name="search" color="orange" />
         <TextInput 
         style={{width:'80%', borderRadius: 10,height:30,fontSize :15,marginLeft:15,
         borderColor: '#f0f0f0',
         borderWidth: 1}}
         placeholder="Ville"/>
      </View>

      <ScrollView>
        <View style={styles.container}>
          <Card containerStyle={{backgroundColor: "#ED590C"}}>
              {/* <Image style={styles.img}
                  source={require('../assets/Map-Levallois.jpg')}
              /> */}
              <MapView
              style={styles.map} 
              provider="google"
              initialRegion={{
                latitude: 49.23536,
                longitude: 4.04214,
                latitudeDelta: 0.0322,
                longitudeDelta: 0.0221,
              }}>
              <Polyline
              coordinates={coords}
              
              strokeColor="red"
              
              strokeWidth={5}
              />


              </MapView>      

              <View style={{flexDirection:'row',justifyContent: 'center', height:50,alignItems: 'center'}}>
                <View style={styles.box}>
                      <Text>Distance</Text>
                      <Text>15 km</Text>
                </View>
          
                <View style={styles.box}>
                      <Text>Exploration</Text>
                      <Text>15%</Text>
                
                </View>
                
                <View style={styles.box}>
                      <Text>Nb de pas</Text>
                      <Text>15888</Text>
                
                </View>

                <View style={styles.box}>
                      <Text>Rang</Text>
                      <Text>6eme</Text>
                
                </View>
            
              </View>

              </Card>

              <View style={{alignItems: 'center',borderRadius: 10, borderColor:'#D3D3D3', borderWidth:1, width:'90%',marginTop:10,padding:5}}>
              <Text  style={{marginTop:10}}>Mon Challenge</Text>
                <View style={{flexDirection:'row',justifyContent: 'center', height:50,alignItems: 'center', marginTop:5}}>
                 
                <Image style={{ width: 50, height: 50, margin:10}}
                  
                  source={require('../assets/Badge/30km.jpg')}
                />

               </View>

               <Text  style={{marginTop:10}}>Derniers trophées</Text>

                <View style={{flexDirection:'row',justifyContent: 'center', height:50,alignItems: 'center', marginTop:10}}>
                 
                <Image style={{ width: 50, height: 50, margin:10}}
                  source={require('../assets/Badge/30km.jpg')}
                />

                <Image style={{ width: 50, height: 50, margin:10}}
                  
                  source={require('../assets/Badge/30km.jpg')}
                />
           

               <Image style={{ width: 50, height: 50, margin:10}}
                  source={require('../assets/Badge/30km.jpg')}
                />

               </View>
               </View>




       
        </View>
      
      </ScrollView>
    </View>
   
    
  );
}

          


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
   
  },
  view :{
    textAlign:'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#f0f0f0',
    borderWidth: 1,
    padding : 10,
    width : '70%',
    marginBottom : 5,
    backgroundColor: '#fff',


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
    margin :5,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding : 4
  }, 
  map: {
    width: "100%",
    height:200,
    marginBottom:20
  }
});


function mapStateToProps(state){
  return   {token: state.token}
                  
}
export default connect(mapStateToProps,null)(Home)
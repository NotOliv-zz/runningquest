import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Activity from './screens/Activity';
import API from './screens/API'
import Challenge from './screens/Challenge';
import Home from './screens/Home';
import Inscription from './screens/Inscription';
import Login from './screens/Login';
import Profil from './screens/Profil';
import Ranking from './screens/Ranking';
import Welcome from './screens/Welcome';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name == 'Snap') {
            iconName = 'ios-camera';
          } else if (route.name == 'Gallery') {
            iconName = 'ios-images';
          }
  
          return <Ionicons name={iconName} size={25} color={color} />;
        },
        })}
      tabBarOptions={{
        activeTintColor: '#009788',
        inactiveTintColor: '#FFFFFF',
        style: {
          backgroundColor: '#111224',
        }
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Ranking" component={Ranking} />
      <Tab.Screen name="Challenge" component={Challenge} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Inscription" component={Inscription} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

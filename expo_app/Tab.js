import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Game from "./Game"
import HomeScreen from "./Home"
import SettingsScreen from './Setting';




const Tab = createMaterialBottomTabNavigator();




// const Tab = createBottomTabNavigator();

const TAB = () =>{
  return (
      <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: 'gray'}}>
        <Tab.Screen  name="Game" component={Game} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor:'blue'
  },
  text:{
    color: 'black'
  }
});

export default TAB;
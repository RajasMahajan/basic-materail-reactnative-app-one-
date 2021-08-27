import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabNavigator from './tab';
import profileone from '../Screens/profile';

const Drawer = createDrawerNavigator()
const DrawerNavigator=()=>{
     return(
          <Drawer.Navigator>
          <Drawer.Screen name="Home" component={BottomTabNavigator}/> 
          <Drawer.Screen name="Profile" component={profileone}/>
          </Drawer.Navigator>
     )
}
export default DrawerNavigator;
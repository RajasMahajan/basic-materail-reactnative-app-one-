import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../Screens/feed.js';
import CreatPost from '../Screens/createpost.js';
const Tab = createBottomTabNavigator();
const BottomTabNavigator =()=>{
     return(
          <Tab.Navigator
          screenOptions={({route}) =>({
           tabBarIcon:({focused,color,size}) =>{
          let iconName;
          if(route.name==='feed'){
               iconName=focused ? 'create': 'create-outline';

          }
          else if(route.name==='createpost'){
               iconName=focused ? 'create' : 'create-outline'
          }
          return <Ionicons name={iconName} size={size} color={color}/>
           }
          })
     }
          tabBarOptions={{
          activeTintColor:'Tomato',
          inactiveTintcolor:'gray'
          }}
          
          >
          <Tab.Screen name='feed' component={Feed}/>
          <Tab.Screen name = 'createpost' component={CreatPost}/>
          </Tab.Navigator>

     )
}
export default  BottomTabNavigator
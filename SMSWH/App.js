import Fontawesome from 'react-native-vector-icons/FontAwesome';
 import React, { useEffect, useState } from 'react';
 //import {SafeAreaView, Text} from 'react-native';
 import {NavigationContainer} from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'

import Home  from './src/components/Home'; 
import NaturalItems from './src/components/NaturalItems';
import MultiUseItems from './src/components/MultiUseItems';
import FoodWaste from './src/components/FoodWaste';
import Tumbler from './src/components/Tumbler';
import Bag from './src/components/Bag';
import Transportation from './src/components/Transportation';
import mypage from './src/components/MyPage';
import ranking from './src/components/Rank';
import signin from './src/components/signin';
import signup from './src/components/signup';
import auth from '@react-native-firebase/auth';





const homeStackNavigation = createStackNavigator();
const signStackNavigation = createStackNavigator();
const flag= false;
HomeStackScreen = ()=>{
  
   

  return(
    
     <homeStackNavigation.Navigator screenOptions = {({route})=>({headerShown:false})}>

      
         <homeStackNavigation.Screen name="Home" component={Home}/>
      <homeStackNavigation.Screen name="NaturalItems" component={NaturalItems}/>
      <homeStackNavigation.Screen name="MultiUseItems" component={MultiUseItems}/>
      <homeStackNavigation.Screen name="FoodWaste" component={FoodWaste}/>
      <homeStackNavigation.Screen name="Tumbler" component={Tumbler}/>
      <homeStackNavigation.Screen name="Bag" component={Bag}/>
      <homeStackNavigation.Screen name="Transportation" component={Transportation}/>
        
    </homeStackNavigation.Navigator>
  )
  
  
}
 signStackScreen =()=>{
  
    
  return(
  <signStackNavigation.Navigator screenOptions = {({route})=>({headerShown:false})}>

      <signStackNavigation.Screen name = "signin" component={signin}/>
      <signStackNavigation.Screen name = "signup" component={signup}/> 
      <signStackNavigation.Screen name = "myPage" component={mypage}/> 

      
  </signStackNavigation.Navigator>
  )
  
  }
const Tabs = createBottomTabNavigator(
);

const checkauth=false;

function App (){
  
  
    return(
      <NavigationContainer>
        <Tabs.Navigator
          screenOptions = {({route})=>({
            tabBarIcon : ({focused,color,size})=>{
              let iconName;
              if(route.name =='Ranking'){
                iconName = 'line-chart'
              }else if (route.name == 'HomeStack'){
               iconName= 'home'
              }
              else if(route.name == 'mypage'){
                iconName ='user'
              }
              return <Fontawesome name = {iconName} size={size} color={color}/>;
            },
            tabBarInactiveTintColor :'gray',
            tabBarActiveTintColor :'black',
           
            tabBarStyle :{
              backgroundColor:'white'
            },
            headerShown:false
          })}
        >
          <Tabs.Screen name = "mypage" component={signStackScreen}/>
        <Tabs.Screen name = "HomeStack" component={HomeStackScreen}/>

          <Tabs.Screen name = "Ranking" component={ranking}/>
          
          
        </Tabs.Navigator>
      </NavigationContainer>
    )
  
}
 export default App;
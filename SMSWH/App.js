import Fontawesome from 'react-native-vector-icons/FontAwesome';
 import React from 'react';
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

import signin from './src/components/signin';
import signup from './src/components/signup';

const Tabs = createBottomTabNavigator();

const homeStackNavigation = createStackNavigator();
const signStackNavigation = createStackNavigator();

HomeStackScreen = ()=>{
  return(
    <homeStackNavigation.Navigator screenOptions = {({route})=>({headerShown:false})}>
      <homeStackNavigation.Screen  name="Home" component={Home}/>
      <homeStackNavigation.Screen name="NaturalItems" component={NaturalItems}/>
      <homeStackNavigation.Screen name="MultiUseItems" component={MultiUseItems}/>
      <homeStackNavigation.Screen name="FoodWaste" component={FoodWaste}/>
      <homeStackNavigation.Screen name="Tumbler" component={Tumbler}/>
      <homeStackNavigation.Screen name="Bag" component={Bag}/>
      <homeStackNavigation.Screen name="Transportation" component={Transportation}/>
    </homeStackNavigation.Navigator>
  )
}

signStackscreen = () =>{
  return (
    <signStackNavigation.Navigator screenOptions = {({route})=>({headerShown:false})}>
      <signStackNavigation.Screen name = "signin" component={signin}/>
      <signStackNavigation.Screen name = "signup" component={signup}/>
     
    </signStackNavigation.Navigator>
  )
}
class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Tabs.Navigator
          screenOptions = {({route})=>({
            tabBarIcon : ({focused,color,size})=>{
              let iconName;
              if(route.name =='Ranking'){
                iconName = 'home'
              }else if (route.name == 'HomeStack'){
               iconName= 'comment'
              }
              else if(route.name == 'mypage'){
                iconName ='user-o'
              }
              return <Fontawesome name = {iconName} size={size} color={color}/>;
            },
            tabBarInactiveTintColor :'black',
            tabBarActiveTintColor:'#99A799',
            tabBarStyle :{
              backgroundColor:'white'
            },
            headerShown:false
          })}
        
        
        >

          <Tabs.Screen name = 'sign' component ={signStackscreen}/>
          <Tabs.Screen name = "HomeStack" component={HomeStackScreen}/>
        </Tabs.Navigator>
      </NavigationContainer>
    )
  }
}
 export default App;
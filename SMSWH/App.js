import Fontawesome from 'react-native-vector-icons/FontAwesome';
 import React from 'react';
 //import {SafeAreaView, Text} from 'react-native';
 import {NavigationContainer} from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack';
import Home  from './src/components/Home';
import signin from './src/components/signin';
import signup from './src/components/signup';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
 //const Stack = createStackNavigator();
   
const Tabs = createBottomTabNavigator();

const homeStackNavigation = createStackNavigator();
const signStackNavigation = createStackNavigator();
signStackscreen = () =>{
  return (
    <signStackNavigation.Navigator screenOptions = {({route})=>({headerShown:false})}>
      <signStackNavigation.Screen name = "signin" component={signin}/>
      <signStackNavigation.Screen name = "signup" component={signup}/>
     
    </signStackNavigation.Navigator>
  )
}
HomeStackScreen = ()=>{
  return(
    <homeStackNavigation.Navigator screenOptions = {({route})=>({headerShown:false})}>
      <homeStackNavigation.Screen name="home" component={Home}/>
    </homeStackNavigation.Navigator>
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
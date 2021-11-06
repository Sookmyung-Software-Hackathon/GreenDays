 import Fontawesome from 'react-native-vector-icons/FontAwesome';
 import React from 'react';
 import {SafeAreaView, Text} from 'react-native';
 import {NavigationContainer} from '@react-navigation/native'
 import { createStackNavigator } from '@react-navigation/stack';
 import Home from './src/components/Home';
 import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
 const Stack = createStackNavigator();
 
 const Tabs = createBottomTabNavigator();

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
              }else if (route.name == 'Home'){
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
        <Tabs.Screen name = "Home" component={Home}/>
        </Tabs.Navigator>
      
      </NavigationContainer>
    )
  }
}
 export default App;
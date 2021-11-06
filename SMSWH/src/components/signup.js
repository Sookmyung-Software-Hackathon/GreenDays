import * as React from 'react';
import { useState } from 'react';
import {View,Text,StyleSheet,Button,SafeAreaView,TouchableOpacity, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';



function signup({navigation}){
  
    const [userEmail,setuserEmail] = useState('');
    const [userPassword,setuserPassword] = useState('');
    const [confirmPassword,setconfirmPassword]= useState('');

    const signUpFunc = () =>{
        auth()
        .createUserWithEmailAndPassword(userEmail, userPassword)
        .then( ()=>{
            console.log('User account created');
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
    return(
    <SafeAreaView style = {signupstyle.fullscreen}>
        <View style = {signupstyle.all}>
          <View>
              <Text style = {signupstyle.title}>회원가입</Text>
          </View>
          <View>
              <TextInput 
                style = {signupstyle.textinput}
                placeholder="이메일을 입력해주세요"
                onChange={(e)=>{
                    const {eventCount,target,text}=e.nativeEvent;
                    setuserEmail(text);
                }}

              />
              <TextInput  
                style = {signupstyle.textinput}
                placeholder="비밀번호를 입력해주세요"
                onChange={(e)=>{
                    const {eventCount,target,text}=e.nativeEvent;
                    setuserPassword(text);
                }}

              />
              <TextInput  
                style = {signupstyle.textinput}
                placeholder="비밀번호를 재입력해주세요"
                onChange={(e)=>{
                    const {eventCount,target,text}=e.nativeEvent;
                    setconfirmPassword(text);
                }}

              />
          </View>
          <TouchableOpacity style = {signupstyle.button} onPress={signUpFunc}>
              <Text style = {signupstyle.buttontext}>
                  등록
              </Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
    )

}
signupstyle = StyleSheet.create({
    fullscreen:{
        height:800,
        backgroundColor:"#BEDBBB",
    },
    all :{
        backgroundColor:"#BEDBBB",
        alignItems:'center',
        flexDirection:'column',
        top: 250,
       

    },
    title:{
        
        fontSize :40,
        margin:10,
        marginBottom:20

        
       

    },
    subtitle:{
        fontsize:40,
        top: 290,
        left : -30,

    },
    textinput :{
        backgroundColor:'white',
        width:280,
        height:40,
        borderRadius:15,
        margin:10


    },
    button:{
        width:200,
        height:35,
        backgroundColor:"#FEF5ED",
        alignItems:'center',
        margin:10,
        borderRadius:8
    },
    buttontext:{
        top:10,
        fontSize:20
    }
})
export default signup;

import * as React from 'react';
import { useState, useEffect } from 'react';
import {View,Text,StyleSheet,Button,SafeAreaView,TouchableOpacity, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';



function signin ({navigation}){
    const [userEmail,setuserEmail] = useState('');
    const [userPassword,setuserPassword] = useState('');
    const [loginFlag, setLoginFlag] = useState(false);

    const signInFunc = ()=>{
        auth()
        .signInWithEmailAndPassword(userEmail,userPassword)
        .then( ()=>{
            console.log('로그인 성공');
            console.log(auth());
            console.log('email : '+auth().currentUser.email);
            setLoginFlag(true);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    useEffect( ()=>{
        navigation.navigate("Home");
    },[loginFlag]);

    return(
        <SafeAreaView style={signinstyle.fullscreen}>
        <View  style = {signinstyle.all}>
            
            <Text style={signinstyle.title}>로그인</Text>
            <View style={{flexDirection:'column'}}>
                <Text style ={{margin:5}}>Email</Text>
                <TextInput 
                    style = {signinstyle.textinput}
                  placeholder="이메일을 입력해주세요"
                   onChange = {(e)=> {
                     const {eventCount,target,text} = e.nativeEvent;
                        setuserEmail(text);
                    }}
                />
            </View>
            <View style = {{flexDirection:'column'}}>
                <Text >Password</Text>
                <TextInput
                style = {signinstyle.textinput}
                  placeholder="비밀번호를 입력해주세요"
                   onChange = {(e)=> {
                     const {eventCount,target,text} = e.nativeEvent;
                        setuserPassword(text);
                    }}
                />
            </View>
            <View>
                <TouchableHighlight onPress={()=>alert("비밀번호찾으러가기")}underlayColor="white">
                    <Text>
                        비밀번호를 잊어버리셨나요?
                    </Text>
                </TouchableHighlight>
            </View>
            <View>
                <TouchableOpacity style = {signinstyle.button} onPress={signInFunc}>
                    <Text style={signinstyle.buttontext}>
                        로그인
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity style = {signinstyle.button} onPress={()=>navigation.navigate('signup')}>
                    <Text style={signinstyle.buttontext}>
                        회원가입하기
                    </Text>
                    
                </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
    )
}

signinstyle = StyleSheet.create({
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
export default signin;
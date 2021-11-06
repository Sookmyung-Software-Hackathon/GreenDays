import React from 'react';
import {SafeAreaView,StyleSheet,Text,View} from 'react-native';
import Navigator from '../../Navigation';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';

const MyPage = () =>{
    const Signout = ()=>{
        auth().signOut().then( ()=> console.log('로그아웃 성공'))
        .catch(err =>{console.log(err);})
    }
    return(
        <SafeAreaView  style={{flex:1}}>
           <View style={userstyle.TobView}>
                <Text style = {userstyle.title}>
                    My page
                </Text>
                <Image
                    style={userstyle.imagestyle}
                    source = {require('../assets/images/IMG_0467.jpg')}
                />
                <View >
               <Text style={{fontSize:20,top:200}}>내 이메일 정보</Text>
               <TouchableOpacity style={userstyle.buttonstyle}>
                   <Text style={userstyle.textstyle}>비밀번호 변경</Text>
               </TouchableOpacity>
               <TouchableOpacity style={userstyle.buttonstyle} onPress={Signout}>
                   <Text style={userstyle.textstyle}>로그아웃</Text>
               </TouchableOpacity>
                </View>

           </View>
           
        </SafeAreaView>
    )
}

const userstyle = StyleSheet.create({
    TobView:{
        flex : 1,
        backgroundColor :'#D3E4CD',
        alignItems:'center',
    },
    title:{
        fontSize:25,

    },
    imagestyle:{
        width:200,
        height:200,
        borderRadius:100,
        top:100
    },
    content:{
        fontSize:25,
    },
    textstyle :{
        fontSize:20,
        marginTop:10,
    },
    buttonstyle:{
        width:200,
        height:35,
        backgroundColor:"#FEF5ED",
        alignItems:'center',
        margin:10,
        borderRadius:8,
        top:270

    }



        
})
export default MyPage;
import React, {useState,useEffect} from 'react';
import {SafeAreaView,StyleSheet,Text,View, TextInput} from 'react-native';
import Navigator from '../../Navigation';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';

const MyPage = ({navigation}) =>{
    const [flag, setFlag] = useState(false);

    useEffect( ()=>{
        setFlag((auth().currentUser!=null) ? true : false);
    },[auth().currentUser])

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("로그인");

    const Signout = ()=>{
        auth().signOut()
        .then( ()=> {
            console.log('로그아웃 성공');
            navigation.navigate('signin');
        })
        .catch(err =>{console.log(err);});
    }
    
    useEffect( ()=>{
        if(auth().currentUser!=null){
            setEmail(auth().currentUser.email);
        }
        else setEmail('로그인 후 이용해주세요');
    },[auth().currentUser]);
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
                <Image
                    style = {{position:'relative',top:-80,width:360,height:180}}
                    source={require('../assets/images/greenee2.png')}
                />
                <View >
               <Text style={{fontSize:20,top:0}}>{email}</Text>
 
               { flag? 
                    <TouchableOpacity style={userstyle.buttonstyle} onPress={Signout}>
                        <Text style={userstyle.textstyle}>로그아웃</Text>
                    </TouchableOpacity>:
                    <TouchableOpacity style={userstyle.buttonstyle} onPress={()=>{navigation.navigate('signin')}}>
                    <Text style={userstyle.textstyle}>로그인</Text>
                </TouchableOpacity>
               
               }
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
        marginTop:40

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
        top:30

    }



        
})
export default MyPage;
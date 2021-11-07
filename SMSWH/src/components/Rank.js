import React, {useEffect, useState,useMemo} from 'react';
import {SafeAreaView, StyleSheet, Text,View,ScrollView,Image} from 'react-native';
import Navigator from '../../Navigation';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const Rank = () =>{

    return(
        <SafeAreaView style={rankstyle.SafeAreaView}>
            <View style = {rankstyle.TobView}>
                <Text style = {rankstyle.text}>Ranking</Text>
                <Image
                style = {{position:'absolute',top:50,left:80,width:400,height:200}}
                 source ={require('../assets/images/greenee2.png')}
                
                />
            </View>
            <View style={rankstyle.BottomView}>
                <View style={[rankstyle.rankingView, {paddingTop :40}]}>
                    <Text style={rankstyle.numStyle}>1</Text>
                    <Text style={[rankstyle.rankingText, {top :-110}]}>ex1@gmail.com</Text>
                </View>
                <View style={rankstyle.rankingView}>
                    <Text style={[rankstyle.numStyle, {top:0}]}>2</Text>
                    <Text style={rankstyle.rankingText}>ex3@gmail.com</Text>
                </View>
                <View style={rankstyle.rankingView}>
                    <Text style={[rankstyle.numStyle, {top:0}]}>3</Text>
                    <Text style={rankstyle.rankingText}>ex2@gmail.com</Text>
                </View>
                
            </View>
        </SafeAreaView>
    )
}

const rankstyle = StyleSheet.create({
    SafeAreaView : {flex:1},
    TobView : {
        flex : 1,
        backgroundColor :'#D3E4CD'
    },
    BottomView :{
        flex : 2,
        flexDirection : 'column',
        alignContent : 'center',
        
    },
    text :{
        fontSize:40,
        paddingTop:100,
        paddingLeft:30,
        left:10,
        top:-30
    },
    rankingView : {
        width :350,
        height : 100,
        backgroundColor : '#fef5ed',
        margin : 25,
        borderRadius :30,
        borderColor : '#99A799',
        borderWidth : 5,
        flexDirection : 'column'
    },
    rankingText : {
        fontSize : 30,
        position : 'relative',
        left : 100,
        top : -70
    },
    numStyle : {
        fontSize : 70,
        top:-40,
        width : 50,
        height : 100,
        left : 30,
        fontStyle : 'italic'
    }
})

export default Rank;
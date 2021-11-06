import React from 'react';
import {SafeAreaView, StyleSheet, Text,View,ScrollView} from 'react-native';
import Navigator from '../../Navigation';

const Rank = () =>{
    return(
        <SafeAreaView style={rankstyle.SafeAreaView}>
            <View style = {rankstyle.TobView}>
                <Text style = {rankstyle.text}>Ranking</Text>

            </View>
            <View style={rankstyle.BottomView}>
                <ScrollView>

                </ScrollView>
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
        flexDirection : 'row',
        alignContent : 'space-around',
    },
    text :{
        fontSize:30,
        paddingTop:100,
        paddingleft:50,
        left:50
    }
})

export default Rank;
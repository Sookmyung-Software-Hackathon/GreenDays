import React, { useEffect, useState } from 'react';
import { SafeAreaView ,Text, View, Button, StyleSheet,TouchableOpacity} from 'react-native';
import { Calendar, CaldendarList, Agenda } from 'react-native-calendars';
import { InsertData} from '../db';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const Transportation = ({navigation})=>{
    const [monthCount, setMonthCount] = useState(0);
    var date = new Date();
    const today = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
    
    useEffect( () =>{
        console.log(auth().currentUser.email);
        database()
        .ref().child("Database").child('대중교통')
        .orderByChild("Email")
        .equalTo(auth().currentUser.email)
        .on("value", snapshot => {
            if(snapshot.val() !== null){
                console.log(snapshot.numChildren());
                setMonthCount(snapshot.numChildren());
            }else{
                setMonthCount(0);
                console.log("we've found nothing!");
            }
        })
    },[monthCount]);
    

    return(
        <SafeAreaView style={styles.SafeAreaView}>
            <View style={styles.TobView}>
                <Text style={styles.Title}>
                    대중교통 이용하기{"\n"}이번 달 {monthCount}번{"\n"}
                </Text>
            </View>
            <View style={styles.BottomView}>
                <View style={styles.CaldendarView}>
                    <Calendar
                        current = {Date()}
                        onDayPress={(day)=>{console.log('selected day', day);}}
                        monthFormat = {Date().toString('yyyy MM')}
                        onMonthChange={(month)=>{console.log('month changed', month);}}
                        renderHeader={(date) => {/*Return JSX*/}}
                    />
                </View>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>{InsertData('대중교통',auth().currentUser.email,today)}}>
                        <Text>Insert</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Text>Back</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    SafeAreaView : {
        flex : 1
    },
    TobView : {
        flex : 1,
        backgroundColor : '#D3E4CD',
    },
    Title : {
        paddingTop :100,
        paddingLeft :30,
        fontSize : 25
    },
    BottomView : {
        flex : 2,
    },
    CaldendarView : {
        paddingTop : 30,
        paddingBottom:30
    }
})

export default Transportation;
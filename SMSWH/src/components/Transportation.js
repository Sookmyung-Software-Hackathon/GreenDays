import React, { useEffect, useState } from 'react';
import { SafeAreaView ,Text, View, Button, StyleSheet,TouchableOpacity,Image} from 'react-native';
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
                
                <View style={{alignItems:'center'}}>
                
                <Calendar
                   style = {styles.CaldendarView}
                   current = {Date()}
                   monthFormat = {'yyyy MM'}
                    onMonthChange={(month)=>{console.log('month changed', month);}}
                   renderHeader={(date) => {/*Return JSX*/}}
                     theme={{
                      calendarBackground:'white',
                      selectedDayTextColor:'red',
                      dayTextColor:'black',
                     monthTextColor:'black',
                    textMonthFontWeight:'bold'
                         
                      }}

                  />
                  
                    <TouchableOpacity style = {{flexDirection:'column',position:'absolute',top:15}}onPress={()=>{InsertData('대중교통',auth().currentUser.email,today)}}>
                        <Image 
                            style={{left:10,top:150,width:350,height:350}}
                            source={require('../assets/images/greenee.png')}
                        />
                        
                    </TouchableOpacity>
                    <Text style = {{fontSize:20,height:35, position:'absolute',top:400}}>
                            오늘 했으면 나를 눌러주세요 !
                        </Text>
                    
                    <TouchableOpacity style = {[{position:'absolute',top:420},styles.button]}  onPress={()=>navigation.goBack() }>
                        <Text style = {{fontSize:25}}>Back</Text>
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
        backgroundColor:'white'
    },
    CaldendarView : {
        top:-40,
        height:70,
        width:400,
    },
    button:{
        width:200,
        height:35,
        backgroundColor:"#FEF5ED",
        alignItems:'center',
        margin:10,
        borderRadius:8
    }
})

export default Transportation;
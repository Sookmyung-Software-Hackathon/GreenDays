import React, { useState } from 'react';
import { SafeAreaView ,Text, View, Button, StyleSheet,TouchableOpacity} from 'react-native';
import { Calendar, CaldendarList, Agenda } from 'react-native-calendars';

const NaturalItems = ({navigation})=>{
    const [monthCount, setMonthCount] = useState(0);
    const [sum, setSum] = useState(0);
    return(
        <SafeAreaView style={styles.SafeAreaView}>
            <View style={styles.TobView}>
                <Text style={styles.Title}>
                    천연용품 사용하기{"\n"}이번 달 {monthCount}번{"\n"}총 {sum}번
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

export default NaturalItems;
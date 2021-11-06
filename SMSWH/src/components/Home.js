import React from 'react';
import {SafeAreaView,StyleSheet,Text,View} from 'react-native';
//import Navigator from '../../Navigation';

const Home = ({navigation}) =>{
    return(
        <SafeAreaView style={styles.SafeAreaView}>
            <View style={styles.TobView}>
                <Text style={styles.TextStyle}>Zero Waste {"\n"} Challenge</Text>
            </View>
            <View style={styles.BottomView}>

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
        backgroundColor : '#D3E4CD'
    },
    BottomView : {
        flex : 2
    },
    TextStyle : {
        fontSize : 30,
        paddingTop : 100,
        paddingLeft : 50
    }
})

export default Home;
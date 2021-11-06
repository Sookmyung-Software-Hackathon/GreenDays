import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Navigator from '../../Navigation';

const Rank = () =>{
    return(
        <SafeAreaView style={styles.SafeAreaView}>
            <Text>Rank화면</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    SafeAreaView : {flex:1}
})

export default Rank;
import React from 'react';
import {SafeAreaView,StyleSheet,Text,View,TouchableOpacity} from 'react-native';
//import Navigator from '../../Navigation';
import NaturalItems from './NaturalItems';
import {NavigationContainer} from '@react-navigation/native'



const Home = ({navigation}) =>{

    return(
        <SafeAreaView style={styles.SafeAreaView}>
            <View style={styles.TobView}>
                <Text style={styles.TextStyle}>Zero Waste {"\n"} Challenge</Text>
            </View>
            <View style={styles.BottomView}>
                <View style={styles.ButtonView}>
                    <TouchableOpacity style={styles.Button} onPress={() => {navigation.navigate('NaturalItems');}}>
                        <Text style={styles.ButtonText}>천연 용품 사용</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Button} onPress={() => {navigation.navigate('MultiUseItems');}}>
                        <Text style={styles.ButtonText}>다회용품 사용</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Button} onPress={() => {navigation.navigate('FoodWaste');}}>
                        <Text style={styles.ButtonText}>음식물 쓰레기 {"\n"}줄이기</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.ButtonView}>
                    <TouchableOpacity style={styles.Button} onPress={() => {navigation.navigate('Tumbler');}}>
                        <Text style={styles.ButtonText}>텀블러 사용</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Button} onPress={() => {navigation.navigate('Bag');}}>
                        <Text style={styles.ButtonText}>장바구니 사용</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Button} onPress={() => {navigation.navigate('Transportation');}}>
                        <Text style={styles.ButtonText}>대중교통 이용</Text>
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
        backgroundColor : '#D3E4CD'
    },
    BottomView : {
        flex : 2,
        flexDirection : 'row',
        alignContent : 'space-around'
    },
    TextStyle : {
        fontSize : 30,
        paddingTop : 100,
        paddingLeft : 50
    },
    Button : {
        flex : 1,
        borderColor : "gray",
        borderWidth : 1,
        borderRadius : 30,
        padding : 30,
        margin : 10,
        shadowColor : "black",
        shadowOffset : {
            width : 2,
            height: 2
        },
        shadowOpacity: 3,
        shadowRadius : 3,
        backgroundColor:"#FEF5ED",
    },
    ButtonText : {
        fontSize : 15
    },
    ButtonView : {
        margin : 10,
        marginTop : 20,
        flex : 1
    }
})

export default Home;
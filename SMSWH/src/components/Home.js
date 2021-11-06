import React from 'react';
import {SafeAreaView,StyleSheet,Text,View,TouchableOpacity,Image} from 'react-native';
//import Navigator from '../../Navigation';
import NaturalItems from './NaturalItems';
import {NavigationContainer} from '@react-navigation/native'



const Home = ({navigation}) =>{

    return(
        <SafeAreaView style={styles.SafeAreaView}>
            <View style={styles.TobView}>
                <Text style={styles.TextStyle}>Zero Waste {"\n"} Challenge</Text>
                <Image 
                    style = {styles.greenee}
                    source={require('../assets/images/greenee.png')}
                />
            </View>
            <View style={styles.BottomView}>
                <View style={styles.ButtonView}>
                    <TouchableOpacity style={styles.Button} onPress={() => {navigation.navigate('NaturalItems');}}>
                        <Image 
                            style={[styles.Imagestyle,{top:-20,marginBottom:-10}]}
                            source={require('../assets/images/natural.png')}
                        />
                        <Text style={styles.ButtonText}>천연 용품 사용</Text>
                        
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Button} onPress={() => {navigation.navigate('MultiUseItems');}}>
                        <Image 
                            style={[styles.Imagestyle,{top:-20,marginBottom:-10}]}
                            source={require('../assets/images/multiuse.png')}
                        />


                        <Text style={styles.ButtonText}>다회용품 사용</Text>
                        
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Button} onPress={() => {navigation.navigate('FoodWaste');}}>
                        <Image 
                            style={{top:-20,marginBottom:-15,width:83,height:75}}
                            source={require('../assets/images/foodwaste.png')}
                        />
                        <Text style={styles.ButtonText}>음식물 쓰레기 {"\n"}      줄이기</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.ButtonView}>
                    <TouchableOpacity style={styles.Button} onPress={() => {navigation.navigate('Tumbler');}}>
                        <Image 
                            style={{top:-20,marginBottom:-15,width:40,height:75}}
                            source={require('../assets/images/tumbler.png')}
                        />
                        <Text style={styles.ButtonText}>텀블러 사용</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Button} onPress={() => {navigation.navigate('Bag');}}>
                         <Image 
                            style={{width:50,height:70,top:-20}}
                            source={require('../assets/images/bag.png')}
                        />
                        <Text style={styles.ButtonText}>장바구니 사용</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Button} onPress={() => {navigation.navigate('Transportation');}}>
                      <Image 
                            style={{top:-10,width:100,height:55}}
                            source={require('../assets/images/transfortation.png')}
                        />

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
        paddingTop : 60,
        paddingLeft : 30
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
        alignItems:'center'
    },
    ButtonText : {

        fontSize : 15
    },
    ButtonView : {
        margin : 10,
        marginTop : 20,
        flex : 1
    },
    Imagestyle:{
        width:70,
        height:70,
        marginTop:10
        
    },
    greenee:{
        position:'relative',
        top:-200,
        left:40,
        transform:[{scale:0.7}]

    }
})

export default Home;
import React, {useState} from "react";
import {BottomNavigation} from "react-native-paper";
import Home from "./src/components/Home";
import Rank from "./src/components/Rank";
import MyPage from "./src/components/MyPage";

export default function Navigator(){
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key : 'scene1', title : 'Rank', icon:'home'},
        { key : 'scene2', title : 'Home', icon:'map-outline'},
        { key : 'scene3', title : 'MyPage', icon:'clock-time-four'}
    ]);

    const renderScene = BottomNavigation.SceneMap({
        scene1 : Rank,
        scene2 : Home,
        scene3 : MyPage
    });

    return (<BottomNavigation navigationState={{index,routes}}
    onIndexChange={setIndex} renderScene={renderScene}/>);
}


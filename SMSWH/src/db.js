import React, {Component} from 'react';
import database from '@react-native-firebase/database';

    const InsertData = (category, email, date) => {
        console.log('데이터 쓰기');
        return(
            database()
            .ref().child("Database").child(category).push({
                Email : email,
                Date : date
            })
        );
    }
    var data =0;

    const getDataByCategory = (category, email) =>{
        database()
        .ref().child("Database").child(category)
        .orderByChild("Email")
        .equalTo(`${email}`)
        .once("value", snapshot => {
            if(snapshot.val() !== null){
                return snapshot.numChildren();
                console.log('user data : '+data);
            }else{
                return -1;
                console.log("we've found nothing!");
            }
            return data;
        })

    }

export {InsertData, getDataByCategory,data}
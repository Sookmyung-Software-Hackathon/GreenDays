import { format } from 'date-fns';
import React, { useState } from 'react';
import { Calendar, CaldendarList, Agenda } from 'react-native-calendars';

function calendars(){
   /* const [markedDates,setMarkedDates]=useState([]);
    const [dates,setDates] = useState([]);*/
  /*  constructor(props) {
        //super(props);
        this.state={
            markedDates=[],
            marked:null,
        }
    }
    render(){
    
    setSelectedDates =(date) =>{
        if(this.state.markedDates.length==0){
            this.setState({
                markedDates:[date]
            },()=>{
                let obj= this.state.markedDates.reduce((c,v)=>Object.assign(c,{
                    [v]:{
                        selected:true,
                        marked:true
                    }
                }),{});
                this.setState({marked:obj});
            }
            )
        }
        else{
            this.setState({
                markedDates:this.state.markedDates.concat(date)
            },()=>{
                let obj= this.state.markedDates.reduce((c,v)=>Object.assign(c,{
                    [v]:{
                        selected:true,
                        marked:true
                    }
                }),{});
                this.setState({marked:obj});
            })
        }
    }
}*/
    return(
        <Calendar
          
            current = {Date()}
            onDayPress={(day)=>{alert(day)}}
            markedDates = {'2021-11-15'}
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

                    />)
                    
    
}
export default calendars;
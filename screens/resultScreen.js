import React from 'react';
import {View} from 'react-native';
import FoodList from '../src/foodList';
export default class ResultScreen extends React.Component{
    static navigationOptions = {
        title:'ผลการค้นหา'
    };
    render(){
        return(
               
                <FoodList navigation={this.props.navigation}/>
        )
    }
}
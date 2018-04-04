import React from 'react';
import {View} from 'react-native';
import FoodList from '../src/foodList';
export default class ResultScreen extends React.Component{
    static navigationOptions = {
        title:'Result'
    };
    render(){
        return(
            <View style={{flex:1}}>
                <FoodList/>
            </View>
        )
    }
}
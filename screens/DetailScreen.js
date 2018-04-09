import React from 'react';
import {View,WebView,StyleSheet} from 'react-native';
import FoodList from '../src/foodList';
export default class DetailScreen extends React.Component{
    static navigationOptions = {
        title:'สูตรอาหาร'
    };

    constructor(){
        super();

    }
    
    render(){
        return(
        <View style={styles.container}>
        <WebView source={{uri:this.props.navigation.state.params.url}}></WebView>           
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        height:null
    }
})
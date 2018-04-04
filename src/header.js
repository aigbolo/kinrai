import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
export default class Header extends React.Component {
    render(){
      return(
      <View style={styles.header}>
      <Text style={styles.title}>To-Do List</Text>
      </View>
            )
        }
    }
const styles = StyleSheet.create({
    header:{
        backgroundColor:'skyblue',
        padding: 25,
    },
    title:{
        textAlign:'center',
        color:'#fff'
    }

})

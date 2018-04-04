import React from 'react';
import {View,Button,Text,ImageBackground,StyleSheet,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import Input from '../src/input';
import Criteria from '../src/criteria';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';
export default class SearchScreen extends React.Component{
    static navigationOptions = {header:null};
    
    constructor(){
        super();
        
    }
    
    render(){
        return(
            
            <ImageBackground style={styles.backgroundImage} source={require('../src/img/bg.png')}> 
           
               <View>
                   <Text style={styles.brand}>KinRai</Text>
               </View>
               <Input/>
               <View style={styles.listView}>
                <Criteria/>
                </View>
                
                <View style={styles.buttonView} >
                    <TouchableOpacity style={styles.buttonSearch} onPress={() => this.props.navigation.navigate('Result')}>
                        <Text style={styles.buttonText}>
                        <Icon name="leanpub" size={25} color="white" /> ทำอะไรได้บ้าง</Text>
                    </TouchableOpacity >
                </View>
                {/* <View style={{flexDirection: 'column'}}>
                    <Bubbles size={10} color="#FFF" />
                </View> */}
                {/* <KeyboardAvoidingView  style={styles.container} behavior="padding"/> */}
            </ImageBackground>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    backgroundImage: {
        flex: 1,
        flexDirection: 'column',flex: 1,
        // width: '100%',
        // height: null,
        
    },
    // container:{
    //     flexDirection: 'column',flex: 1,
    //     backgroundColor:'transparent'
    // },
    brand:{marginTop:50,marginBottom:10,textAlign:'center',fontSize:30,fontWeight:'bold',color:'white'},
    listView:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        backgroundColor:'transparent',
    },
    buttonView:{
        padding:5,flex:1,flexDirection: 'column',
        backgroundColor:'transparent',
        position:'absolute',
        width:'100%',
        bottom:20
    },
    buttonSearch:{
        borderRadius:10,
        backgroundColor:'#ff3300',
        padding: 10,
        marginTop:10
    },
    buttonText:{
        position:'relative',
        fontSize:20,
        fontWeight:'500',
        textAlign:'center',
        color:'#fff'
    }
});
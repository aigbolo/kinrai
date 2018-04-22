import React from 'react';
import {Platform,View,Button,Text,ImageBackground,StyleSheet,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import Input from '../src/input';
import Criteria from '../src/criteria';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Fonts} from '../src/utils/fonts';
export default class SearchScreen extends React.Component{
    static navigationOptions = {header:null};
    
    constructor(){
        super();
        
    }
    
    render(){
        return(
            
            <ImageBackground style={styles.backgroundImage} source={require('../src/img/bg.png')}>
           <KeyboardAvoidingView keyboardVerticalOffset={Platform.select({ios: 0, android: 25})}
        style={{flex: 1}}>
               <View>
                   <Text style={styles.brand}>KinRai</Text>
               </View>
               <Input navigation={this.props.navigation}/>
               <View style={styles.listView}>
                <Criteria/>
                </View>
                
                <View style={styles.buttonView} >
                    <TouchableOpacity style={styles.buttonSearch} onPress={() => this.props.navigation.navigate('Result')}>
                        <Text style={styles.buttonText}>
                        <Icon name="leanpub" size={25} color="white" />  ค้นหา</Text>
                    </TouchableOpacity >
                </View>
                </KeyboardAvoidingView>
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
        flexDirection: 'column',
        
    },
    brand:{marginTop:50,
        marginBottom:10,
        textAlign:'center',
        fontSize:50,
        fontWeight:'bold',
        fontFamily:Fonts.kanit.bold,
        color:'white'},
    listView:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        backgroundColor:'transparent',
        minHeight:50
    },
    buttonView:{
        padding:5,flex:1,flexDirection: 'column',
        backgroundColor:'transparent',
        // position:'absolute',
        width:'100%',
        // bottom:0
    },
    buttonSearch:{
        // borderRadius:10,
        backgroundColor:'#B20043',
        padding: 10,
        marginTop:10,
        
    },
    buttonText:{
        position:'relative',
        fontSize:20,
        textAlign:'center',
        fontFamily:Fonts.kanit.medium,
        color:'#fff'
    }
});
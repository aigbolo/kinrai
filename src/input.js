import React from 'react';
import {View,Text,TextInput,StyleSheet, Vibration} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {inject,observer} from 'mobx-react/native';

@inject('criteriaStore')
@observer
export default class Input extends React.Component{

    constructor(){
        super();
        this.state = {placeholder:'เราเหลืออะไรบ้างน้า...'}
        this.onSubmitEditing = this.onSubmitEditing.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
    
    }

    onSubmitEditing(){
        this.props.criteriaStore.addCriteria();
        this.setState({placeholder:'เราเหลืออะไรบ้างน้า...'});
    }

    onChangeText(text){
        this.props.criteriaStore.text = text;
        if(text.indexOf(' ') !== -1){
            this.props.criteriaStore.addCriteria();
        }

        
        
    }


  render(){
    return (

        <Animatable.View ref="view" style={{marginTop:5}}>
           
            <TextInput style={styles.input} value={this.props.criteriaStore.text}
            onChangeText={(text) => this.onChangeText(text)}
            returnKeyType={'search'}
            returnKeyLabel={'search'}
            onSubmitEditing={this.onSubmitEditing}
            underlineColorAndroid="transparent"
            onFocus={()=>this.setState({placeholder:''})}
            placeholder={this.state.placeholder}
            fontColor="white"
            placeholderTextColor="#fff"></TextInput> 

        </Animatable.View>
    );
  }
}

const styles = StyleSheet.create({
    input:{
        height:50,
        padding:10,
        margin:10,
        borderRadius:20,
        fontSize:20,
        color:'white',
        textAlign:'center',
        borderColor:'rgba(255,255,255,0.5)',
        backgroundColor:'rgba(0,0,0,0.5)',
        borderWidth:1,
        
    },
})
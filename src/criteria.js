import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import {inject,observer} from 'mobx-react/native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
@inject('criteriaStore')
@observer
export default class Criteria extends React.Component{

    constructor(){
        super();
        this.removeCriteria = this.removeCriteria.bind(this);
    }
    
    componentDidMount(){
    
    }

    removeCriteria(key){
    this.props.criteriaStore.removeCriteria(key);
    }

    render(){
        return(
               this.props.criteriaStore.materials.map((data,index)=>
               ( 
                <View key={index} style={styles.view}>
                <TouchableOpacity onPress={()=>this.removeCriteria(index)}>
                    <Text   style={styles.text}>{data+' '}
                    <Icon name="times" size={20} color="grey" />
                    </Text>
                    </TouchableOpacity>
                </View>
                )
            )
        )
    }
}
const styles = StyleSheet.create({
    view:{
        backgroundColor:'rgba(255,255,255,0.9)',
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:15,
        paddingRight:10,
        margin:5,
        borderRadius:20, 
    },
    text:{
        fontFamily: 'Arial', fontSize: 15, fontWeight:'400'
    }
});
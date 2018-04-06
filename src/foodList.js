import React from 'react';
import {View,Text,Image,TouchableOpacity,ScrollView,FlatList} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Card from './card';
import Icon from 'react-native-vector-icons/FontAwesome';
import {inject,observer} from 'mobx-react/native';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';
@inject('foodStore')
@observer
export default class FoodList extends React.Component{
    
    constructor(){
        super();
        this.state = {isReady:false};
        this.renderList = this.renderList.bind(this);
    }
    async componentDidMount(){
       await this.props.foodStore.fetchFoods(''); 
       this.setState({isReady:true});
    }
    
    renderList(food){
        return(
            <TouchableOpacity>
            <Card>
            <View style={{height:100,flex:1,flexDirection:'row'}}>
                <View style={{width:100,height:100}}>
                    <Image style={{width:100,height:100,resizeMode:'cover'}}  source={{uri:'https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.0-9/29512415_2142473675986089_3521362667077245708_n.jpg?_nc_cat=0&oh=1909f5b4068154d721e2fcfbb357c4b5&oe=5B2FCDBB'}}/>
                </View>
                <View style={{paddingLeft:10}}>
                    <Text>{food.foodName}</Text>
                </View>
            </View>
        </Card>
        </TouchableOpacity>
        );
    
   
    }

    render(){
            return (
                <View style={{flexDirection: 'column'}}>
                {!this.state.isReady?
                <View style={{alignItems:'center',justifyContent:'center'}}><Bubbles size={10} color="#ffcd2a" /></View>
                :null
                }
                
                <FlatList 
                    data={this.props.foodStore.foods}
                    renderItem={(item)=>this.renderList(item.item)}
                    keyExtractor={(item,index)=>index.toString()}/>
                </View> 
            )
        
    }
}
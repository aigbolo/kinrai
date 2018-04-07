import React from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity,ScrollView,FlatList} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Card from './card';
import Icon from 'react-native-vector-icons/FontAwesome';
import {inject,observer} from 'mobx-react/native';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';
import {Fonts} from './utils/fonts';
@inject('foodStore')
@observer
export default class FoodList extends React.Component{
    
    constructor(){
        super();
        this.state = {isReady:false};
        this.renderList = this.renderList.bind(this);
        this.rederIngredients = this.rederIngredients.bind(this);
    }
    async componentDidMount(){
       await this.props.foodStore.fetchFoods(''); 
       this.setState({isReady:true});
    }
    
    renderList(food){
        return(
            <TouchableOpacity>
            <Card>
            <View style={{minHeight:100,flex:1,flexDirection:'row',flexWrap:'wrap'}}>
                <View style={styles.imageView}>
                    <Image style={styles.image}  source={{uri:'https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.0-9/29512415_2142473675986089_3521362667077245708_n.jpg?_nc_cat=0&oh=1909f5b4068154d721e2fcfbb357c4b5&oe=5B2FCDBB'}}/>
                </View>
                <View style={styles.detailView}>
                    <Text style={styles.foodName}>{food.foodName}</Text>
                    <Text style={styles.ingredientLabel}>วัตถุดิบ</Text>
                    <View style={styles.ingredientsView}>
                        {this.rederIngredients(food.ingredients)}
                    </View>
                </View>
                
            </View>
        </Card>
        </TouchableOpacity>
        );
    }

    rederIngredients(ingredients){
       return ingredients.map((item,index)=>{
                return <Text key={index} style={styles.ingredient}>{item.name}</Text>
            
        })
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

const styles = StyleSheet.create({
    imageView:{
        flex:0.3,
        width:100,
        height:100,
        marginTop:5,
        marginBottom:5},
    image:{
        width:100,
        height:100,
        resizeMode:'cover',
        
        borderRadius:5
    },
    detailView:{
        flex:0.7,
        paddingLeft:10,
        marginBottom:10,
        flexDirection:'column'},
    foodName:{
        fontFamily:Fonts.kanit.bold,
        color:'black',
        fontSize:15,
    },
    ingredientLabel:{
        fontFamily:Fonts.kanit.medium,
        fontSize:10
    },
    ingredientsView:{
        flex:1,
        flexDirection: 'row',
        flexWrap:'wrap',
    },
    ingredient:{
        fontFamily:Fonts.kanit.regular,
        backgroundColor:'skyblue',
        marginRight:5,
        marginBottom:5,
        paddingLeft:10,
        paddingRight:10,
        borderRadius:10
    }

})
import React from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity,ScrollView,FlatList} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Card from './card';
import Icon from 'react-native-vector-icons/FontAwesome';
import {inject,observer} from 'mobx-react/native';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';
import {Fonts} from './utils/fonts';
@inject('foodStore','criteriaStore')
@observer
export default class FoodList extends React.Component{
    
    constructor(){
        super();
        this.state = {isReady:false};
        this.renderList = this.renderList.bind(this);
        this.rederIngredients = this.rederIngredients.bind(this);
        this.goToDetail = this.goToDetail.bind(this);
    }
    async componentDidMount(){
       await this.props.foodStore.findFoodByKeyword(this.props.criteriaStore.materials); 
       this.setState({isReady:true});
    }

    goToDetail(url){
        this.props.navigation.navigate('Detail',{url:url});
    }
    
    renderList(food){
        return(
            <TouchableOpacity onPress={()=>this.goToDetail(food.url)}>
            <Card>
            <View style={{minHeight:100,flex:1,flexDirection:'row',flexWrap:'wrap'}}>
                <View style={styles.imageView}>
                    <Image style={styles.image}  source={{uri:food.image}}/>
                </View>
                <View style={styles.detailView}>
                    <Text style={styles.foodName}>{food.foodName}</Text>
                    <Text style={styles.ingredientLabel}>ส่วนผสม</Text>
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
                return <Text key={index} style={item.match?styles.ingredientMatched:styles.ingredient}>{item.name}</Text>
            
        })
    }


    render(){
            return (
                <View style={{flexDirection: 'column'}}>
                {!this.state.isReady?
                <View style={{alignItems:'center',justifyContent:'center'}}><Bubbles size={10} color="#ffcd2a" /></View>
                :
                this.props.foodStore.result.length == 0?
                 <Text style={styles.emptyFood}>ไม่พบ "{this.props.criteriaStore.materials.toString()}" ในส่วนผสม</Text>
                 :null
                }
               


                
                <FlatList 
                    data={this.props.foodStore.result}
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
    }, 
    ingredientMatched:{
        fontFamily:Fonts.kanit.regular,
        backgroundColor:'pink',
        marginRight:5,
        marginBottom:5,
        paddingLeft:10,
        paddingRight:10,
        borderRadius:10
    }, 
    emptyFood:{
        fontFamily:Fonts.kanit.medium,
        fontSize:15,
        paddingLeft:5,
        paddingTop:5
    },

})
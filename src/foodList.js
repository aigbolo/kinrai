import React from 'react';
import {View,Image,TouchableHighlight} from 'react-native';
import SortableListView from 'react-native-sortable-listview';

export default class FoodList extends React.Component{
    
    
    render(){
        return (
            <View>
                <Image style={{width: 400, height: 400}}
                source={{uri:'https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.0-9/29571384_10215960998754750_3944818320817900283_n.jpg'}}/>
            </View>
        )
    }
}
import React from 'react';
import {Text,StyleSheet,View} from 'react-native';
// import

//contet
const Card = (props) =>{
    
    return  (
        <View style={styles.cardStyle}>
            {props.children}
        </View>
    )
}
const styles = {
    cardStyle:{
        shadowColor: '#000',
        borderColor: '#ddd',
        borderWidth:1,
        borderRadius: 2,
        shadowOffset: {width:0,height:2},
        marginLeft: 5,
        marginRight: 5,
        marginTop:10,
    }
}

export default Card;
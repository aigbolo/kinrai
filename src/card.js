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
        paddingLeft:5,
        paddingRight:5,
        marginLeft:2,
        marginRight:2,
        marginTop:5,
    }
}

export default Card;
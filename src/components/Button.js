import React from 'react';
import {Text,TouchableOpacity} from 'react-native'
const Button = () => {
    return (
        <TouchableOpacity style={styles.buttonStyle} onPress={()=>""}>
        <Text style={styles.textStyle}>
            Click MEEEEEEEEEE
        </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#fff',
        borderRadius:5,
        borderWidth:1,
        marginLeft:5,
        marginRight:5,
        borderColor:'#007aff',
    },
    textStyle:{
        alignSelf:'center',
        color:'#007aff',
        fontSize:16,
        fontWeght:'600',
        paddingTop:10,
        paddingBottom:10
    }
}

export default Button;
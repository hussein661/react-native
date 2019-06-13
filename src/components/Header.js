import React from 'react';
import {Text,View} from 'react-native'

const style = {

    viewStyle:{
        backgroundColor:"#ccc",
        justifyContent:'center',
        alignItems:'center',
    }

}

const Header = (props) => {
    return (
        <View style={style.viewStyle}>
        <Text style={props.style}>
            {props.headerText}
        </Text>
        </View>
    );
};

export default Header;
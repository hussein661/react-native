import React from 'react'
import {Text,AppRegistry,View} from 'react-native'
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'


const styles = {
    textStyle:{
        fontSize:50
    },

}
const App = () => {
    const {textStyle,viewStyle} = styles
    return (
        <View>
        <Header style={textStyle} headerText={"Albmm"}/>
        <AlbumList />
        </View>
    )
}
   

    
   

AppRegistry.registerComponent('albums',()=>App)
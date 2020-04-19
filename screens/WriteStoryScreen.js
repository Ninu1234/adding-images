import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class WriteStoryScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    write screen
                </Text>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignSelf:'center',
        justifyContent:'center'
    }
})
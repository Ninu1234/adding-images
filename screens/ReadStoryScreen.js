import React, { Component } from 'react';
import {Text,View,StyleSheet} from 'react-native';

export default class ReadStoryScreen extends Component{
    render(){
        return(
            <View style ={styles.container}>
                <Text>
                    read screen
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

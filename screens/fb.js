import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class FaceBookScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}>Facebook</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop:200,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        color:'blue',
        fontWeight:"500",
        fontSize:20,
        alignItems: 'center',
        justifyContent: 'center',
      },
})
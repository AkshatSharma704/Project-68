import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {FaceBookScreen} from './screens/fb';
import {InstagramScreen} from './screens/in';

export default function App() {
  return (
    <View >
        <AppContainer/>
    </View>
  );
}

const TabNavigator = createBottomTabNavigator({
    Facebook: {screen: FaceBookScreen},
    Instagram: {screen: InstagramScreen},
});

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  
});
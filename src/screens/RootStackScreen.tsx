import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from './LandingScreen';
import SignUpScreen from './SignUpScreen';
import HomeScreen from './HomeScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator
    screenOptions={{headerShown: false}}
    // initialRouteName="LandingScreen"
  >
    <RootStack.Screen name="LandingScreen" component={LandingScreen} />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    <RootStack.Screen name="HomeScreen" component={HomeScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;

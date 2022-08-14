import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { Home } from '../components/Home';
import {Contacts} from '../components/Contacts';
import { MyTrips } from '../components/MyTrips';
import { MoneyTransfer } from '../components/MoneyTransfer';
import { icons } from '../styles/icons';


const Tab = createBottomTabNavigator();

const HomeScreen = ({}) => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            const icon = icons[route.name];
            if (icon) {
              const {focused: focussedIcon, outline: outlinedIcon} = icon;
              const iconName = focused ? focussedIcon : outlinedIcon;
              return <Ionicons name={iconName} size={size} color={color} />;
            } else {
              return undefined;
            }
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Contacts" component={Contacts} />
        <Tab.Screen name="My Trips" component={MyTrips} />
        <Tab.Screen name="Transfer" component={MoneyTransfer} />
      </Tab.Navigator>
    );
}

export default HomeScreen
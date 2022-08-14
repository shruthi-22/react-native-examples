/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackScreen from './src/screens/RootStackScreen';

import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import { MoneyTransfer } from './src/components/MoneyTransfer';

const App: () => Node = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        {/* <RootStackScreen /> */}
        <MoneyTransfer />
      </NavigationContainer>
    </TailwindProvider>
  );
};

export default App;

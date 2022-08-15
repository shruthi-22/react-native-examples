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
import {Provider} from 'react-redux';
import {store} from './src/app/store';

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <TailwindProvider utilities={utilities}>
        <NavigationContainer>
          <RootStackScreen />
        </NavigationContainer>
      </TailwindProvider>
    </Provider>
  );
};

export default App;

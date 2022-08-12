import React from 'react';
import {Text, View, StatusBar, Button} from 'react-native';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export function Home() {
    const [count, setCount] = React.useState(0);
    const onClickHandler = () => {
      setCount(count + 1);
    };
  
    return (
      <View style={styles.container}>
        <Button onPress={onClickHandler} title="Click me" />
        <Text style={{color: 'black'}}>I was clicked {count} times</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  
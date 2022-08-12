import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 40,
  },
  textSmall: {
    color: 'black',
    paddingBottom: 20,
  },
});

const LandingScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Oak</Text>
        <Text style={styles.textSmall}>
          Estate & Plantation Management Simplified !
        </Text>
        <Button
          onPress={() => navigation.navigate('SignUpScreen')}
          title="Sign Up"
        />
      </View>
    );
}
export default LandingScreen;

import React, {useEffect} from 'react';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

let STORAGE_KEY = '@contacts';

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    color: 'black',
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10,
  },
  text: {
    color: 'black',
    padding: 5,
    fontSize: 15,
  },
  contactsContainer: {
    padding: 10,
  },
});

export function Contacts() {
  const [input, setInput] = React.useState({
    contactName: '',
    phoneNumber: '',
  });
  const [data, setData] = React.useState([]);

  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (e) {
      console.log('Error occured');
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY);
      if (value) {
        setData(JSON.parse(value));
      }
    } catch (e) {
      console.log('Failed to fetch the input from storage');
    }
  };

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      console.log('Storage successfully cleared!');
    } catch (e) {
      console.log('Failed to clear the async storage.');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const onSubmitHandler = () => {
    if (input.phoneNumber && input.contactName) {
      storeData([...data, input]);
      setData([...data, input]);
      setInput('');
    } else {
      alert('Please enter something');
    }
  };

  const onClearHandler = () => {
    clearStorage();
    setData([]);
  };

  return (
    <View>
      <View style={styles.contactsContainer}>
        {data &&
          data.map(contact => (
            <Text key={contact.contactName} style={styles.text}>
              {contact.contactName} : {contact.phoneNumber}
            </Text>
          ))}
      </View>
      <Text style={{color: 'black', fontSize: 20, marginLeft: 10}}>
        New Contact
      </Text>
      <TextInput
        placeholderTextColor="gray"
        style={styles.input}
        value={input.contactName}
        placeholder="Enter Name"
        onChangeText={text =>
          setInput({
            ...input,
            contactName: text,
          })
        }
      />
      <TextInput
        placeholderTextColor="gray"
        style={styles.input}
        value={input.phoneNumber}
        placeholder="Enter phone number"
        onChangeText={text =>
          setInput({
            ...input,
            phoneNumber: text,
          })
        }
      />
      <View style={styles.buttonContainer}>
        <Button onPress={onSubmitHandler} title="Add Contact" />
        <Button onPress={onClearHandler} title="Clear All Contacts" />
      </View>
    </View>
  );
}

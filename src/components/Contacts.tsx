import React, {useEffect} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTailwind} from 'tailwind-rn';

let STORAGE_KEY = '@contacts';

export function Contacts() {
  const tailwind = useTailwind();

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
      <View style={tailwind('p-2.5')}>
        <Text style={tailwind('text-black text-xl')}>Existing Contacts</Text>
        {data &&
          data.map(contact => (
            <Text
              key={contact.contactName}
              style={tailwind('text-black p-1 text-base')}>
              {contact.contactName} : {contact.phoneNumber}
            </Text>
          ))}
      </View>
      <Text style={tailwind('text-black ml-2.5 text-xl')}>New Contact</Text>
      <TextInput
        placeholderTextColor="gray"
        style={tailwind('text-black p-2.5 m-3 border')}
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
        style={tailwind('text-black p-2.5 m-3 border')}
        value={input.phoneNumber}
        placeholder="Enter phone number"
        onChangeText={text =>
          setInput({
            ...input,
            phoneNumber: text,
          })
        }
      />
      <View style={tailwind('flex-row justify-between ml-12 mr-12 mt-2.5')}>
        <Button onPress={onSubmitHandler} title="Add Contact" />
        <Button onPress={onClearHandler} title="Clear All Contacts" />
      </View>
    </View>
  );
}

import React, {useState} from 'react';
import {
  TextInput,
  View,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  ToastAndroid,
} from 'react-native';
import Joi from 'react-native-joi-validation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  inputContainer: {
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 5,
  },
  input: {
    height: 40,
    margin: 12,
    color: 'black',
    borderWidth: 1,
    padding: 10,
  },
  button: {
    marginHorizontal: 20,
    marginTop: 5,
  },
  textContainer: {
    color: 'black',
  },
});

var schema = Joi.object().keys({
  name: Joi.string().min(3).max(30).required().label('Name'),
  phoneNumber: Joi.string()
    .regex(/\d/)
    .length(10)
    .min(10)
    .required()
    .label('Phone Number'),
  emailId: Joi.string().email().required().label('Email Address'),
});

const SignUpScreen = ({navigation}) => {
  const userDetailsInitialState = {
    phoneNumber: '',
    emailId: '',
    name: '',
  };

  const [userDetails, setUserDetails] = React.useState(userDetailsInitialState);
  const [isEditable, setisEditable] = React.useState(true);
  const [validationErrorMessage, setValidationErrorMessage] = useState(null);
  const [isDataVisible, setIsDataVisible] = useState(false);

  const onSubmitHandler = () => {
    const {error: validationError} = Joi.validate(userDetails, schema);
    if (validationError) {
      setValidationErrorMessage(validationError.details[0].message);
    } else {
      setIsDataVisible(true);
      navigation.navigate('HomeScreen');
    }
  };

  const onDisableHandler = () => {
    setisEditable(!isEditable);
  };

  const onClearHandler = () => {
    setUserDetails(userDetailsInitialState);
    setIsDataVisible(false);
  };

  const onInputChangeHandler = (key, text) => {
    setUserDetails({
      ...userDetails,
      [key]: text,
    });
  };

  const showToast = () => {
    ToastAndroid.showWithGravity(
      validationErrorMessage,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
    setValidationErrorMessage(null);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            editable={isEditable}
            placeholderTextColor="gray"
            style={styles.input}
            value={userDetails.name}
            placeholder="Name"
            onChangeText={text => onInputChangeHandler('name', text)}
          />
          <TextInput
            editable={isEditable}
            placeholderTextColor="gray"
            style={styles.input}
            value={userDetails.phoneNumber}
            placeholder="Phone Number"
            onChangeText={text => onInputChangeHandler('phoneNumber', text)}
          />
          <TextInput
            editable={isEditable}
            placeholderTextColor="gray"
            style={styles.input}
            value={userDetails.emailId}
            placeholder="Email ID"
            onChangeText={text => onInputChangeHandler('emailId', text)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            onPress={onSubmitHandler}
            title="Submit"
          />
          <Button
            style={styles.button}
            onPress={onDisableHandler}
            title={isEditable ? 'Disable' : 'Enable'}
          />
          <Button
            disabled={!isEditable}
            style={styles.button}
            onPress={onClearHandler}
            title="Clear"
          />
        </View>
        {isDataVisible && (
          <View style={{margin: 5, padding: 3}}>
            <Text style={styles.textContainer}>Name : {userDetails.name}</Text>
            <Text style={styles.textContainer}>
              Phone Number : {userDetails.phoneNumber}
            </Text>
            <Text style={styles.textContainer}>
              Email : {userDetails.emailId}
            </Text>
          </View>
        )}
        {validationErrorMessage !== null && showToast()}
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

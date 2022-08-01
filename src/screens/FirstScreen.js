import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const FirstScreen = () => {
  const [message, setMessage] = useState('');
  const navigation = useNavigation();
  const navigationButtonHandler = () => {
    navigation.navigate('SecondScreen', {message});
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>First</Text>
      <TextInput
        placeholder="Введите Ваше имя"
        value={message}
        onChangeText={text => setMessage(text)}
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={navigationButtonHandler}>
        <Text>OK!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textStyles: {
    fontSize: 16,
    textAlign: 'center',
    color: 'green',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    width: 200,
    height: 40,
  },
  buttonElement: {
    borderRadius: 40,
    backgroundColor: 'bleak',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 40,
  },
  buttonName: {
    color: 'white',
    textAlign: 'center',
  },
});

export default FirstScreen;

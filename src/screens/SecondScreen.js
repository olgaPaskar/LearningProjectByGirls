import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {MyComponent} from '../components/MyComponent';

const SecondScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const buttonHandler = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <MyComponent
        name="Катя"
        image={{
          uri: 'https://st2.depositphotos.com/6840962/11053/v/950/depositphotos_110532722-stock-illustration-no-dog-pooping-signs-black.jpg',
        }}
      />
      <Text style={styles.textStyles}>Hello {route.params.message}</Text>
      <Button title="Back" onPress={buttonHandler} />
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
    backgroundColor: 'blue',
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

export default SecondScreen;

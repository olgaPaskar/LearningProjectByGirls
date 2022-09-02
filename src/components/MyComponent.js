import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export const MyComponent = props => {
  return (
    <View style={styles.container}>
      <Text>
        Hello
        {props.name}!
      </Text>
      <Image source={props.image} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    ImageAlign: 'center',
    backgroundColor: 'red',
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

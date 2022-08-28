import React, {useEffect, useState} from 'react';

import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {UserDataItem} from '../components/UserDataItem';

const FirstScreen = () => {
  const [message, setMessage] = useState('');
  const [userData, setUserData] = useState(null);
  const [isShowUserData, setIsShowUserData] = useState(false);
  const navigation = useNavigation();
  const navigationButtonHandler = () => {
    navigation.navigate('SecondScreen', {message});
  };

  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setUserData(data));
  }, [userData]);

  // const getUserData = () => {
  //   const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  //   fetch(apiUrl)
  //     .then(response => response.json())
  //     .then(data => setUserData(data));
  // };
  const handleItemPress = () => {
    setIsShowUserData(!isShowUserData);
  };
  const renderItem = ({item}) => {
    return (
      <UserDataItem
        name={item.name}
        email={item.email}
        address={item.address}
        geo={item.geo}
        phone={item.phone}
        website={item.website}
        company={item.company}
        onPress={handleItemPress}
        isShow={isShowUserData}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>Привет друг!</Text>
      <View style={styles.container}>
        {/*<Text>{userData?.map(el => el.username)}</Text>*/}
        <FlatList
          data={userData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      {/*<TouchableOpacity style={styles.buttonContainer} onPress={getUserData}>*/}
      {/*  <Text>Passing</Text>*/}
      {/*</TouchableOpacity>*/}
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

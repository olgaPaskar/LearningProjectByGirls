import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export const UserDataItem = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      {props.isShow ? (
        <View>
          <Text>{props.name}</Text>
          <Text>{props.email}</Text>
          <Text>{props.address}</Text>
          <Text>{props.geo}</Text>
          <Text>{props.phone}</Text>
          <Text>{props.website}</Text>
          <Text>{props.company}</Text>
        </View>
      ) : (
        <View>
          <Text>{props.username}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

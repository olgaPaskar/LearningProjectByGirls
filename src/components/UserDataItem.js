import React from 'react';
import {Text, TouchableOpacity, View, Dimensions, StyleSheet} from 'react-native';

export const UserDataItem = props => {
    return (

        <View style={styles.container}>
            <TouchableOpacity onPress={props.onPress} style={styles.touchableContainer}>
                <Text style={styles.nameLabel}>{props.username}</Text>
            </TouchableOpacity>
            {props.visible && (
                <View style={styles.padding}>
                    <View style={styles.infoContainer}>
                        <Text>{props.name}</Text>
                        <Text>{props.email}</Text>
                        <Text>{props.address.city}</Text>
                        <Text>{props.geo}</Text>
                        <Text>{props.phone}</Text>
                        <Text>{props.website}</Text>
                        <Text>{props.company.name}</Text>
                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 4,
        width: Dimensions.get('window').width,
        paddingHorizontal: 16,
    },
    touchableContainer: {
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 4,
        paddingHorizontal: 4,
        borderRadius: 8,
    },
    nameLabel: {
        color: '#fff',
    },
    infoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
        paddingHorizontal: 16,
        borderBottomEndRadius: 8,
        borderBottomStartRadius: 8,
    },
    padding: {
        paddingHorizontal: 8,
    },
});

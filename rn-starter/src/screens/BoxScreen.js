import React from 'react';
import {Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return ( <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>This is Box Screen Demo</Text>
    </View>
    )
};

const styles = StyleSheet.create({
    viewStyle : {
       borderWidth: 2,
       borderColor: 'black'
    },
    textStyle: {
      borderWidth:2,
      borderColor:'red',
      margin:30
    }
});

export default BoxScreen;
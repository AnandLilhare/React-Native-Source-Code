import React from 'react';
import {Text, StyleSheet, View} from 'react-native';


const ComponetScreen = () => {
    const greeting = 'My name is Anand'
    return <View>
        <Text style={styles.textStyle}>Getting start with react native</Text>
        <Text style={{fontSize : 20}}>{greeting}</Text>
        </View>
};

const styles = StyleSheet.create ({
 textStyle : {
     fontSize : 45
     
 }

}); 


export default ComponetScreen;
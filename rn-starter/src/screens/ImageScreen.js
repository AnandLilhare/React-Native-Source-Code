import React from 'react';
import {Text, View, StyleSheet} from 'react-native'
import ImageDetails from './Componets/ImageDetails'

const ImageScreen = () => {
 return <View>
         <ImageDetails title="Forest" imageSource={require('../../assets/forest.jpg')} score="10"/>
         <ImageDetails title="Beach" imageSource={require('../../assets/beach.jpg')} score="7"/>
         <ImageDetails title="Mountain" imageSource={require('../../assets/mountain.jpg')} score="5"/>
         
</View>
};

const styles = StyleSheet.create({});


export default ImageScreen;
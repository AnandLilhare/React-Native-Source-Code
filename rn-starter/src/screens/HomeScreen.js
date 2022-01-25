import React from 'react';
import { Text, StyleSheet,View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return <View><Text style={styles.text}>HomeScreen</Text>
         <Button 
         onPress={() => navigation.navigate('Componets')}
         title='Go to Components Demo'/>

      <Button
         onPress={() => navigation.navigate('List')}
         title='Go to List Demo'
         />

         <Button
         onPress={() => navigation.navigate('ImageScreen')}
         title='Go to Image Demo'
         />
         
         <Button
         onPress={() => navigation.navigate('CounterScreen')}
         title='Go to Counter'
         />
       <Button
         onPress={() => navigation.navigate('ColorShreen')}
         title='Add a Color'
         />

     <Button
         onPress={() => navigation.navigate('SqureScreen')}
         title='Add a Square Demo'
         /> 
     <Button
         onPress={() => navigation.navigate('TextScreen')}
         title='Go to text screen'
         /> 
      <Button
         onPress={() => navigation.navigate('BoxLayout')}
         title='Go to Box Layout'
         />    

  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

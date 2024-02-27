import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to my first react-native app</Text>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      backgroundColor:'lightblue'
    },
    text:{
      color:'black',
      fontSize:20,
    }
  })

export default HomeScreen;
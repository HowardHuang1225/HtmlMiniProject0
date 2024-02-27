import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import TAB from './Tab';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation';

const App = () => {
  const [isStarted, setIsStarted] = useState(false);

  const start = () => {
    setIsStarted(true);
    console.log("Started");
  }

  if(isStarted){
    return (
      <Navigation/>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.tittle}>Welcome</Text>
          <Image
            source={require("./assets/doge.gif")}
            style={styles.pic}
            resizeMode='stretch'
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.startBtn} onPress={start}>
            <Text style={styles.startText}>Get started</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container:{
    backgroundColor:"#AAA8E5",
    flex:1
  },
  header:{
    flex:2,
    justifyContent:"center",
    alignItems:"center"
  },
  footer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"white",
    borderTopRightRadius:30,
    borderTopLeftRadius:30
  },
  pic:{
    width: 250,
    height: 250,
    borderRadius: 9999,
    borderColor:"black",
    borderWidth:3
  },
  startBtn: {
    backgroundColor: '#FF5252', // Bright red color for the reset button
    paddingVertical: 10, // Vertical padding
    paddingHorizontal: 20, // Horizontal padding
    borderRadius: 20, // Rounded corners
    borderWidth: 1, // Border width
    borderColor: '#FFC0CB', // Light pink border color
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 1 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 3, // Shadow radius
    elevation: 3, // Elevation for Android
    alignItems: 'center', // Center items horizontally  
    justifyContent: 'center', // Center items vertically
    marginTop: 20, // Margin to the top of the button
    width:250,
    height:60
  },
  startText: {
    color: 'white', // White color for the text
    fontSize: 24, // Font size
    fontWeight: '600', // Font weight
  },
  tittle:{
    fontSize: 46, // Font size
    fontWeight: '900', // Font weight
    padding: 16,
  }
})

export default App;

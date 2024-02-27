import React, { useState } from 'react';
import { View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  TouchableOpacity,
Alert } from 'react-native';
import TAB from './Tab';
import { NavigationContainer } from '@react-navigation/native';



const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const sign_in = () =>{
    console.log(username,password)
    if(username  =="Howard" && password == "533533"){
      Alert.alert(
        'Confirmation',
        "Signed in successfully",
        [
          {
            text: 'OK',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
          }
        ]
      );
      navigation.navigate('Main');
    }
    else if(username  =="" || password == ""){
      Alert.alert(
        'ERROR',
        "username or password can't be empty!",
        [
          {
            text: 'OK',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
          }
        ]
      );
    }
    else{
      Alert.alert(
        'ERROR',
        "wrong username or password!",
        [
          {
            text: 'OK',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
          }
        ]
      );
    }
  }
  

    return (
      <View style={styles.container0}>
      <View style={styles.container1}></View>
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container2}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container3}>
        <Text style={styles.title}>Sign In</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={sign_in}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </View>
    );
  
};
const styles = StyleSheet.create({
  container0: {
    flex: 1,
    backgroundColor:"#AAA8E5"
  },
  container1: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:"#AAA8E5",
  },
  container2: {
    flex: 8,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"white",
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
    borderBottomRightRadius:30,
    borderBottomLeftRadius:30
  },
  container3: {
    justifyContent:"center",
    alignItems:"center",
  },
  title: {
    fontSize: 24,
    marginBottom: 35,
  },
  input: {
    width: 320,
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
  },
  linkText: {
    marginTop: 20,
    color: '#007bff',
  },
});

export default SignInScreen;

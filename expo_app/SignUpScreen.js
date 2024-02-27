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

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container0}>
      <View style={styles.container1}></View>
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container2}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container3}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
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
      <TouchableOpacity style={styles.button} onPress={() => console.log('Sign Up pressed')}>
        <Text style={styles.buttonText}>Sign Up</Text>
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
    flex: 6,
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
      marginBottom: 20,
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
  });

export default SignUpScreen;

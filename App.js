import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home' ;

const Stack = createStackNavigator();

const PhoneNumberValidation = ( {navigation} ) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validatePhoneNumber = (phone) => {
    // Biểu thức Regex kiểm tra số điện thoại Việt Nam
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;

    if (phoneRegex.test(phone)) {
      setErrorMessage('Số điện thoại hợp lệ!');
      return true;
    } else {
      setErrorMessage('Số điện thoại không hợp lệ!');
      return false;
    }
  };

  const handleButtonPress = () => {
    if(validatePhoneNumber(phoneNumber))
    {
      navigation.navigate('Home');
    };
  };

  return (
    <View style={styles.body}>
      <Text style={{fontSize: 20, marginBottom: 15}}>Nhập số điện thoại</Text>
      <Text>Dùng số diện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro</Text>
      <TextInput
        style={styles.input}
        placeholder='Nhập số điện thoại của bạn'
        keyboardType='phone-pad'
        onChangeText={(text) => {
          setPhoneNumber(text);
        }}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "PhoneNumberValidation">
        <Stack.Screen name = "Đăng nhập" component = {PhoneNumberValidation}/>
        <Stack.Screen name = "Home" component = {Home} />
      </Stack.Navigator>
      <StatusBar style='auto'/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 10,
    top: 50,
    borderBottomWidth: 2,
    borderBlockEndColor: '#ccc',
  },
  body: {
    padding: 10,
    top: 90,
  },
  input: {
    height: 40,
    paddingLeft: 10,
    borderBottomWidth: 2,
    borderBottomEndColor: '#ccc',
    borderColor: '#ccc',
  },
  button: {
    marginTop: 150,
    backgroundColor: '#aaa',
    paddingVertical: 20,
    borderRadius: 10,
    alignItems: 'center', 
  },
  buttonText: {
    fontSize: 18
  }
});
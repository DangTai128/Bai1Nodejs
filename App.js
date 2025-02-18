import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const PhoneNumberValidation = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validatePhoneNumber = (phone) => {
    // Biểu thức Regex kiểm tra số điện thoại Việt Nam
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;

    if (phoneRegex.test(phone)) {
      setErrorMessage('Số điện thoại hợp lệ!');
    } else {
      setErrorMessage('Số điện thoại không hợp lệ!');
    }
  };

  const handleButtonPress = () => {
    validatePhoneNumber(phoneNumber);
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize: 25, fontWeight: '700'}}>Đăng nhập</Text>
      </View>
      <PhoneNumberValidation />
      <StatusBar style="auto" />
    </View>
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
    marginTop: 250,
    backgroundColor: '#ccc',
    paddingVertical: 20,
    borderRadius: 10,
    alignItems: 'center', 
  },
  buttonText: {
    fontSize: 18
  }
});
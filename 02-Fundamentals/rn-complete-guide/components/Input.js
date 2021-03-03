import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const Input = (props) => {
  return <TextInput {...props} style={[styles.input, props.style]} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: Colors.mediumGrey,
    borderBottomWidth: 1,
    marginVertical: 20,
  },
});

export default Input;

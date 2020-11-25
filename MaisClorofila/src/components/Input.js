import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {secondaryColor} from '../assets/styles/Colors';

const Input = (props) => {
  const [focus, setFocus] = useState(false);

  const onFocus = () => {
    setFocus(true);
  };
  const onBlur = () => {
    setFocus(false);
  };
  return (
    <TextInput
      keyboardType={props.type}
      autoCapitalize={props.autoCapitalize}
      placeholder={props.placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
      placeholderTextColor="#fff"
      secureTextEntry={props.secureTextEntry}
      style={[styles.input, focus ? styles.inputFocus : styles.input]}
      value={props.value}
      onChangeText={props.onChange}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 55,
    borderWidth: 2,
    borderRadius: 28,
    borderColor: `${secondaryColor}`,
    paddingLeft: 30,
    paddingRight: 30,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.13)',
    fontSize: 16,
  },
  inputFocus: {
    borderColor: '#fff',
  },
});

export default Input;

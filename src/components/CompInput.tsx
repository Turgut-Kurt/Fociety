import React from 'react';
import {TextInput, StyleProp, TextStyle} from 'react-native';
const Input = (props: CompInputInterface) => {
  return (
    <TextInput
      placeholder={props.placeholder}
      placeholderTextColor={props.placeholderTextColor}
      style={props.TextInputStyle}
      secureTextEntry={props.secure}
    />
  );
};
interface CompInputInterface {
  placeholder: string;
  placeholderTextColor: string;
  secure?: boolean;
  TextInputStyle: StyleProp<TextStyle>;
}
export default Input;

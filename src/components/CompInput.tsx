import React from 'react';
import {TextInput, StyleProp, ViewStyle} from 'react-native';
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
  TextInputStyle: StyleProp<ViewStyle>;
}
export default Input;

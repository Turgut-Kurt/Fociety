import React from 'react';
import {Text, StyleProp, TextStyle} from 'react-native';
const CompText = (props: CompTextInterface) => {
  return (
    <Text style={props.textStyle}>
      <Text>{props.text}</Text>
      <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
        {props.underText}
      </Text>
    </Text>
  );
};
interface CompTextInterface {
  textStyle: StyleProp<TextStyle>;
  text: string;
  underText?: string;
}
export default CompText;

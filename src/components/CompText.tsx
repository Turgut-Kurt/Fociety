import React from 'react';
import {Text, StyleProp, TextStyle} from 'react-native';
const CompText = (props: CompTextInterface) => {
  return <Text style={props.textStyle}>{props.text}</Text>;
};
interface CompTextInterface {
  textStyle: StyleProp<TextStyle>;
  text: string;
}
export default CompText;

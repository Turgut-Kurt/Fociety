import React from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
const CompTouchable = (props: CompTouchableInterface) => (
  <TouchableOpacity style={props.style}>{props.content}</TouchableOpacity>
);
interface CompTouchableInterface {
  content: string | Number | JSX.Element;
  style: StyleProp<ViewStyle>;
}
export default CompTouchable;

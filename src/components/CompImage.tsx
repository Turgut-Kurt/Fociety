import React from 'react';
import {StyleProp, Image, ImageSourcePropType, ImageStyle} from 'react-native';
const CompImage = (props: CompImageInterface) => {
  return <Image style={props.imageStyle} source={props.source} />;
};
interface CompImageInterface {
  source: ImageSourcePropType;
  imageStyle: StyleProp<ImageStyle>;
}
export default CompImage;

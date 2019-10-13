import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const Gradient = (props: GradientInterface) => {
  return (
    <LinearGradient
      start={{x: 1, y: 0}}
      end={{x: 1, y: 1}}
      colors={props.colors}
      style={styles.container}
      locations={[0.2, 0.4, 1]}
    />
  );
};
interface GradientInterface {
  colors: string[];
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
export default Gradient;

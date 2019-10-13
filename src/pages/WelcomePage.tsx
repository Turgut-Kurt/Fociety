import React from 'react';
import {View, StyleSheet} from 'react-native';
import Gradient from '../components/Gradient';
const WelcomePage = () => {
  return (
    <View style={styles.container}>
      <Gradient colors={['#FB658B', '#FE768C', '#FE9487']} />
      <View style={styles.fl3} />
      <View style={styles.fl2} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fl1: {
    flex: 1,
  },
  fl2: {
    flex: 2,
  },
  fl3: {
    flex: 3,
  },
  jcfs: {
    justifyContent: 'flex-start',
  },
  jcc: {
    justifyContent: 'center',
  },
  jcfe: {
    justifyContent: 'flex-end',
  },
  aifs: {
    alignItems: 'flex-start',
  },
  aic: {
    alignItems: 'center',
  },
  aife: {
    alignItems: 'flex-end',
  },
});
export default WelcomePage;

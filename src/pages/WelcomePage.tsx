import React from 'react';
import {View, StyleSheet} from 'react-native';
import Gradient from '../components/Gradient';
import CompImage from '../components/CompImage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import CompText from '../components/CompText';
import CompTouchable from '../components/CompTouchable';
const WelcomePage = () => {
  return (
    <View style={styles.container}>
      <Gradient colors={['#FB658B', '#FE768C', '#FE9487']} />
      <View style={styles.fl1} />
      <View style={[styles.fl3, styles.jcc]}>
        <CompImage
          source={require('../assets/logo.png')}
          imageStyle={{
            marginLeft: wp('5%'),
            height: hp('15%'),
            width: wp('100%'),
            resizeMode: 'stretch',
          }}
        />
      </View>
      <View style={[styles.fl3, {backgroundColor: 'white'}]}>
        <View style={[styles.fl2, styles.jcc, styles.aic]}>
          <CompText
            text={'Welcome'}
            textStyle={{color: '#4c4c4c', fontSize: RFValue(24)}}
          />
        </View>
        <View style={[styles.fl2, styles.aic, styles.jcfs]}>
          <CompText
            textStyle={{
              color: '#999999',
              fontSize: RFValue(11),
              textAlign: 'center',
              marginHorizontal: wp('5%'),
            }}
            text={
              'Follow people around you to see what they are sharing' +
              'and discover accounts that share things similar to your common interest from ' +
              'all around the world'
            }
          />
        </View>
        <View style={[styles.fl2, styles.fdr]}>
          <CompTouchable
            content={
              <CompText
                text={'Sign In'}
                textStyle={[{color: 'white', fontSize: RFValue(15)}]}
              />
            }
            style={[
              styles.jcc,
              styles.aic,
              styles.fl1,
              {
                marginHorizontal: wp('10%'),
                marginVertical: hp('1.1%'),
                backgroundColor: '#FB658B',
                borderRadius: wp('1.5%'),
              },
            ]}
          />
        </View>
        <View style={[styles.fl2]}>
          <CompTouchable
            content={
              <CompText
                text={'Dont have an account? '}
                textStyle={[{color: 'gray', fontSize: RFValue(10)}]}
                underText={'Sign up'}
              />
            }
            style={[
              styles.aic,
              styles.jcfs,
              {
                flex: 1,
                marginHorizontal: wp('20%'),
                marginBottom: hp('7%'),
              },
            ]}
          />
        </View>
      </View>
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
  fl4: {
    flex: 4,
  },
  fl5: {
    flex: 5,
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
  fdr: {
    flexDirection: 'row',
  },
  frc: {
    flexDirection: 'column',
  },
});
export default WelcomePage;

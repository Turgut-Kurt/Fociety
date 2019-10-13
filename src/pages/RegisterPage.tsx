import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Gradient from '../components/Gradient';
import CompInput from '../components/CompInput';
import CompImage from '../components/CompImage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import CompText from '../components/CompText';
import CompTouchable from '../components/CompTouchable';
const RegisterPage = () => {
  return (
    <View style={styles.container}>
      <Gradient colors={['#FB658B', '#FE768C', '#FE9487']} />
      <View style={[styles.fl4, styles.aic, styles.jcc]}>
        <CompText
          textStyle={{color: 'white', fontSize: RFValue(25)}}
          text={'Sign Up'}
        />
      </View>
      <View style={styles.fl2}>
        <CompInput
          placeholder={'Full Name'}
          placeholderTextColor={'#cccccc'}
          TextInputStyle={[
            styles.inputStyle,
            styles.mh,
            styles.mv,
            {color: 'white', fontSize: RFValue(16)},
          ]}
        />
      </View>
      <View style={styles.fl2}>
        <CompInput
          placeholder={'Email'}
          placeholderTextColor={'#cccccc'}
          TextInputStyle={[
            styles.inputStyle,
            styles.mh,
            styles.mv,
            {color: 'white', fontSize: RFValue(16)},
          ]}
        />
      </View>
      <View style={styles.fl2}>
        <CompInput
          secure={true}
          placeholder={'Password'}
          placeholderTextColor={'#cccccc'}
          TextInputStyle={[
            styles.inputStyle,
            styles.mh,
            styles.mv,
            {color: 'white', fontSize: RFValue(16)},
          ]}
        />
      </View>
      <View style={styles.fl2}>
        <CompTouchable
          content={
            <CompText
              text={'Create Your Account'}
              textStyle={[{color: 'white', fontSize: RFValue(15)}]}
            />
          }
          style={[
            styles.jcc,
            styles.aic,
            styles.fl1,
            styles.mv,
            styles.mh,
            {
              backgroundColor: '#45545F',
              borderRadius: wp('1.5%'),
            },
          ]}
        />
      </View>
      <View style={[styles.fl1, styles.fdr]}>
        <CompTouchable
          content={
            <CompText
              text={'By creating an account , you agree to our '}
              underText={'Terms'}
              textStyle={{
                color: 'gray',
                fontSize: RFValue(9),
              }}
            />
          }
          style={[
            styles.jcfs,
            styles.aic,
            styles.fl1,
            {
              marginHorizontal: wp('15%'),
              marginVertical: hp('1.7%'),
            },
          ]}
        />
      </View>
      <View style={[styles.fl1, styles.fdr]}>
        <CompTouchable
          content={
            <CompText
              text={'Already have an account ? '}
              underText={'Sign in'}
              textStyle={{
                color: 'gray',
                fontSize: RFValue(9),
              }}
            />
          }
          style={[
            styles.jcfs,
            styles.aic,
            styles.fl1,
            {
              marginHorizontal: wp('29%'),
              marginVertical: hp('1.7%'),
            },
          ]}
        />
      </View>
      <View style={styles.fl3} />
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
  inputStyle: {
    borderBottomWidth: 1,
    borderColor: '#cccccc',
  },
  mh: {
    marginHorizontal: wp('12%'),
  },
  mv: {
    marginVertical: hp('1.5%'),
  },
  cw: {
    color: 'white',
  },
});
export default RegisterPage;

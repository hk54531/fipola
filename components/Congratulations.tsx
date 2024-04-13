/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Lottie from 'lottie-react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Foundation from 'react-native-vector-icons/Foundation';

interface Iprops {
  navigation?: any;
}
export default class Congratulations extends Component<Iprops> {
  //   componentDidMount() {
  //     setTimeout(() => {
  //       this.props.navigation.navigate('tab');
  //     }, 10000);
  //   }
  render() {
    return (
      <View style={styles.container}>
        <Lottie
          source={{
            uri: 'https://assets4.lottiefiles.com/packages/lf20_qckmbbyi.json',
          }}
          autoPlay
          loop={false}
          speed={0.5}
          onAnimationFinish={() => {
            console.log('Animation Finished');
          }}
        />
        <View
          style={{
            height: responsiveHeight(8),
            width: responsiveWidth(50),
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: responsiveHeight(65),
            // marginLeft: responsiveWidth(25),
          }}>
          <Text
            style={{
              fontSize: responsiveFontSize(2.5),
              fontWeight: '600',
              marginBottom: responsiveHeight(2),
            }}>
            Congratulations
          </Text>
          <Text>Order placed Successfully</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('orderhistory');
          }}
          style={{
            backgroundColor: '#38c172',
            height: responsiveHeight(7),
            width: responsiveWidth(14),
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: responsiveHeight(2.5),
          }}>
          <Foundation name="home" size={30} color="white" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5BF45',
    alignItems: 'center',
  },
});

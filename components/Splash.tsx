import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

interface Iprops {
  navigation?: any;
}

export default class Splash extends Component<Iprops> {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('otpui');
    }, 1500);
  }
  render() {
    return (
      <View style={styles.Container}>
        <Image source={require('../assets/58663991.png')} style={styles.top} />
        <Image source={require('../assets/image.png')} />

        <Image
          source={require('../assets/logo_png1.png')}
          style={styles.middle}
        />
        <Image
          source={require('../assets/raw-pork.png')}
          style={styles.bottom}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#F5BF45',
    height: responsiveHeight(100),
  },
  top: {
    width: responsiveWidth(100),
  },
  middle: {
    position: 'absolute',
    top: responsiveHeight(50),
    left: responsiveWidth(25),
    right: responsiveWidth(25),
  },
  bottom: {
    position: 'absolute',
    top: responsiveHeight(75),
    left: responsiveWidth(1),
    right: responsiveWidth(2),
    width: '100%',
  },
});

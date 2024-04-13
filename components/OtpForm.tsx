import axios from 'axios';
import React, {Component} from 'react';

import {TextInput, TouchableOpacity} from 'react-native';
import {View, Image, StyleSheet, Text, Alert} from 'react-native';

interface Iprops {
  route?: any;
  navigation?: any;
}
interface Istate {
  otp?: any;
  num?: any;
  count: any;
  resendValue: boolean;
  secValue: boolean;
}

export default class OtpForm extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      otp: this.props.route.params.otp.slice(12, 16),
      num: this.props.route.params.num,
      count: 15,
      resendValue: true,
      secValue: false,
    };
  }
  pressHandler = () => {
    const data = JSON.stringify({
      mobileNumber: this.state.num,
    });
    const config = {
      method: 'POST',
      url: 'https://c50e-49-205-114-17.in.ngrok.io/',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };
    axios(config).then(res => {
      this.setState({
        otp: res.data.message.slice(12, 16),
        count: 15,
        resendValue: true,
      });
    });
  };

  submitHandler = () => {
    const data = JSON.stringify({
      mobileNumber: this.state.num,
      otp: Number(this.state.otp),
    });
    const config = {
      method: 'POST',
      url: 'https://c50e-49-205-114-17.in.ngrok.io/otp-verify',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };
    axios(config).then(res => {
      Alert.alert(res.data.message);
      this.props.navigation.navigate('tab');
    });
  };

  componentDidMount() {
    setInterval(() => {
      if (this.state.count === 0) {
        this.setState({resendValue: false, secValue: true});
      } else {
        this.setState({count: this.state.count - 1});
      }
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/email2.png')} style={styles.msgImg} />
        <Text style={styles.textVerifyOtp}>OTP Verification</Text>
        <Text style={styles.enterOtpText}>Enter the otp sent to</Text>
        <Text style={styles.mobtextNum}>+91 {this.state.num}</Text>
        <View style={styles.otpcontainer}>
          <TextInput
            style={styles.inputText}
            value={this.state.otp.slice(0, 1)}
          />
          <TextInput
            style={styles.inputText}
            value={this.state.otp.slice(1, 2)}
          />
          <TextInput
            style={styles.inputText}
            value={this.state.otp.slice(2, 3)}
          />
          <TextInput
            style={styles.inputText}
            value={this.state.otp.slice(3, 4)}
          />
        </View>
        <Text style={styles.didntrecieceotp}>Didn't Recieve OTP</Text>
        <Text
          style={styles.resendTxt}
          disabled={this.state.resendValue}
          onPress={this.pressHandler}>
          Resend
        </Text>
        <Text disabled={this.state.secValue} style={styles.countText}>
          {this.state.count} secs
        </Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText} onPress={this.submitHandler}>
            SUBMIT
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  resendTxt: {
    color: 'red',
    position: 'absolute',
    top: 500,
    left: 230,
  },
  countText: {position: 'absolute', top: 500, left: 290},
  didntrecieceotp: {
    marginTop: 50,
    marginLeft: 100,
  },
  inputText: {
    backgroundColor: 'white',
    borderRadius: 50,
    height: 50,
    width: 50,
    marginRight: 5,
    textAlign: 'center',
  },
  buttonContainer: {
    backgroundColor: '#F62B2A',
    width: 200,
    padding: 10,
    borderRadius: 50,
    marginTop: 30,
    marginLeft: 110,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
  otpcontainer: {
    marginTop: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  mobtextNum: {
    marginTop: 20,
    marginLeft: 99,
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 3,
  },
  container: {
    backgroundColor: '#F5BF45',
    height: '100%',
    width: '100%',
  },
  msgImg: {
    marginTop: 50,
    marginLeft: 150,
  },
  textVerifyOtp: {
    marginTop: 50,
    marginLeft: 90,
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 3,
  },
  enterOtpText: {
    marginTop: 20,
    marginLeft: 130,
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

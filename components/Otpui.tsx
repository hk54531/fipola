import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {Component} from 'react';
import {TextInput} from 'react-native';
import * as yup from 'yup';
import {Formik} from 'formik';
import axios from 'axios';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const validationSchema = yup.object().shape({
  phone_number: yup
    .string()
    .required('Enter Mobile Number to Continue')
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Enter mobile number',
    )
    .min(10, 'Enter mobile number')
    .max(10, 'Enter mobile number'),
});

interface Istate {
  count: any;
  mobileNumber: any;
  responseForNumber: any;
}
interface IProps {
  navigation?: any;
}

const data = [
  {
    img: 'https://res.cloudinary.com/din12o7z3/image/upload/v1676022528/Ellipse_1_1_pehmda.png',
    imgBack: '../assets/carousel/Ellipse3.png',
    name: '90 min Delivery',
    info: 'It is a long established fact that a reader will be distracted',
  },
  {
    img: 'https://res.cloudinary.com/din12o7z3/image/upload/v1676022986/img111_io7rqz.png',
    imgBack: '../assets/carousel/Ellipse3.png',
    name: 'Antibiotic free',
    info: 'It is a long established fact that a reader will be distracted',
  },
  {
    img: 'https://res.cloudinary.com/din12o7z3/image/upload/v1676027438/ssss_wyzyry.png',
    imgBack: '../assets/carousel/Ellipse3.png',
    name: 'halal certified',
    info: 'It is a long established fact that a reader will be distracted',
  },
];

export class Otpui extends Component<IProps, Istate> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      count: 0,
      mobileNumber: '',
      responseForNumber: '',
    };
  }
  componentDidMount() {
    setInterval(() => {
      if (this.state.count < 2) {
        this.setState({count: this.state.count + 1});
      } else {
        this.setState({count: 0});
      }
    }, 5000);
  }
  render() {
    return (
      <View>
        <View style={style.carContainer}>
          <Image
            source={require('../assets/carousel/Ellipse3.png')}
            style={style.bckIMage}
          />
          <Image
            source={{uri: data[this.state.count].img}}
            style={style.Imageee}
          />
          <Text style={style.name}>{data[this.state.count].name}</Text>
          <Text style={style.info}>{data[this.state.count].info}</Text>
        </View>

        <Formik
          initialValues={{phone_number: ''}}
          onSubmit={(values, actions) => {
            actions.resetForm();
            this.setState({mobileNumber: values.phone_number});
            console.log(this.state.mobileNumber);
            const data = JSON.stringify({
              mobileNumber: this.state.mobileNumber,
            });
            const config = {
              method: 'POST',
              url: 'https://c50e-49-205-114-17.in.ngrok.io/',
              headers: {
                'Content-Type': 'application/json',
              },
              data: data,
            };
            axios(config)
              // .then(res => console.log(res.data.message))
              .then((res: any) => {
                this.setState({responseForNumber: res.data.message});
                Alert.alert(this.state.responseForNumber);
                if (res.data.message === 'Mobile number already exists') {
                  this.props.navigation.navigate('otpform', {
                    otp: res.data.message,
                    num: this.state.mobileNumber,
                  });
                } else {
                  this.props.navigation.navigate('otpform', {
                    otp: res.data.message,
                    num: this.state.mobileNumber,
                  });
                }
              });
          }}
          validationSchema={validationSchema}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={style.container2}>
              <Text style={style.textLogin}> Login & Register</Text>
              <TextInput
                placeholder="Mobile Number"
                onChangeText={handleChange('phone_number')}
                onBlur={handleBlur('phone_number')}
                value={values.phone_number}
                style={style.input}
              />
              {errors.phone_number && touched.phone_number && (
                <Text style={{color: '#4960F9', marginLeft: 5, padding: 5}}>
                  {errors.phone_number}
                </Text>
              )}

              <TouchableOpacity style={style.btn}>
                <Text onPress={handleSubmit} style={style.btntxt}>
                  CONTINUE
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    );
  }
}

export default Otpui;

const style = StyleSheet.create({
  carContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bckIMage: {
    height: responsiveHeight(28),
    width: responsiveWidth(55),
    position: 'absolute',
    top: responsiveHeight(5.2),
  },
  Imageee: {
    height: responsiveHeight(26),
    width: responsiveWidth(51),
    marginTop: responsiveHeight(6),
  },
  name: {
    fontSize: responsiveFontSize(3),
    marginTop: responsiveHeight(4),
    marginBottom: responsiveHeight(2),
    fontWeight: '500',
  },
  info: {
    fontSize: responsiveFontSize(2.5),
    width: responsiveWidth(75),
    fontWeight: '400',
  },
  btn: {
    backgroundColor: '#F62B2A',
    margin: responsiveHeight(2),
    width: responsiveWidth(30),
    borderRadius: 50,
  },
  btntxt: {
    color: 'white',
    padding: responsiveHeight(1),
    textAlign: 'center',
  },
  textLogin: {
    margin: responsiveHeight(5),
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
  },
  container2: {
    marginTop: responsiveHeight(18),
    height: responsiveHeight(50),
    backgroundColor: '#F5BF45',
    alignItems: 'center',
  },
  input: {
    height: responsiveHeight(5),
    width: responsiveWidth(70),
    borderWidth: 1,
    borderRadius: 50,
    paddingLeft: responsiveWidth(5),
    padding: responsiveWidth(2),
    backgroundColor: 'white',
  },
});

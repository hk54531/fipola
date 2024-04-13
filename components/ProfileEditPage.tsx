/* eslint-disable react-native/no-inline-styles */
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import {TextInput} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import * as yup from 'yup';
import {Formik} from 'formik';

interface IProps {
  navigation?: any;
}

const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9\s\-\/.]+$/, 'Please enter valid name')
    .min(4)
    .max(15)
    .required(),
  lastName: yup
    .string()
    .matches(/^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9\s\-\/.]+$/, 'Please enter valid name')
    .min(4)
    .max(15)
    .required(),
  phoneNumber: yup
    .string()
    .min(10)
    .max(10)
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Phone number is not valid',
    )
    .required(),
  email: yup.string().email().required(),
});

export default class ProfileEditPage extends Component<IProps> {
  // openCamera = () => {
  //   let options = {};
  // };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <TouchableOpacity>
            <Feather
              name="arrow-left"
              size={30}
              color={'black'}
              style={{marginTop: 20, marginLeft: 20}}
              onPress={() => this.props.navigation.navigate('tab')}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: responsiveFontSize(3),
              marginTop: 20,
              marginLeft: responsiveWidth(28),
              fontWeight: '500',
              letterSpacing: 1,
            }}>
            Profile
          </Text>
          <Image
            source={require('../assets/profilepic.png')}
            style={styles.profilepicImg}
          />
          <TouchableOpacity
            style={{
              height: responsiveHeight(6),
              width: responsiveWidth(12),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 60,
              marginTop: responsiveHeight(12),
              marginLeft: responsiveWidth(-14),
              backgroundColor: '#F62B2A',
            }}>
            <FontAwesome5 name="pen" size={17} color="white" />
          </TouchableOpacity>
        </View>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
          }}
          onSubmit={(values, actions) => {
            actions.resetForm();
            console.log(values);
            this.props.navigation.navigate('tab');
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
            <View>
              <TextInput
                mode="outlined"
                label="First Name"
                placeholder="john"
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                value={values.firstName}
                style={{
                  width: responsiveWidth(70),
                  marginTop: responsiveHeight(15),
                  marginLeft: responsiveWidth(15),
                }}
              />
              {errors.firstName && touched.firstName && (
                <Text
                  style={{
                    color: '#F62B2A',
                    marginLeft: responsiveWidth(15),
                    padding: 5,
                  }}>
                  {errors.firstName}
                </Text>
              )}

              <TextInput
                mode="outlined"
                label="Last Name"
                placeholder="Smith"
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                value={values.lastName}
                style={{
                  width: responsiveWidth(70),
                  marginTop: responsiveHeight(2),
                  marginLeft: responsiveWidth(15),
                }}
              />
              {errors.lastName && touched.lastName && (
                <Text
                  style={{
                    color: '#F62B2A',
                    marginLeft: responsiveWidth(15),
                    padding: 5,
                  }}>
                  {errors.lastName}
                </Text>
              )}
              <TextInput
                mode="outlined"
                label="Phone"
                placeholder="9876543210"
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
                value={values.phoneNumber}
                style={{
                  width: responsiveWidth(70),
                  marginTop: responsiveHeight(2),
                  marginLeft: responsiveWidth(15),
                }}
              />
              {errors.phoneNumber && touched.phoneNumber && (
                <Text
                  style={{
                    color: '#F62B2A',
                    marginLeft: responsiveWidth(15),
                    padding: 5,
                  }}>
                  {errors.phoneNumber}
                </Text>
              )}
              <TextInput
                mode="outlined"
                label="Email"
                placeholder="johnSmith@gmail.com"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={{
                  width: responsiveWidth(70),
                  marginTop: responsiveHeight(2),
                  marginLeft: responsiveWidth(15),
                }}
              />
              {errors.email && touched.email && (
                <Text
                  style={{
                    color: '#F62B2A',
                    marginLeft: responsiveWidth(15),
                    padding: 5,
                  }}>
                  {errors.email}
                </Text>
              )}

              <TouchableOpacity
                style={{
                  backgroundColor: '#F62B2A',
                  height: responsiveHeight(6),
                  width: responsiveWidth(50),
                  borderRadius: 50,
                  marginTop: responsiveHeight(3),
                  marginLeft: responsiveWidth(25),
                }}>
                <Text
                  onPress={handleSubmit}
                  style={{
                    color: 'white',
                    fontWeight: '400',
                    fontSize: responsiveScreenFontSize(2),
                    textAlign: 'center',
                    marginTop: responsiveHeight(1.5),
                  }}>
                  SUBMIT
                </Text>
              </TouchableOpacity>

              {/* <TextInput
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
              </TouchableOpacity> */}
            </View>
          )}
        </Formik>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profilepicImg: {
    marginTop: responsiveHeight(12),
    marginLeft: responsiveWidth(-35),
  },
  profileContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5BF45',
    height: responsiveHeight(25),
  },
  container: {
    height: responsiveHeight(100),
    width: responsiveWidth(100),
  },
});

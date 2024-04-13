import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Yup from 'yup';

import {Formik} from 'formik';
import axios from 'axios';

const validationSchema = Yup.object().shape({
  postal_code: Yup.string()
    .length(6)
    .matches(/^[0-9]{5}/)
    .required()
    .label('postal code'),
});

interface Istate {
  pincode: any;
}
interface Iprops {
  navigation?: any;
}

export default class Location extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      pincode: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <Text style={styles.deliveryLocation}>Delivery Location</Text>
          <Text style={styles.descTxt}>
            serviceable locations : Bengaluru I Chennai I Coimbatore I Hyderabad
            Puducherry I Turpur I vellore
          </Text>

          <Formik
            initialValues={{postal_code: ''}}
            onSubmit={(values, actions) => {
              actions.resetForm();
              const pincode = Number(values.postal_code);
              console.log(typeof pincode);

              axios
                .get(`https://api.postalpincode.in/pincode/${pincode}`)
                .then(res => {
                  console.log(res.data[0].PostOffice[0].Name);
                  this.setState({pincode: res.data[0].PostOffice[0].Name});
                });
            }}
            validationSchema={validationSchema}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              // errors,
              // touched,
            }) => (
              <View style={styles.inputContainerinLocation}>
                <Ionicons
                  name="location-sharp"
                  color="#F62B2A"
                  size={30}
                  style={styles.locationButton}
                />
                <TextInput
                  placeholder="Enter Pin Code"
                  onChangeText={handleChange('postal_code')}
                  onBlur={handleBlur('postal_code')}
                  value={values.postal_code}
                  style={styles.inptTxt}
                />

                <TouchableOpacity>
                  <Ionicons
                    name="arrow-forward-circle-sharp"
                    color="#F62B2A"
                    size={50}
                    style={styles.arrowButton}
                    onPress={handleSubmit}
                  />
                </TouchableOpacity>
              </View>
            )}
          </Formik>

          <Ionicons
            name="close"
            color="black"
            size={30}
            style={styles.closeButton}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainerinLocation: {
    margin: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 50,
    width: responsiveWidth(80),
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 25,
  },
  locationButton: {},
  arrowButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inptTxt: {
    width: responsiveScreenWidth(50),
    paddingLeft: responsiveWidth(40),
  },
  descTxt: {
    width: 300,
    fontSize: responsiveScreenFontSize(1.8),
    marginTop: 25,
    marginLeft: 50,
  },
  deliveryLocation: {
    fontSize: responsiveScreenFontSize(3),
    textAlign: 'center',
    paddingTop: 20,
  },
  container2: {
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    marginTop: 560,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  backImg: {
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
  },
  container: {
    justifyContent: 'center',
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    alignItems: 'center',
  },
  sampleText: {
    fontSize: responsiveScreenFontSize(2),
  },
});

/*
 {errors.postal_code && touched.postal_code && (
                    <Text
                      style={{
                        color: 'red',
                        marginLeft: 5,
                        padding: 5,
                      }}>
                      {errors.postal_code}
                    </Text>
                  )}
*/

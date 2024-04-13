/* eslint-disable react-native/no-inline-styles */
// /* eslint-disable react-native/no-inline-styles */

// /* eslint-disable react-native/no-inline-styles */
// import {
//   PermissionsAndroid,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, {Component} from 'react';
// import {
//   responsiveFontSize,
//   responsiveHeight,
//   responsiveWidth,
// } from 'react-native-responsive-dimensions';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Geolocation from 'react-native-geolocation-service';
// import MapView, {Marker} from 'react-native-maps';
// import Geocoder from 'react-native-geocoding';
// import MyContext from './ContextAPI/Context';
// import {Formik} from 'formik';
// import * as yup from 'yup';

// interface Istate {
//   location: any;
//   address: any;
//   texts: any;
// }
// interface Iprops {
//   navigation: any;
// }

// Geocoder.init('AIzaSyCVa5-vHiqebRa3saaTYMnN436o9W8PP8U');

// const validationSchema = yup.object().shape({
//   name: yup
//     .string()
//     .matches(/^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9\s\-\/.]+$/, 'Please enter valid name')
//     .min(4)
//     .max(15)
//     .required(),
//   address: yup
//     .string()
//     .matches(/^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9\s\-\/.]+$/, 'Please enter valid name')
//     .required(),
//   pincode: yup
//     .string()
//     .min(6)
//     .max(6)
//     .matches(
//       /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
//       'Phone number is not valid',
//     )
//     .required(),
//   email: yup.string().email().required(),
// });

// const requestLocationPermission = async () => {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//       {
//         title: 'Geolocation Permission',
//         message: 'Can we access your location?',
//         buttonNeutral: 'Ask Me Later',
//         buttonNegative: 'Cancel',
//         buttonPositive: 'OK',
//       },
//     );
//     console.log('granted', granted);
//     if (granted === 'granted') {
//       console.log('You can use Geolocation');
//       return true;
//     } else {
//       console.log('You cannot use Geolocation');
//       return false;
//     }
//   } catch (err) {
//     return false;
//   }
// };

// // if (this.state.texts.buildingNo.length <= 0) {
// // }

// export default class AddNewAddress extends Component<Iprops, Istate> {
//   constructor(props: Iprops) {
//     super(props);
//     this.state = {
//       address: [],
//       texts: {
//         buildingNo: '',
//         city: '',
//         pincode: '',
//       },
//       location: {
//         latitude: 17.4507619,
//         longitude: 78.3914938,
//         latitudeDelta: 0.01,
//         longitudeDelta: 0.01,
//       },
//     };
//   }
//   // add data

//   myApiKey = 'AIzaSyCVa5-vHiqebRa3saaTYMnN436o9W8PP8U';

//   getLocation = () => {
//     const result = requestLocationPermission();
//     result.then(res => {
//       console.log('res is:', res);
//       if (res) {
//         Geolocation.getCurrentPosition(
//           position => {
//             console.log(position);
//             this.setState({
//               location: {
//                 latitude: position?.coords?.latitude,
//                 longitude: position?.coords?.longitude,
//                 latitudeDelta: 0.01,
//                 longitudeDelta: 0.01,
//               },
//             });
//           },
//           error => {
//             // See error code charts below.
//             console.log(error.code, error.message);
//             this.setState({location: false});
//             // setLocation(false);
//           },
//           {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
//         );
//       }
//     });
//   };

//   getAddress = () => {
//     Geocoder.from(41.89, 12.49)
//       .then(json => {
//         var addressComponent = json.results[0].address_components[0];
//         console.log(addressComponent);
//       })
//       .catch(error => console.warn(error));
//   };

//   // changeHandler = (name: any, value: any) => {
//   //   this.setState({texts: {...this.state.texts, [name]: value}});
//   //   // console.log(this.state.texts);
//   // };

//   changeHandler = (name: any, value: any, setFieldValue: any, values: any) => {
//     setFieldValue(name, value);
//     this.setState({texts: {...values, [name]: value}});
//   };

//   componentDidMount() {
//     this.getLocation();
//   }

//   tokyoRegion = {
//     latitude: 17.4507619,
//     longitude: 78.3914938,
//     latitudeDelta: 0.01,
//     longitudeDelta: 0.01,
//   };

//   render() {
//     // console.log('coords', this.state.location);

//     return (
//       <MyContext.Consumer>
//         {context => (
//           <View
//             style={{
//               height: responsiveHeight(100),
//               width: responsiveWidth(100),
//               backgroundColor: 'white',
//             }}>
//             <View style={styles.TitleContainer}>
//               <TouchableOpacity
//                 onPress={() => this.props.navigation.navigate('tab')}>
//                 <Ionicons
//                   name="arrow-back"
//                   size={30}
//                   color={'black'}
//                   style={{marginLeft: responsiveWidth(5)}}
//                 />
//               </TouchableOpacity>
//               <Text style={styles.ourCategory}>Add New Address</Text>
//             </View>
//             <View>
//               {/* <Button title="click" onPress={() => this.getLocation()} /> */}
//               <View>
//                 <MapView
//                   style={{
//                     height: responsiveHeight(37),
//                     width: responsiveWidth(100),
//                   }}
//                   showsUserLocation={true}
//                   showsMyLocationButton={true}
//                   //specify our coordinates.
//                   initialRegion={this.state.location}>
//                   <Marker coordinate={this.state.location} />
//                 </MapView>
//               </View>
//               <Formik
//                 initialValues={{
//                   name: '',
//                   address: '',
//                   pincode: '',
//                 }}
//                 onSubmit={(values, actions) => {
//                   actions.resetForm();
//                   console.log(values);
//                   this.props.navigation.navigate('addresslistpage');
//                   console.log(this.state.texts);
//                   context.addAddresses(this.state.texts);
//                   this.setState({
//                     texts: {buildingNo: '', city: '', pincode: ''},
//                   });
//                 }}
//                 validationSchema={validationSchema}
//                 handleChange={this.changeHandler()}>
//                 {({
//                   handleChange,
//                   handleBlur,
//                   handleSubmit,
//                   setFieldValue,
//                   values,
//                   errors,
//                   touched,
//                 }) => (
//                   <View>
//                     <View style={styles.labelContainer}>
//                       <Text>Receiver Name</Text>
//                     </View>
//                     <View>
//                       <TextInput
//                         // onChangeText={value =>
//                         //   this.changeHandler('buildingNo', value)
//                         // }
//                         onBlur={handleBlur('name')}
//                         onChangeText={value =>
//                           this.changeHandler(
//                             'name',
//                             value,
//                             setFieldValue,
//                             values,
//                           )
//                         }
//                         value={values.name}
//                         // value={this.state.texts.buildingNo}
//                         placeholder="ex : john"
//                         style={{
//                           borderWidth: 1,
//                           marginTop: responsiveHeight(5),
//                           width: responsiveWidth(80),
//                           borderRadius: 50,
//                           paddingLeft: responsiveWidth(5),
//                           marginLeft: responsiveWidth(10),
//                           zIndex: 0,
//                         }}
//                       />
//                       {errors.name && touched.name && (
//                         <Text
//                           style={{
//                             color: '#F62B2A',
//                             marginLeft: responsiveWidth(15),
//                             padding: 5,
//                           }}>
//                           {errors.name}
//                         </Text>
//                       )}
//                     </View>
//                     <View style={styles.labelContainer2}>
//                       <Text>Flat no, Street Address ,City</Text>
//                     </View>
//                     <View>
//                       <TextInput
//                         // onChangeText={value =>
//                         //   this.changeHandler('city', value)
//                         // }
//                         placeholder="Vizag"
//                         onChangeText={value =>
//                           this.changeHandler(
//                             'address',
//                             value,
//                             setFieldValue,
//                             values,
//                           )
//                         }
//                         value={values.address}
//                         onBlur={handleBlur('city')}
//                         // value={this.state.texts.city}
//                         style={{
//                           borderWidth: 1,
//                           marginTop: responsiveHeight(5),
//                           width: responsiveWidth(80),
//                           borderRadius: 50,
//                           paddingLeft: responsiveWidth(5),
//                           marginLeft: responsiveWidth(10),
//                           zIndex: 0,
//                         }}
//                       />
//                       {errors.address && touched.address && (
//                         <Text
//                           style={{
//                             color: '#F62B2A',
//                             marginLeft: responsiveWidth(15),
//                             padding: 5,
//                           }}>
//                           {errors.address}
//                         </Text>
//                       )}
//                     </View>
//                     <View style={styles.labelContainer3}>
//                       <Text>Pincode</Text>
//                     </View>
//                     <View>
//                       <TextInput
//                         placeholder="530041"
//                         // onChangeText={value =>
//                         //   this.changeHandler('pincode', value)
//                         // }
//                         onBlur={handleBlur('pincode')}
//                         onChangeText={value =>
//                           this.changeHandler(
//                             'pincode',
//                             value,
//                             setFieldValue,
//                             values,
//                           )
//                         }
//                         value={values.pincode}
//                         // value={this.state.texts.pincode}
//                         style={{
//                           borderWidth: 1,
//                           marginTop: responsiveHeight(5),
//                           width: responsiveWidth(80),
//                           borderRadius: 50,
//                           paddingLeft: responsiveWidth(5),
//                           marginLeft: responsiveWidth(10),
//                           zIndex: 0,
//                         }}
//                       />
//                       {errors.pincode && touched.pincode && (
//                         <Text
//                           style={{
//                             color: '#F62B2A',
//                             marginLeft: responsiveWidth(15),
//                             padding: 5,
//                           }}>
//                           {errors.pincode}
//                         </Text>
//                       )}
//                     </View>
//                     <TouchableOpacity
//                       onPress={handleSubmit}
//                       style={{
//                         backgroundColor: 'red',
//                         marginTop: responsiveHeight(3),
//                         marginLeft: responsiveWidth(20),
//                         height: responsiveHeight(7),
//                         borderRadius: 50,
//                         width: responsiveWidth(60),
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                       }}>
//                       <Text
//                         style={{
//                           color: 'white',
//                           fontSize: responsiveFontSize(2),
//                           fontWeight: '500',
//                           letterSpacing: 1,
//                         }}>
//                         Add New
//                       </Text>
//                     </TouchableOpacity>
//                   </View>
//                 )}
//               </Formik>
//             </View>
//           </View>
//         )}
//       </MyContext.Consumer>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   ourCategory: {
//     marginLeft: responsiveWidth(18),
//     fontSize: responsiveFontSize(2.5),
//     fontWeight: '500',
//     letterSpacing: 1,
//     color: 'black',
//   },
//   TitleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     height: responsiveHeight(10),
//     width: responsiveWidth(100),
//     backgroundColor: '#F5BF45',
//   },
//   labelContainer3: {
//     backgroundColor: 'white', // Same color as background
//     alignSelf: 'flex-start', // Have View be same width as Text inside
//     paddingHorizontal: 3, // Amount of spacing between border and first/last letter
//     marginStart: 10, // How far right do you want the label to start
//     zIndex: 1, // Label must overlap border
//     elevation: 1, // Needed for android
//     shadowColor: 'white', // Same as background color because elevation: 1 creates a shadow that we don't want
//     position: 'absolute', // Needed to be able to precisely overlap label with border
//     top: responsiveHeight(26.5), // Vertical position of label. Eyeball it to see where label intersects border.
//     left: responsiveWidth(13),
//   },
//   labelContainer2: {
//     backgroundColor: 'white', // Same color as background
//     alignSelf: 'flex-start', // Have View be same width as Text inside
//     paddingHorizontal: 3, // Amount of spacing between border and first/last letter
//     marginStart: 10, // How far right do you want the label to start
//     zIndex: 1, // Label must overlap border
//     elevation: 1, // Needed for android
//     shadowColor: 'white', // Same as background color because elevation: 1 creates a shadow that we don't want
//     position: 'absolute', // Needed to be able to precisely overlap label with border
//     top: responsiveHeight(15), // Vertical position of label. Eyeball it to see where label intersects border.
//     left: responsiveWidth(13),
//   },
//   labelContainer: {
//     backgroundColor: 'white', // Same color as background
//     alignSelf: 'flex-start', // Have View be same width as Text inside
//     paddingHorizontal: 3, // Amount of spacing between border and first/last letter
//     marginStart: 10, // How far right do you want the label to start
//     zIndex: 1, // Label must overlap border
//     elevation: 1, // Needed for android
//     shadowColor: 'white', // Same as background color because elevation: 1 creates a shadow that we don't want
//     position: 'absolute', // Needed to be able to precisely overlap label with border
//     top: responsiveHeight(3), // Vertical position of label. Eyeball it to see where label intersects border.
//     left: responsiveWidth(13),
//   },
// });

import {
  PermissionsAndroid,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Geolocation from 'react-native-geolocation-service';
import MapView, {Marker} from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import MyContext from './ContextAPI/Context';

interface Istate {
  location: any;
  address: any;
  texts: any;
  buildNoerr: any;
  cityerr: any;
  pincodeerr: any;
}
interface Iprops {
  navigation: any;
}

Geocoder.init('AIzaSyCVa5-vHiqebRa3saaTYMnN436o9W8PP8U');

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    console.log('granted', granted);
    if (granted === 'granted') {
      console.log('You can use Geolocation');
      return true;
    } else {
      console.log('You cannot use Geolocation');
      return false;
    }
  } catch (err) {
    return false;
  }
};

// if (this.state.texts.buildingNo.length <= 0) {
// }

export default class AddNewAddress extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      address: [],
      texts: {
        buildingNo: '',
        city: '',
        pincode: '',
      },
      buildNoerr: '',
      cityerr: '',
      pincodeerr: '',
      location: {
        latitude: 17.4507619,
        longitude: 78.3914938,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      },
    };
  }
  // add data

  myApiKey = 'AIzaSyCVa5-vHiqebRa3saaTYMnN436o9W8PP8U';

  getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
            this.setState({
              location: {
                latitude: position?.coords?.latitude,
                longitude: position?.coords?.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              },
            });
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
            this.setState({location: false});
            // setLocation(false);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
  };

  getAddress = () => {
    Geocoder.from(41.89, 12.49)
      .then(json => {
        var addressComponent = json.results[0].address_components[0];
        console.log(addressComponent);
      })
      .catch(error => console.warn(error));
  };

  changeHandler = (name: any, value: any) => {
    this.setState({texts: {...this.state.texts, [name]: value}});
    // console.log(this.state.texts);
  };

  componentDidMount() {
    this.getLocation();
  }

  tokyoRegion = {
    latitude: 17.4507619,
    longitude: 78.3914938,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  render() {
    // console.log('coords', this.state.location);
    console.log(this.state.texts.buildingNo.length);
    console.log(this.state.buildNoerr);
    console.log(this.state.cityerr);
    console.log(this.state.pincodeerr);

    return (
      <MyContext.Consumer>
        {context => (
          <View
            style={{
              height: responsiveHeight(100),
              width: responsiveWidth(100),
              backgroundColor: 'white',
            }}>
            <View style={styles.TitleContainer}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('tab')}>
                <Ionicons
                  name="arrow-back"
                  size={30}
                  color={'black'}
                  style={{marginLeft: responsiveWidth(5)}}
                />
              </TouchableOpacity>
              <Text style={styles.ourCategory}>Add New Address</Text>
            </View>
            <View>
              {/* <Button title="click" onPress={() => this.getLocation()} /> */}
              <View>
                <MapView
                  style={{
                    height: responsiveHeight(37),
                    width: responsiveWidth(100),
                  }}
                  showsUserLocation={true}
                  showsMyLocationButton={true}
                  //specify our coordinates.
                  initialRegion={this.state.location}>
                  <Marker coordinate={this.state.location} />
                </MapView>
              </View>
              <View>
                <View style={styles.labelContainer}>
                  <Text>Receiver Name</Text>
                </View>
                <View>
                  <TextInput
                    onChangeText={value =>
                      this.changeHandler('buildingNo', value)
                    }
                    value={this.state.texts.buildingNo}
                    placeholder="ex : john"
                    style={{
                      borderWidth: 1,
                      marginTop: responsiveHeight(4.5),
                      width: responsiveWidth(80),
                      borderRadius: 50,
                      paddingLeft: responsiveWidth(5),
                      marginLeft: responsiveWidth(10),
                      zIndex: 0,
                    }}
                  />
                  {/* {this.state.buildNoerr && (
                    <Text
                      style={{color: 'red', marginLeft: responsiveWidth(15)}}>
                      {this.state.buildNoerr}
                    </Text>
                  )} */}
                </View>
                <View style={styles.labelContainer2}>
                  <Text>Flat no, Street Address ,City</Text>
                </View>
                <View>
                  <TextInput
                    onChangeText={value => this.changeHandler('city', value)}
                    placeholder="Vizag"
                    value={this.state.texts.city}
                    style={{
                      borderWidth: 1,
                      marginTop: responsiveHeight(5),
                      width: responsiveWidth(80),
                      borderRadius: 50,
                      paddingLeft: responsiveWidth(5),
                      marginLeft: responsiveWidth(10),
                      zIndex: 0,
                    }}
                  />
                  {/* {this.state.cityerr && (
                    <Text
                      style={{color: 'red', marginLeft: responsiveWidth(15)}}>
                      {this.state.cityerr}
                    </Text>
                  )} */}
                </View>
                <View style={styles.labelContainer3}>
                  <Text>Pincode</Text>
                </View>
                <View>
                  <TextInput
                    keyboardType="numeric"
                    maxLength={6}
                    placeholder="530041"
                    onChangeText={value => this.changeHandler('pincode', value)}
                    value={this.state.texts.pincode}
                    style={{
                      borderWidth: 1,
                      marginTop: responsiveHeight(5),
                      width: responsiveWidth(80),
                      borderRadius: 50,
                      paddingLeft: responsiveWidth(5),
                      marginLeft: responsiveWidth(10),
                      zIndex: 0,
                    }}
                  />
                  {/* {this.state.pincodeerr && (
                    <Text
                      style={{color: 'red', marginLeft: responsiveWidth(15)}}>
                      {this.state.pincodeerr}
                    </Text>
                  )} */}
                </View>
                <TouchableOpacity
                  // onPress={() => this.getAddress()}
                  onPress={() => {
                    // this.submitHandler();
                    // this.props.navigation.navigate('addresslistpage');
                    console.log(this.state.texts);
                    context.addAddresses(this.state.texts);
                    this.setState({
                      texts: {buildingNo: '', city: '', pincode: ''},
                    });

                    if (this.state.texts.buildingNo.length <= 4) {
                      // this.props.navigation.navigate('addresslistpage');
                      this.setState({
                        buildNoerr: 'Name should contain atleast 5 chars',
                      });
                    } else if (this.state.texts.city.length <= 4) {
                      // this.props.navigation.navigate('addresslistpage');
                      this.setState({
                        cityerr: 'address*',
                      });
                    } else if (this.state.texts.pincode.length <= 4) {
                      // this.props.navigation.navigate('addresslistpage');
                      this.setState({
                        pincodeerr: 'pincode*',
                      });
                    } else {
                      this.props.navigation.navigate('addresslistpage');
                    }
                  }}
                  style={{
                    backgroundColor: 'red',
                    marginTop: responsiveHeight(3),
                    marginLeft: responsiveWidth(20),
                    height: responsiveHeight(7),
                    borderRadius: 50,
                    width: responsiveWidth(60),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: responsiveFontSize(2),
                      fontWeight: '500',
                      letterSpacing: 1,
                    }}>
                    Add New
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </MyContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  ourCategory: {
    marginLeft: responsiveWidth(18),
    fontSize: responsiveFontSize(2.5),
    fontWeight: '500',
    letterSpacing: 1,
    color: 'black',
  },
  TitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: responsiveHeight(10),
    width: responsiveWidth(100),
    backgroundColor: '#F5BF45',
  },
  labelContainer3: {
    backgroundColor: 'white', // Same color as background
    alignSelf: 'flex-start', // Have View be same width as Text inside
    paddingHorizontal: 3, // Amount of spacing between border and first/last letter
    marginStart: 10, // How far right do you want the label to start
    zIndex: 1, // Label must overlap border
    elevation: 1, // Needed for android
    shadowColor: 'white', // Same as background color because elevation: 1 creates a shadow that we don't want
    position: 'absolute', // Needed to be able to precisely overlap label with border
    top: responsiveHeight(27), // Vertical position of label. Eyeball it to see where label intersects border.
    left: responsiveWidth(13),
  },
  labelContainer2: {
    backgroundColor: 'white', // Same color as background
    alignSelf: 'flex-start', // Have View be same width as Text inside
    paddingHorizontal: 3, // Amount of spacing between border and first/last letter
    marginStart: 10, // How far right do you want the label to start
    zIndex: 1, // Label must overlap border
    elevation: 1, // Needed for android
    shadowColor: 'white', // Same as background color because elevation: 1 creates a shadow that we don't want
    position: 'absolute', // Needed to be able to precisely overlap label with border
    top: responsiveHeight(15), // Vertical position of label. Eyeball it to see where label intersects border.
    left: responsiveWidth(13),
  },
  labelContainer: {
    backgroundColor: 'white', // Same color as background
    alignSelf: 'flex-start', // Have View be same width as Text inside
    paddingHorizontal: 3, // Amount of spacing between border and first/last letter
    marginStart: 10, // How far right do you want the label to start
    zIndex: 1, // Label must overlap border
    elevation: 1, // Needed for android
    shadowColor: 'white', // Same as background color because elevation: 1 creates a shadow that we don't want
    position: 'absolute', // Needed to be able to precisely overlap label with border
    top: responsiveHeight(3), // Vertical position of label. Eyeball it to see where label intersects border.
    left: responsiveWidth(13),
  },
});

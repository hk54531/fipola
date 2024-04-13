/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */

/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MyContext from './ContextAPI/Context';

interface Iprops {
  navigation?: any;
}

const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const date = new Date().toDateString().slice(3, 15);
const day = weekday[new Date().getDay()];

console.log(day, date);

const time = new Date().toLocaleString('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
});
console.log(time);

export class OrderHistory extends Component<Iprops> {
  render() {
    return (
      <MyContext.Consumer>
        {value => (
          <View
            style={{
              height: responsiveHeight(100),
              width: responsiveWidth(100),
            }}>
            <View style={styles.TitleContainer}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Home')}>
                <Ionicons
                  name="arrow-back"
                  size={30}
                  color={'black'}
                  style={{marginLeft: responsiveWidth(3)}}
                />
              </TouchableOpacity>
              <Text style={styles.ourCategory}>Order History</Text>
            </View>
            <ScrollView>
              <View>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2),
                    fontWeight: '600',
                    letterSpacing: 0.5,
                    textAlign: 'center',
                    marginTop: responsiveHeight(2),
                  }}>
                  Thursday, 30 Dec 2022
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    height: responsiveHeight(15),
                    width: responsiveWidth(80),
                    marginLeft: responsiveWidth(10),
                    marginTop: responsiveHeight(3),
                    flexDirection: 'row',
                    borderRadius: 20,
                  }}>
                  <View>
                    <View
                      style={{
                        alignItems: 'flex-start',
                        marginLeft: responsiveWidth(5),
                        marginTop: responsiveHeight(2.5),
                      }}>
                      <Text
                        style={{
                          fontSize: responsiveFontSize(2),
                          fontWeight: '600',
                        }}>
                        Order# ORD00001
                      </Text>
                      <Text
                        style={{
                          marginTop: responsiveHeight(1),
                          marginBottom: responsiveHeight(1),
                          color: 'red',
                        }}>
                        ₹ 199.00
                      </Text>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <MaterialCommunityIcons
                          name="clock-time-four"
                          size={20}
                          color="grey"
                        />
                        <Text style={{marginLeft: responsiveWidth(2)}}>
                          03:25 pm
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../assets/orderHistory/Ellipse4.png')}
                      style={{
                        position: 'absolute',
                        top: responsiveHeight(6),
                        left: responsiveWidth(24),
                      }}
                    />
                    <Image
                      source={require('../assets/orderHistory/Ellipse5.png')}
                      style={{
                        position: 'absolute',
                        top: responsiveHeight(6),
                        left: responsiveWidth(14),
                      }}
                    />
                    <Image
                      source={require('../assets/orderHistory/Ellipse6.png')}
                      style={{
                        position: 'absolute',
                        top: responsiveHeight(6),
                        left: responsiveWidth(4),
                      }}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: '#C4C4C4',
                  height: responsiveHeight(3),
                  width: responsiveWidth(100),
                  marginTop: responsiveHeight(5),
                  opacity: 0.2,
                }}></View>

              {value.orders
                ? value.orders.map((item: any, index: number) => (
                    <View
                      style={{marginBottom: responsiveHeight(5)}}
                      key={Math.floor(Math.random() * 100000000) + 1}>
                      <Text
                        style={{
                          fontSize: responsiveFontSize(2),
                          fontWeight: '600',
                          letterSpacing: 0.5,
                          textAlign: 'center',
                          marginTop: responsiveHeight(2),
                          marginBottom: responsiveHeight(2),
                        }}>
                        {day}, {date}
                      </Text>
                      <View
                        // key={Math.floor(Math.random() * 100000000) + 1}
                        style={{marginBottom: responsiveHeight(3)}}>
                        <TouchableOpacity
                          onPress={() => {
                            this.props.navigation.navigate('orderspage', item);
                          }}
                          style={{
                            backgroundColor: 'white',
                            height: responsiveHeight(15),
                            width: responsiveWidth(80),
                            marginLeft: responsiveWidth(10),
                            marginTop: responsiveHeight(0.5),
                            flexDirection: 'row',
                            borderRadius: 20,
                          }}>
                          <View>
                            <View
                              style={{
                                alignItems: 'flex-start',
                                marginLeft: responsiveWidth(5),
                                marginTop: responsiveHeight(2.5),
                              }}>
                              <Text
                                style={{
                                  fontSize: responsiveFontSize(2),
                                  fontWeight: '600',
                                }}>
                                Order# ORD000
                                {Math.floor(Math.random() * 100) + 1}
                              </Text>
                              <Text
                                style={{
                                  marginTop: responsiveHeight(1),
                                  marginBottom: responsiveHeight(1),
                                  color: 'red',
                                }}>
                                ₹{' '}
                                {value.orders[index].reduce(
                                  (accumulator: any, currentValue: any) =>
                                    accumulator +
                                    currentValue.offPrice *
                                      currentValue.quantity,
                                  0,
                                )}
                              </Text>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                }}>
                                <MaterialCommunityIcons
                                  name="clock-time-four"
                                  size={20}
                                  color="grey"
                                />
                                <Text style={{marginLeft: responsiveWidth(2)}}>
                                  {new Date().toLocaleString('en-US', {
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    hour12: true,
                                  })}
                                </Text>
                              </View>
                            </View>
                          </View>
                          <View style={{flexDirection: 'row'}}>
                            <Image
                              source={require('../assets/orderHistory/Ellipse4.png')}
                              style={{
                                position: 'absolute',
                                top: responsiveHeight(6),
                                left: responsiveWidth(24),
                              }}
                            />
                            <Image
                              source={require('../assets/orderHistory/Ellipse5.png')}
                              style={{
                                position: 'absolute',
                                top: responsiveHeight(6),
                                left: responsiveWidth(14),
                              }}
                            />
                            <Image
                              source={require('../assets/orderHistory/Ellipse6.png')}
                              style={{
                                position: 'absolute',
                                top: responsiveHeight(6),
                                left: responsiveWidth(4),
                              }}
                            />
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ))
                : null}
            </ScrollView>
          </View>
        )}
      </MyContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  ourCategory: {
    fontSize: responsiveFontSize(3),
    fontWeight: '500',
    letterSpacing: 1,
    marginLeft: responsiveWidth(20),
    color: 'black',
  },
  TitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: responsiveHeight(10),
    width: responsiveWidth(100),
    backgroundColor: '#F5BF45',
  },
});

export default OrderHistory;

// import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React, {Component} from 'react';
// import {
//   responsiveFontSize,
//   responsiveHeight,
//   responsiveWidth,
// } from 'react-native-responsive-dimensions';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// interface Iprops {
//   navigation?: any;
// }

// const weekday = [
//   'Sunday',
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
// ];
// const date = new Date().toDateString().slice(3, 15);
// const day = weekday[new Date().getDay()];

// console.log(day, date);

// export class OrderHistory extends Component<Iprops> {
//   render() {
//     return (
//       <View
//         style={{
//           height: responsiveHeight(100),
//           width: responsiveWidth(100),
//         }}>
//         <View style={styles.TitleContainer}>
//           <TouchableOpacity
//             onPress={() => this.props.navigation.navigate('tab')}>
//             <Ionicons
//               name="arrow-back"
//               size={30}
//               color={'black'}
//               style={{marginLeft: responsiveWidth(3)}}
//             />
//           </TouchableOpacity>
//           <Text style={styles.ourCategory}>Order History</Text>
//         </View>
//         <Text
//           style={{
//             fontSize: responsiveFontSize(2),
//             fontWeight: '600',
//             letterSpacing: 0.5,
//             textAlign: 'center',
//             marginTop: responsiveHeight(2),
//           }}>
//           {day}, {date}
//         </Text>
//         <TouchableOpacity
//           onPress={() => {
//             this.props.navigation.navigate('orderspage');
//           }}
//           style={{
//             backgroundColor: 'white',
//             height: responsiveHeight(15),
//             width: responsiveWidth(80),
//             marginLeft: responsiveWidth(10),
//             marginTop: responsiveHeight(3),
//             flexDirection: 'row',
//             borderRadius: 20,
//           }}>
//           <View>
//             <View
//               style={{
//                 alignItems: 'flex-start',
//                 marginLeft: responsiveWidth(5),
//                 marginTop: responsiveHeight(2.5),
//               }}>
//               <Text
//                 style={{fontSize: responsiveFontSize(2), fontWeight: '600'}}>
//                 Order# ORD00003
//               </Text>
//               <Text
//                 style={{
//                   marginTop: responsiveHeight(1),
//                   marginBottom: responsiveHeight(1),
//                   color: 'red',
//                 }}>
//                 ₹ 389.00
//               </Text>
//               <View style={{flexDirection: 'row', alignItems: 'center'}}>
//                 <MaterialCommunityIcons
//                   name="clock-time-four"
//                   size={20}
//                   color="grey"
//                 />
//                 <Text style={{marginLeft: responsiveWidth(2)}}>03:25 pm</Text>
//               </View>
//             </View>
//           </View>
//           <View style={{flexDirection: 'row'}}>
//             <Image
//               source={require('../assets/orderHistory/Ellipse4.png')}
//               style={{
//                 position: 'absolute',
//                 top: responsiveHeight(6),
//                 left: responsiveWidth(24),
//               }}
//             />
//             <Image
//               source={require('../assets/orderHistory/Ellipse5.png')}
//               style={{
//                 position: 'absolute',
//                 top: responsiveHeight(6),
//                 left: responsiveWidth(14),
//               }}
//             />
//             <Image
//               source={require('../assets/orderHistory/Ellipse6.png')}
//               style={{
//                 position: 'absolute',
//                 top: responsiveHeight(6),
//                 left: responsiveWidth(4),
//               }}
//             />
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={{
//             backgroundColor: 'white',
//             height: responsiveHeight(15),
//             width: responsiveWidth(80),
//             marginLeft: responsiveWidth(10),
//             marginTop: responsiveHeight(3),
//             flexDirection: 'row',
//             borderRadius: 20,
//           }}>
//           <View>
//             <View
//               style={{
//                 alignItems: 'flex-start',
//                 marginLeft: responsiveWidth(5),
//                 marginTop: responsiveHeight(2.5),
//               }}>
//               <Text
//                 style={{fontSize: responsiveFontSize(2), fontWeight: '600'}}>
//                 Order# ORD00004
//               </Text>
//               <Text
//                 style={{
//                   marginTop: responsiveHeight(1),
//                   marginBottom: responsiveHeight(1),
//                   color: 'red',
//                 }}>
//                 ₹ 129.00
//               </Text>
//               <View style={{flexDirection: 'row', alignItems: 'center'}}>
//                 <MaterialCommunityIcons
//                   name="clock-time-four"
//                   size={20}
//                   color="grey"
//                 />
//                 <Text style={{marginLeft: responsiveWidth(2)}}>03:25 pm</Text>
//               </View>
//             </View>
//           </View>
//           <View style={{flexDirection: 'row'}}>
//             <Image
//               source={require('../assets/orderHistory/Ellipse4.png')}
//               style={{
//                 position: 'absolute',
//                 top: responsiveHeight(6),
//                 left: responsiveWidth(24),
//               }}
//             />
//             <Image
//               source={require('../assets/orderHistory/Ellipse5.png')}
//               style={{
//                 position: 'absolute',
//                 top: responsiveHeight(6),
//                 left: responsiveWidth(14),
//               }}
//             />
//           </View>
//         </TouchableOpacity>
//         <View
//           style={{
//             backgroundColor: '#C4C4C4',
//             height: responsiveHeight(3),
//             width: responsiveWidth(100),
//             marginTop: responsiveHeight(5),
//             opacity: 0.2,
//           }}></View>
//         <Text
//           style={{
//             fontSize: responsiveFontSize(2),
//             fontWeight: '900',
//             letterSpacing: 0.5,
//             textAlign: 'center',
//             marginTop: responsiveHeight(2),
//           }}>
//           Thursday, 30 April 2023
//         </Text>
//         <TouchableOpacity
//           style={{
//             backgroundColor: 'white',
//             height: responsiveHeight(15),
//             width: responsiveWidth(80),
//             marginLeft: responsiveWidth(10),
//             marginTop: responsiveHeight(3),
//             flexDirection: 'row',
//             borderRadius: 20,
//           }}>
//           <View>
//             <View
//               style={{
//                 alignItems: 'flex-start',
//                 marginLeft: responsiveWidth(5),
//                 marginTop: responsiveHeight(2.5),
//               }}>
//               <Text
//                 style={{fontSize: responsiveFontSize(2), fontWeight: '600'}}>
//                 Order# ORD00015
//               </Text>
//               <Text
//                 style={{
//                   marginTop: responsiveHeight(1),
//                   marginBottom: responsiveHeight(1),
//                   color: 'red',
//                 }}>
//                 ₹ 199.00
//               </Text>
//               <View style={{flexDirection: 'row', alignItems: 'center'}}>
//                 <MaterialCommunityIcons
//                   name="clock-time-four"
//                   size={20}
//                   color="grey"
//                 />
//                 <Text style={{marginLeft: responsiveWidth(2)}}>03:25 pm</Text>
//               </View>
//             </View>
//           </View>
//           <View style={{flexDirection: 'row'}}>
//             <Image
//               source={require('../assets/orderHistory/Ellipse4.png')}
//               style={{
//                 position: 'absolute',
//                 top: responsiveHeight(6),
//                 left: responsiveWidth(24),
//               }}
//             />
//             <Image
//               source={require('../assets/orderHistory/Ellipse5.png')}
//               style={{
//                 position: 'absolute',
//                 top: responsiveHeight(6),
//                 left: responsiveWidth(14),
//               }}
//             />
//             <Image
//               source={require('../assets/orderHistory/Ellipse6.png')}
//               style={{
//                 position: 'absolute',
//                 top: responsiveHeight(6),
//                 left: responsiveWidth(4),
//               }}
//             />
//           </View>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   ourCategory: {
//     fontSize: responsiveFontSize(3),
//     fontWeight: '500',
//     letterSpacing: 1,
//     marginLeft: responsiveWidth(20),
//     color: 'black',
//   },
//   TitleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     height: responsiveHeight(10),
//     width: responsiveWidth(100),
//     backgroundColor: '#F5BF45',
//   },
// });

// export default OrderHistory;

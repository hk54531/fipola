/* eslint-disable react-native/no-inline-styles */
import {Image, ScrollView, Text, View} from 'react-native';
import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MyContext from './ContextAPI/Context';

interface Istate {
  totalAmount: any;
}
interface Iprops {
  navigation?: any;
}

export default class Cart extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      totalAmount: 0,
    };
  }
  render() {
    return (
      <MyContext.Consumer>
        {value =>
          value.cart.length === 0 ? (
            <View
              style={{
                height: responsiveHeight(100),
                width: responsiveWidth(100),
              }}>
              <View style={styles.TitleContainer}>
                <Text style={styles.ourCategory}>Cart</Text>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  height: responsiveHeight(30),
                  width: responsiveWidth(60),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                  marginLeft: responsiveWidth(20),
                  marginTop: responsiveHeight(25),
                  shadowOffset: {width: 10, height: 10},
                  shadowColor: 'black',
                  shadowOpacity: 1,
                  elevation: 5,
                }}>
                <MaterialCommunityIcons
                  name="cart-remove"
                  size={60}
                  color="black"
                />
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '400',
                    marginTop: responsiveHeight(3),
                  }}>
                  Your Cart is Empty
                </Text>
              </View>
            </View>
          ) : (
            <View
              style={{
                height: responsiveHeight(100),
                width: responsiveWidth(100),
              }}>
              <View style={styles.TitleContainer}>
                <Text style={styles.ourCategory}>Cart</Text>
              </View>
              <View
                style={{
                  height: responsiveHeight(46),
                  width: responsiveWidth(100),
                }}>
                <ScrollView>
                  {value.cart.map((item: any) => (
                    <View
                      key={item.id}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        backgroundColor: 'white',
                        height: responsiveHeight(20),
                        width: responsiveWidth(90),
                        marginLeft: responsiveWidth(5),
                        marginTop: responsiveHeight(1.5),
                        marginBottom: responsiveHeight(1.5),
                        borderRadius: 15,
                      }}>
                      <Image
                        source={{
                          uri: `${item.img}`,
                        }}
                        style={{
                          height: responsiveHeight(13),
                          width: responsiveWidth(26),
                          borderRadius: 15,
                        }}
                      />
                      <View>
                        <View>
                          <Text
                            style={{
                              fontSize: responsiveFontSize(2),
                              padding: responsiveHeight(1),
                              fontWeight: '700',
                            }}>
                            {item.title}
                          </Text>
                          <View
                            style={{
                              flexDirection: 'row',
                              padding: responsiveHeight(1),
                              marginLeft: responsiveWidth(2),
                            }}>
                            <Text
                              style={{
                                marginRight: responsiveWidth(5),
                                fontSize: responsiveFontSize(2),
                                color: '#F62B2A',
                                fontWeight: '600',
                              }}>
                              ₹ {item.offPrice}
                            </Text>
                            <Text
                              style={{
                                fontSize: responsiveFontSize(2),
                                textDecorationLine: 'line-through',
                              }}>
                              {item.actualPrice}
                            </Text>
                          </View>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                            <View
                              style={{
                                backgroundColor: '#F5BF45',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                borderRadius: 50,
                                height: responsiveHeight(5),
                                padding: responsiveHeight(0.2),
                                marginTop: responsiveHeight(1),
                                width: responsiveWidth(40),
                              }}>
                              <TouchableOpacity
                                onPress={() => {
                                  // console.log(item);
                                  if (item.quantity === 1) {
                                    // Alert.alert(
                                    //   'Atleast 1 item should be in cart',
                                    // );
                                    value.filterCart(item.id);
                                    value.deleteFromCart(item.id);
                                  } else {
                                    value.updateQuantity(
                                      item.id,
                                      item.quantity - 1,
                                      item,
                                    );
                                    value.removefromCart(item);
                                  }
                                }}>
                                <Entypo name="minus" size={30} color="white" />
                              </TouchableOpacity>
                              <Text
                                style={{
                                  fontSize: responsiveFontSize(2),
                                  fontWeight: '600',
                                }}>
                                {item.quantity}
                              </Text>
                              <TouchableOpacity
                                onPress={() => {
                                  // console.log(item);
                                  value.updateQuantity(
                                    item.id,
                                    item.quantity + 1,
                                    item,
                                  );
                                  value.addToCart(item);
                                }}>
                                <Entypo name="plus" size={30} color="white" />
                              </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                              onPress={() => {
                                console.log(item);
                                value.deleteFromCart(item.id);
                              }}>
                              <MaterialIcons
                                name="delete"
                                size={30}
                                color="red"
                                style={{
                                  marginLeft: responsiveWidth(3),
                                  marginTop: responsiveHeight(0.5),
                                }}
                              />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </View>
                  ))}
                </ScrollView>
              </View>
              <View
                style={{
                  height: responsiveHeight(30),
                  width: responsiveWidth(90),
                  marginLeft: responsiveWidth(5),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: responsiveHeight(3),
                    borderBottomWidth: 0.2,
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize: responsiveFontSize(2),
                        fontWeight: '500',
                        marginBottom: responsiveHeight(2),
                      }}>
                      Subtotal
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: responsiveFontSize(2),
                        fontWeight: '600',
                        color: 'black',

                        marginBottom: responsiveHeight(2),
                      }}>
                      ₹{' '}
                      {value.cart.reduce(
                        (accumulator: any, currentValue: any) =>
                          accumulator +
                          currentValue.offPrice * currentValue.quantity,
                        this.state.totalAmount,
                      )}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: responsiveHeight(3),
                    borderBottomWidth: 0.2,
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize: responsiveFontSize(2),
                        fontWeight: '500',
                        marginBottom: responsiveHeight(2),
                      }}>
                      Delivery Charges
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: responsiveFontSize(2),
                        fontWeight: '600',
                        marginBottom: responsiveHeight(2),
                        color: 'black',
                      }}>
                      ₹ 0
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: responsiveHeight(3),
                    borderBottomWidth: 0.2,
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize: responsiveFontSize(2),
                        fontWeight: '500',

                        marginBottom: responsiveHeight(2),
                      }}>
                      Subtotal
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: responsiveFontSize(2),
                        fontWeight: '600',
                        marginBottom: responsiveHeight(2),

                        color: 'black',
                      }}>
                      ₹{' '}
                      {value.cart.reduce(
                        (accumulator: any, currentValue: any) =>
                          accumulator +
                          currentValue.offPrice * currentValue.quantity,
                        this.state.totalAmount,
                      )}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('addnewaddress');
                    value.addtoOrders(value.cart);
                  }}
                  style={{
                    backgroundColor: 'red',
                    height: responsiveHeight(6),
                    width: responsiveWidth(60),
                    marginLeft: responsiveWidth(16),
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 50,
                    marginTop: responsiveHeight(2.2),
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: responsiveFontSize(2.5),
                    }}>
                    Checkout
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )
        }
      </MyContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  TitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: responsiveHeight(10),
    width: responsiveWidth(100),
    backgroundColor: '#F5BF45',
  },
  ourCategory: {
    fontSize: responsiveFontSize(3),
    fontWeight: '700',
    letterSpacing: 1,
  },
});

///* eslint-disable react-native/no-inline-styles */
// import {Image, ScrollView, Text, View} from 'react-native';
// import React, {Component} from 'react';
// import {StyleSheet, TouchableOpacity} from 'react-native';
// import {
//   responsiveFontSize,
//   responsiveHeight,
//   responsiveWidth,
// } from 'react-native-responsive-dimensions';
// import Entypo from 'react-native-vector-icons/Entypo';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import MyContext from './ContextAPI/Context';

// export default class Cart extends Component {
//   render() {
//     return (
//       <MyContext.Consumer>
//         {value => (
//           <View
//             style={{
//               height: responsiveHeight(100),
//               width: responsiveWidth(100),
//             }}>
//             <View style={styles.TitleContainer}>
//               <Text style={styles.ourCategory}>Cart</Text>
//             </View>
//             <View
//               style={{
//                 height: responsiveHeight(48),
//                 width: responsiveWidth(100),
//               }}>
//               <ScrollView>
//                 {value.cart.map((item: any) => (
//                   <View
//                     key={item.id}
//                     style={{
//                       flexDirection: 'row',
//                       alignItems: 'center',
//                       justifyContent: 'space-evenly',
//                       backgroundColor: 'white',
//                       height: responsiveHeight(20),
//                       width: responsiveWidth(90),
//                       marginLeft: responsiveWidth(5),
//                       marginTop: responsiveHeight(1.5),
//                       marginBottom: responsiveHeight(1.5),
//                       borderRadius: 15,
//                     }}>
//                     <Image
//                       source={{
//                         uri: `${item.img}`,
//                       }}
//                       style={{
//                         height: responsiveHeight(13),
//                         width: responsiveWidth(26),
//                         borderRadius: 15,
//                       }}
//                     />
//                     <View>
//                       <View>
//                         <Text
//                           style={{
//                             fontSize: responsiveFontSize(2),
//                             padding: responsiveHeight(1),
//                             fontWeight: '700',
//                           }}>
//                           {item.title}
//                         </Text>
//                         <View
//                           style={{
//                             flexDirection: 'row',
//                             padding: responsiveHeight(1),
//                             marginLeft: responsiveWidth(2),
//                           }}>
//                           <Text
//                             style={{
//                               marginRight: responsiveWidth(5),
//                               fontSize: responsiveFontSize(2),
//                               color: '#F62B2A',
//                               fontWeight: '600',
//                             }}>
//                             ₹ {item.offPrice}
//                           </Text>
//                           <Text
//                             style={{
//                               fontSize: responsiveFontSize(2),
//                               textDecorationLine: 'line-through',
//                             }}>
//                             {item.actualPrice}
//                           </Text>
//                         </View>
//                         <View
//                           style={{
//                             flexDirection: 'row',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                           }}>
//                           <View
//                             style={{
//                               backgroundColor: '#F5BF45',
//                               flexDirection: 'row',
//                               alignItems: 'center',
//                               justifyContent: 'space-around',
//                               borderRadius: 50,
//                               height: responsiveHeight(5),
//                               padding: responsiveHeight(0.2),
//                               marginTop: responsiveHeight(1),
//                               width: responsiveWidth(40),
//                             }}>
//                             <TouchableOpacity
//                               onPress={() => {
//                                 // console.log(item);
//                                 if (item.quantity === 0) {
//                                   // Alert.alert(
//                                   //   'Atleast 1 item should be in cart',
//                                   // );
//                                   value.filterCart(item.id);
//                                 } else {
//                                   value.updateQuantity(
//                                     item.id,
//                                     item.quantity - 1,
//                                     item,
//                                   );
//                                   value.removefromCart(item);
//                                 }
//                               }}>
//                               <Entypo name="minus" size={30} color="white" />
//                             </TouchableOpacity>
//                             <Text
//                               style={{
//                                 fontSize: responsiveFontSize(2),
//                                 fontWeight: '600',
//                               }}>
//                               {item.quantity}
//                             </Text>
//                             <TouchableOpacity
//                               onPress={() => {
//                                 // console.log(item);
//                                 value.updateQuantity(
//                                   item.id,
//                                   item.quantity + 1,
//                                   item,
//                                 );
//                                 value.addToCart(item);
//                               }}>
//                               <Entypo name="plus" size={30} color="white" />
//                             </TouchableOpacity>
//                           </View>
//                           <TouchableOpacity
//                             onPress={() => {
//                               console.log(item);
//                               value.deleteFromCart(item.id);
//                             }}>
//                             <MaterialIcons
//                               name="delete"
//                               size={30}
//                               color="red"
//                               style={{
//                                 marginLeft: responsiveWidth(3),
//                                 marginTop: responsiveHeight(0.5),
//                               }}
//                             />
//                           </TouchableOpacity>
//                         </View>
//                       </View>
//                     </View>
//                   </View>
//                 ))}
//               </ScrollView>
//             </View>
//             <View
//               style={{
//                 height: responsiveHeight(30),
//                 width: responsiveWidth(90),
//                 marginLeft: responsiveWidth(5),
//               }}>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   alignItems: 'center',
//                   justifyContent: 'space-between',
//                   marginTop: responsiveHeight(3),
//                   borderBottomWidth: 0.2,
//                 }}>
//                 <View>
//                   <Text
//                     style={{
//                       fontSize: responsiveFontSize(2),
//                       fontWeight: '500',
//                       marginBottom: responsiveHeight(2),
//                     }}>
//                     Subtotal
//                   </Text>
//                 </View>
//                 <View>
//                   <Text
//                     style={{
//                       fontSize: responsiveFontSize(2),
//                       fontWeight: '600',
//                       color: 'black',

//                       marginBottom: responsiveHeight(2),
//                     }}>
//                     ₹ 389.00
//                   </Text>
//                 </View>
//               </View>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   alignItems: 'center',
//                   justifyContent: 'space-between',
//                   marginTop: responsiveHeight(3),
//                   borderBottomWidth: 0.2,
//                 }}>
//                 <View>
//                   <Text
//                     style={{
//                       fontSize: responsiveFontSize(2),
//                       fontWeight: '500',
//                       marginBottom: responsiveHeight(2),
//                     }}>
//                     Delivery Charges
//                   </Text>
//                 </View>
//                 <View>
//                   <Text
//                     style={{
//                       fontSize: responsiveFontSize(2),
//                       fontWeight: '600',
//                       marginBottom: responsiveHeight(2),
//                       color: 'black',
//                     }}>
//                     ₹ 0
//                   </Text>
//                 </View>
//               </View>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   alignItems: 'center',
//                   justifyContent: 'space-between',
//                   marginTop: responsiveHeight(3),
//                   borderBottomWidth: 0.2,
//                 }}>
//                 <View>
//                   <Text
//                     style={{
//                       fontSize: responsiveFontSize(2),
//                       fontWeight: '500',

//                       marginBottom: responsiveHeight(2),
//                     }}>
//                     Subtotal
//                   </Text>
//                 </View>
//                 <View>
//                   <Text
//                     style={{
//                       fontSize: responsiveFontSize(2),
//                       fontWeight: '600',
//                       marginBottom: responsiveHeight(2),

//                       color: 'black',
//                     }}>
//                     ₹ 389.00
//                   </Text>
//                 </View>
//               </View>
//               <TouchableOpacity
//                 style={{
//                   backgroundColor: 'red',
//                   height: responsiveHeight(6),
//                   width: responsiveWidth(60),
//                   marginLeft: responsiveWidth(16),
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   borderRadius: 50,
//                   marginTop: responsiveHeight(3),
//                 }}>
//                 <Text
//                   style={{
//                     color: 'white',
//                     fontSize: responsiveFontSize(2.5),
//                   }}>
//                   Checkout
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}
//       </MyContext.Consumer>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   TitleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     height: responsiveHeight(10),
//     width: responsiveWidth(100),
//     backgroundColor: '#F5BF45',
//   },
//   ourCategory: {
//     fontSize: responsiveFontSize(3),
//     fontWeight: '700',
//     letterSpacing: 1,
//   },
// });

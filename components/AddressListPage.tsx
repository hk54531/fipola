/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import Entypo from 'react-native-vector-icons/Entypo';
import MyContext from './ContextAPI/Context';
import RazorpayCheckout from 'react-native-razorpay';

interface Iprops {
  navigation?: any;
  route: any;
}
interface Istate {
  touched: boolean;
  data: any;
  visibile: any;
  number: number;
}

export default class AddressListPage extends Component<Iprops, Istate> {
  static contextType = MyContext;
  declare context: React.ContextType<typeof MyContext>;

  constructor(props: Iprops) {
    super(props);
    this.state = {
      touched: false,
      data: 'grey',
      visibile: 'none',
      number: 0,
    };
  }

  render() {
    // console.log(this.context.addAddresses);

    // const specificItemData: any = this.props.route.params; //get the data from paramas

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
                onPress={() => this.props.navigation.navigate('tab')}>
                <Ionicons name="arrow-back" size={30} color={'black'} />
              </TouchableOpacity>
              <Text style={styles.ourCategory}>Delivery Address</Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('addnewaddress');
                }}
                style={{
                  height: responsiveHeight(5),
                  width: responsiveWidth(10),
                  backgroundColor: '#E7AC27',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                }}>
                <Fontisto name="plus-a" size={25} color={'white'} />
              </TouchableOpacity>
            </View>
            <View>
              {this.context.addresses && (
                <TouchableOpacity>
                  {this.context.addresses.map((item: any, index: number) => {
                    return (
                      <ScrollView key={Math.floor(Math.random() * 10000000)}>
                        <TouchableOpacity
                          key={Math.floor(Math.random() * 10000000)}
                          // onPress={() => console.log(item)
                          // }

                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            backgroundColor: 'white',
                            width: responsiveWidth(90),
                            height: responsiveHeight(13),
                            borderRadius: 10,
                            marginLeft: responsiveWidth(5),
                            marginTop: responsiveHeight(3),
                          }}>
                          <View>
                            <TouchableOpacity
                              onPress={() => {
                                this.setState({
                                  number: index,
                                });
                                // this.state.touched
                                //   ? this.setState({
                                //       visibile: true,
                                //       data: '#F5BF45',
                                //     })
                                //   : this.setState({visibile: false, data: 'red'});
                              }}>
                              <MaterialIcons
                                name="radio-button-on"
                                size={20}
                                color={
                                  index === this.state.number
                                    ? '#F5BF45'
                                    : 'grey'
                                }
                                style={{
                                  marginTop: responsiveHeight(2),
                                }}
                              />
                            </TouchableOpacity>
                          </View>
                          <View
                            style={{
                              width: responsiveWidth(62),
                              marginLeft: responsiveWidth(1),
                              marginTop: responsiveHeight(1.6),
                              height: responsiveHeight(9),
                            }}>
                            <Text
                              style={{
                                fontSize: responsiveFontSize(2),
                                fontWeight: '700',
                              }}>
                              {item.buildingNo}
                            </Text>
                            <View>
                              <Text style={{marginTop: responsiveHeight(0.5)}}>
                                {item.city} {'- '}
                                {item.pincode}
                              </Text>
                            </View>
                          </View>
                          <View>
                            <TouchableOpacity
                              onPress={() => {
                                console.log(item);
                                value.removeAddresses(item);
                              }}>
                              <AntDesign
                                name="delete"
                                size={20}
                                color="red"
                                style={{
                                  marginTop: responsiveHeight(2.2),
                                }}
                              />
                            </TouchableOpacity>
                          </View>
                          {/* <Modal
                    visible={this.state.visibile}
                    transparent={true}
                    onRequestClose={() => {
                      Alert.alert('Modal has been closed.');
                      this.setState({visibile: !this.state.visibile});
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({visibile: !this.state.visibile});
                      }}
                      style={{
                        backgroundColor: 'red',
                        height: responsiveHeight(15),
                        width: responsiveWidth(30),
                        position: 'absolute',
                        top: responsiveHeight(),
                        left: responsiveWidth(20),
                      }}>
                      <Text>hi</Text>
                    </TouchableOpacity>
                  </Modal> */}
                        </TouchableOpacity>
                      </ScrollView>
                    );
                  })}
                </TouchableOpacity>
              )}
            </View>
            <TouchableOpacity
              onPress={() => {
                // this.props.navigation.navigate('payment');
                value.emptyCart();

                var options = {
                  description: 'fipola purchase',
                  image:
                    'https://i.postimg.cc/CL7p9Cv9/3135715-removebg-preview.png',
                  currency: 'INR',
                  // key: 'rzp_test_locuRaWt3KL2uf',
                  // key: 'rzp_test_X2oJM0KQrdklVO', //sharat key
                  key: 'rzp_test_7ESJUaZ1N8iI5f',
                  amount:
                    value.orders[0].reduce(
                      (accumulator: any, currentValue: any) =>
                        accumulator +
                        currentValue.offPrice * currentValue.quantity,
                      0,
                    ) * 100,
                  name: 'Hari kishan Veeranki',
                  prefill: {
                    email: 'harikishanveeranki@razorpay.com',
                    contact: '8297354490',
                    name: 'hari kishan veeranki',
                  },
                  theme: {color: '#F5BF45'},
                };

                RazorpayCheckout.open(options)
                  .then(data => {
                    // handle success
                    Alert.alert(`Success: ${data.razorpay_payment_id}`);
                    setTimeout(() => {
                      this.props.navigation.navigate('congratulations');
                    }, 800);
                  })
                  .catch(error => {
                    // handle failure
                    Alert.alert(`Error: ${error.code} | ${error.description}`);
                    // setTimeout(() => {
                    //   this.props.navigation.navigate('congratulations');
                    // }, 1000);
                  });
              }}
              style={{
                backgroundColor: '#F62B2A',
                height: responsiveHeight(8),
                width: responsiveWidth(70),
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                bottom: responsiveHeight(5),
                marginLeft: responsiveWidth(15),
              }}>
              <Text style={{color: 'white'}}>Continue</Text>
            </TouchableOpacity>
          </View>
        )}
      </MyContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  ourCategory: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: '500',
    letterSpacing: 1,

    color: 'black',
  },
  TitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: responsiveHeight(10),
    width: responsiveWidth(100),
    backgroundColor: '#F5BF45',
  },
});

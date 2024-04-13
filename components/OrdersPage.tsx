/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlatList} from 'react-native';
import {Image} from 'react-native';

// const flatlistData = [
//   {
//     id: 1,
//     type: 'egg',
//     title: 'Country Eggs Pack',
//     quantity: 0,
//     actualPrice: '200.00',
//     offPrice: '173.00',
//     img: 'https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
//   },
//   {
//     id: '2',
//     type: 'chicken-tandoori',
//     title: 'Tandoori Chicken..',
//     quantity: 0,
//     actualPrice: '198.00',
//     offPrice: '149.00',
//     img: 'https://images.unsplash.com/photo-1618312368656-33f718157750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1419&q=80',
//   },
//   {
//     id: '3',
//     type: 'egg',
//     title: 'Natural Eggs Pack',
//     quantity: 0,
//     actualPrice: '120.00',
//     offPrice: '103.00',
//     img: 'https://images.unsplash.com/photo-1627737662882-da8a46ac582e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
//   },
//   {
//     id: 4,
//     type: 'fish',
//     title: 'Indian Mackeral',
//     quantity: 0,
//     actualPrice: '226.00',
//     offPrice: '181.00',
//     img: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
//   },
//   {
//     id: 5,
//     type: 'chicken',
//     title: 'Chicken Drumsticks',
//     quantity: 0,
//     actualPrice: '122.00',
//     offPrice: '112.00',
//     img: 'https://images.unsplash.com/photo-1609016580259-e04ddc09a850?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
//   },
// ];

interface Iprops {
  navigation?: any;
  route?: any;
}

export class OrdersPage extends Component<Iprops> {
  handlePress2 = (item: any) => {
    this.props.navigation.navigate('individualcomponent', item);
  };
  render() {
    const specificItemData = this.props.route.params; //get the data from paramas
    console.log(specificItemData);
    return (
      <View
        style={{
          height: responsiveHeight(100),
          width: responsiveWidth(100),
        }}>
        <View style={styles.TitleContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('orderhistory')}>
            <Ionicons
              name="arrow-back"
              size={30}
              color={'black'}
              style={{marginLeft: responsiveWidth(3)}}
            />
          </TouchableOpacity>
          <Text style={styles.ourCategory}>Order</Text>
        </View>
        {/* <Text
          style={{
            fontSize: responsiveFontSize(2),
            fontWeight: '900',
            letterSpacing: 0.5,
            textAlign: 'center',
            marginTop: responsiveHeight(2),
          }}>
          Sunday, 3 April 2023
        </Text> */}
        <View
          style={{
            backgroundColor: 'white',
            height: responsiveHeight(15),
            flexDirection: 'row',
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
                  color: 'black',
                  fontWeight: '500',
                  letterSpacing: 1,
                }}>
                Order# ORD000{Math.floor(Math.random() * 100) + 1}
              </Text>
              <Text
                style={{
                  marginTop: responsiveHeight(1),
                  marginBottom: responsiveHeight(1),
                  color: 'red',
                }}>
                ₹{' '}
                {specificItemData.reduce(
                  (accumulator: any, currentValue: any) =>
                    accumulator + currentValue.offPrice * currentValue.quantity,
                  0,
                )}
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <MaterialCommunityIcons
                    name="clock-time-four"
                    size={20}
                    color="grey"
                  />
                  <Text style={{marginLeft: responsiveWidth(2)}}>
                    {' '}
                    {new Date().toLocaleString('en-US', {
                      hour: 'numeric',
                      minute: 'numeric',
                      hour12: true,
                    })}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: responsiveWidth(3),
                  }}>
                  <MaterialIcons name="date-range" size={20} color="grey" />
                  <Text style={{marginLeft: responsiveWidth(2)}}>
                    {new Date().toDateString().slice(3, 15)}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: responsiveHeight(1.3),
            backgroundColor: 'white',
            height: responsiveHeight(45),
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: responsiveFontSize(2),
              fontWeight: '600',
              letterSpacing: 1,
              marginLeft: responsiveWidth(5),
              marginTop: responsiveHeight(3),
            }}>
            Ordered Product
          </Text>
          <FlatList
            numColumns={2}
            showsVerticalScrollIndicator={false}
            data={specificItemData}
            renderItem={({item}) => (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    console.log(item);
                    this.handlePress2(item);
                  }}
                  style={{
                    width: responsiveWidth(40),
                    height: responsiveHeight(20),
                    backgroundColor: 'white',
                    margin: responsiveHeight(2),
                    borderRadius: 10,
                  }}>
                  <Image
                    source={{uri: `${item.img}`}}
                    style={{
                      height: responsiveHeight(15),
                      width: responsiveWidth(40),
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: responsiveFontSize(1.8),
                      fontWeight: '500',
                      letterSpacing: 1,
                      marginLeft: responsiveWidth(2),
                      marginTop: responsiveHeight(0.5),
                    }}>
                    {item.title}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: responsiveHeight(1),
                    }}>
                    <Text
                      style={{
                        marginRight: responsiveWidth(5),
                        fontSize: responsiveFontSize(1.5),
                        color: '#F62B2A',
                        // color: 'black',
                        fontWeight: '600',
                      }}>
                      ₹ {item.offPrice}
                    </Text>
                    <Text
                      style={{
                        fontSize: responsiveFontSize(1.5),
                        textDecorationLine: 'line-through',
                      }}>
                      {item.actualPrice}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item: any) => item.id}
          />
        </View>
        <View style={{height: responsiveHeight(1.3)}}></View>

        <View
          style={{
            height: responsiveHeight(30),
            width: responsiveWidth(100),
            backgroundColor: 'white',
            paddingLeft: responsiveWidth(10),
            paddingRight: responsiveWidth(10),
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
                  fontWeight: '300',
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
                ₹
                {specificItemData.reduce(
                  (accumulator: any, currentValue: any) =>
                    accumulator + currentValue.offPrice * currentValue.quantity,
                  0,
                )}
                .00
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: responsiveHeight(3),
              borderBottomWidth: 0.3,
            }}>
            <View>
              <Text
                style={{
                  fontSize: responsiveFontSize(2),
                  fontWeight: '300',
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
                  color: 'red',
                }}>
                ₹
                {specificItemData.reduce(
                  (accumulator: any, currentValue: any) =>
                    accumulator + currentValue.offPrice * currentValue.quantity,
                  0,
                )}
                .00
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ourCategory: {
    fontSize: responsiveFontSize(3),
    fontWeight: '500',
    letterSpacing: 1,
    marginLeft: responsiveWidth(30),
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

export default OrdersPage;

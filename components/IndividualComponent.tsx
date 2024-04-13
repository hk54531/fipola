/* eslint-disable react/self-closing-comp */
/* eslint-disable no-lone-blocks */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Image, TouchableOpacity, Text, View, Alert} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Entypo from 'react-native-vector-icons/Entypo';
import MyContext from './ContextAPI/Context';

interface Iprops {
  navigation?: any;
  route?: any;
}

export default class IndividualComponent extends Component<Iprops> {
  constructor(props: Iprops) {
    super(props);
    this.state = {};
  }

  render() {
    const specificItemData2 = this.props.route.params;
    console.log(specificItemData2);
    return (
      <MyContext.Consumer>
        {value => (
          <View
            style={{
              height: responsiveHeight(100),
              width: responsiveWidth(100),
            }}>
            <Image
              source={{uri: `${specificItemData2.img}`}}
              style={{
                height: responsiveHeight(50),
                width: responsiveWidth(100),
              }}
            />
            <View
              style={{
                backgroundColor: 'white',
                width: responsiveWidth(90),
                height: responsiveHeight(50),
                marginLeft: responsiveWidth(5),
                position: 'absolute',
                top: responsiveHeight(45),
                borderRadius: 25,
              }}>
              <Text
                style={{
                  fontSize: responsiveFontSize(3),
                  textAlign: 'center',
                  marginTop: responsiveWidth(3),
                  fontWeight: '700',
                }}>
                {specificItemData2.title}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: responsiveHeight(2.5),
                }}>
                <Text
                  style={{
                    marginRight: responsiveWidth(5),
                    fontSize: responsiveFontSize(2),
                    color: '#F62B2A',
                    // color: 'black',
                    fontWeight: '600',
                  }}>
                  ₹ {specificItemData2.offPrice}
                </Text>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2),
                    textDecorationLine: 'line-through',
                  }}>
                  {specificItemData2.actualPrice}
                </Text>
              </View>
              <View
                style={{
                  width: responsiveWidth(65),
                  height: responsiveHeight(10),
                  marginLeft: responsiveWidth(15),
                  marginTop: responsiveHeight(2.5),
                }}>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2),
                    textAlign: 'center',
                  }}>
                  High in quality protein and Vitamins nutritious pack to
                  improve your health
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: responsiveWidth(60),
                  marginLeft: responsiveWidth(15),
                  marginBottom: responsiveHeight(2.2),
                }}>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.5),
                    fontWeight: '600',
                  }}>
                  Pieces
                </Text>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.5),
                    fontWeight: '600',
                  }}>
                  12
                </Text>
              </View>
              <View
                style={{
                  borderBottomWidth: 0.2,
                  width: responsiveWidth(60),
                  marginLeft: responsiveWidth(15),
                }}></View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: responsiveWidth(60),
                  marginLeft: responsiveWidth(15),
                  marginTop: responsiveHeight(2),
                }}>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.5),
                    fontWeight: '600',
                  }}>
                  Packs
                </Text>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.5),
                    fontWeight: '600',
                  }}>
                  2 Pack
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#F5BF45',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  borderRadius: 50,
                  height: responsiveHeight(7),
                  padding: responsiveHeight(0.2),
                  width: responsiveWidth(60),
                  marginLeft: responsiveWidth(15),
                  marginTop: responsiveHeight(3.8),
                }}>
                <TouchableOpacity
                  onPress={() => {
                    console.log(specificItemData2);
                    if (specificItemData2.quantity === 0) {
                      Alert.alert('Atleast 1 item should be in cart');
                    } else {
                      value.updateQuantityList2(
                        specificItemData2.id,
                        --specificItemData2.quantity,
                      );
                    }
                  }}>
                  <Entypo name="minus" size={30} color="white" />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: responsiveFontSize(3),
                    fontWeight: '600',
                  }}>
                  {specificItemData2.quantity}
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    value.updateQuantityList2(
                      specificItemData2.id,
                      ++specificItemData2.quantity,
                    )
                  }>
                  <Entypo name="plus" size={30} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </MyContext.Consumer>
    );
  }
}

{
  /* <View>
<FlatList
  horizontal
  data={flatlistData}
  showsHorizontalScrollIndicator={false}
  renderItem={({item}) => (
    <View style={styles.flatlistContainer}>
      <Image
        source={{uri: item.img}}
        style={{
          height: responsiveHeight(13),
          width: responsiveWidth(40),
          borderRadius: 10,
        }}
      />
      <Text
        style={{
          fontSize: responsiveFontSize(2),
          padding: responsiveHeight(1),
          fontWeight: '700',
        }}>
        {item.title}
      </Text>
      <View style={{flexDirection: 'row', padding: 5}}>
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
          backgroundColor: '#F5BF45',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          borderRadius: 50,
          height: responsiveHeight(5),
          padding: responsiveHeight(0.2),
          marginTop: responsiveHeight(1),
        }}>
        <TouchableOpacity>
          <Entypo name="minus" size={30} color="white" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: responsiveFontSize(2),
            fontWeight: '600',
          }}>
          {item.quantity}
        </Text>
        <TouchableOpacity>
          <Entypo name="plus" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  )}
  keyExtractor={(item: any) => item.id}
/>
</View> */
}

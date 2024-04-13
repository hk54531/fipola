/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Modal,
  View,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Yup from 'yup';
import {Formik} from 'formik';
import axios from 'axios';
import {SliderBox} from 'react-native-image-slider-box';
import MyContext from './ContextAPI/Context';
// import ActionButton from 'react-native-action-button';
// import Icon from 'react-native-vector-icons/Ionicons';

const validationSchema = Yup.object().shape({
  postal_code: Yup.string()
    .length(6)
    .matches(/^[0-9]{5}/)
    .required()
    .label('postal code'),
});

interface Istate {
  buttonModal: any;
  isModelVisible: any;
  pincode: any;
  opacity: number;
  typedText: string;
}
interface Iprops {
  navigation?: any;
}

const ImagesList = [
  'https://i.postimg.cc/KvLPHVGC/Blue-Creative-Delicious-Chicken-Banner.png',
  'https://i.postimg.cc/7Z8CJZyW/Colorful-Mutton-Biryani-You-Tube-Thumbnail.png',
  'https://i.postimg.cc/wvGMq6VF/Yellow-How-To-Fillet-A-Fish-You-Tube-Thumbnail.png',
  'https://i.postimg.cc/28Bb5BgW/Red-Modern-Food-Cooking-You-Tube-Thumbnail.png',
];

export default class MainPage extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      buttonModal: false,
      isModelVisible: false,
      pincode: 'city name',
      opacity: 1,
      typedText: '',
    };
  }

  changeHandler = (text: string) => {
    this.setState({typedText: text});
    console.log(this.state.typedText);
  };

  componentDidMount() {
    this.setState({isModelVisible: true, opacity: 0.1});
  }

  toggleHandler = () => {
    this.setState({
      isModelVisible: !this.state.isModelVisible,
      opacity: 1,
    });
  };
  toggleHandler2 = () => {
    this.setState({
      isModelVisible: !this.state.isModelVisible,
      opacity: 0.1,
    });
  };
  handlePress = (item: any) => {
    this.props.navigation.navigate('testcomponent', item);
  };
  handlePress2 = (item: any) => {
    this.props.navigation.navigate('individualcomponent', item);
  };

  render() {
    return (
      <MyContext.Consumer>
        {(value: any) => (
          <SafeAreaView>
            <View
              style={{
                opacity: this.state.opacity,
                height: responsiveHeight(95),
              }}>
              <View style={styles.fipolaTitleContainer}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.toggleDrawer()}>
                  <Entypo name="list" color={'white'} size={30} />
                </TouchableOpacity>
                <Image
                  source={require('../assets/logo_png1.png')}
                  style={styles.fipolaImg}
                />
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('edit')}>
                  <Image source={require('../assets/Ellipse7.png')} />
                </TouchableOpacity>
              </View>
              <ScrollView>
                <View>
                  <View style={styles.searchContainer}>
                    <TouchableOpacity>
                      <Ionicons
                        name="search"
                        color={'grey'}
                        size={30}
                        style={{padding: 15}}
                      />
                    </TouchableOpacity>
                    <TextInput
                      placeholder="Search"
                      onChange={e => this.changeHandler(e.nativeEvent.text)}
                      style={styles.inputField}
                    />

                    <TouchableOpacity
                      style={{flexDirection: 'row', alignItems: 'center'}}
                      onPress={this.toggleHandler2}>
                      <Ionicons
                        name="md-location-sharp"
                        color={'grey'}
                        size={30}
                      />
                      <Text style={{padding: 15}}>{this.state.pincode}</Text>
                    </TouchableOpacity>
                  </View>

                  <View>
                    <View
                      style={{
                        position: 'absolute',
                        backgroundColor: 'white',
                        zIndex: 1,
                        width: responsiveWidth(100),
                        // opacity: 0.9,
                      }}>
                      {value.flatlistData
                        .filter((item: any) => {
                          if (!this.state.typedText) {
                            return false;
                          }
                          if (
                            item.title.includes(
                              this.state.typedText.toLowerCase(),
                            ) ||
                            item.type.includes(
                              this.state.typedText.toLowerCase(),
                            )
                          ) {
                            return true;
                          }
                          return false;
                        })
                        .map((item: any) => (
                          <TouchableOpacity
                            key={item.id}
                            onPress={() => this.handlePress(item)}>
                            <View key={item.id} style={{flexDirection: 'row'}}>
                              {/* <Text>{item.type}</Text> */}

                              <Image
                                source={{uri: item.img}}
                                style={{
                                  height: 50,
                                  width: 50,
                                  margin: 2,
                                }}
                              />

                              <Text style={{padding: 5, fontWeight: '600'}}>
                                {item.title}
                              </Text>
                            </View>
                          </TouchableOpacity>
                        ))}
                    </View>
                    {/* <SliderBox
                 images={ImagesList}
                 sliderBoxHeight={200}
                 dotColor="#FFEE58"
                 inactiveDotColor="#90A4AE"
                 paginationBoxVerticalPadding={20}
                 style={styles.sliderboxStyling}
                 autoplay
                 circleLoop
               /> */}

                    <SliderBox
                      images={ImagesList}
                      sliderBoxHeight={200}
                      // onCurrentImagePressed={index =>
                      //   console.warn(`image ${index} pressed`)
                      // }
                      dotColor="#FFEE58"
                      inactiveDotColor="#90A4AE"
                      paginationBoxVerticalPadding={20}
                      autoplay
                      circleLoop
                      resizeMethod={'resize'}
                      resizeMode={'cover'}
                      paginationBoxStyle={{
                        position: 'absolute',
                        bottom: 0,
                        padding: 0,
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        paddingVertical: responsiveHeight(5),
                      }}
                      dotStyle={{
                        width: responsiveWidth(2),
                        height: responsiveHeight(1),
                        borderRadius: 5,
                        marginHorizontal: 0,
                        padding: 0,
                        margin: 0,
                        backgroundColor: 'rgba(128, 128, 128, 0.92)',
                      }}
                      ImageComponentStyle={{
                        borderRadius: 15,
                        width: responsiveWidth(90),
                        marginTop: responsiveHeight(2),
                      }}
                      imageLoadingColor="#2196F3"
                    />
                  </View>
                  <View style={styles.BestSellersView}>
                    <Text style={styles.bestsellersTxt}>Best Sellers</Text>

                    <View>
                      <FlatList
                        horizontal
                        data={value.flatlistData}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item}) => (
                          <TouchableOpacity
                            onPress={() => this.handlePress(item)}
                            style={styles.flatlistContainer}>
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
                              <TouchableOpacity
                                onPress={() => {
                                  // console.log(item);
                                  if (item.quantity === 0) {
                                    Alert.alert(
                                      'Atleast 1 item should be in cart',
                                    );
                                    value.filterCart(item.id);
                                  } else if (item.quantity === 1) {
                                    value.filterCart(item.id);
                                    value.deleteFromCart(item.id);
                                  } else {
                                    value.updateQuantity(
                                      item.id,
                                      --item.quantity,
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
                                    ++item.quantity,
                                    item,
                                  );
                                  value.addToCart(item);
                                }}>
                                <Entypo name="plus" size={30} color="white" />
                              </TouchableOpacity>
                            </View>
                          </TouchableOpacity>
                        )}
                        keyExtractor={(item: any) => item.id}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      height: responsiveHeight(3),
                      width: responsiveWidth(100),
                      backgroundColor: '#C4C4C4',
                    }}></View>
                  <View
                    style={{
                      backgroundColor: '#E5E5E5',
                      height: responsiveHeight(42),
                      width: responsiveWidth(100),
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginLeft: responsiveHeight(2),
                      }}>
                      <Text
                        style={{
                          fontSize: responsiveScreenFontSize(3),
                          fontWeight: '500',
                          letterSpacing: 1,
                          paddingTop: responsiveHeight(1),
                          fontFamily: 'Montserrat Alternates',
                        }}>
                        Receipes
                      </Text>
                      <Feather
                        size={30}
                        name={'arrow-right'}
                        color="black"
                        style={{
                          paddingTop: responsiveHeight(2),
                          marginLeft: responsiveWidth(50),
                        }}
                      />
                    </View>
                    <FlatList
                      horizontal
                      data={value.flatListData2}
                      showsHorizontalScrollIndicator={false}
                      renderItem={({item}) => (
                        <TouchableOpacity
                          onPress={() => this.handlePress2(item)}
                          style={{
                            width: responsiveWidth(73),
                            height: responsiveHeight(30),
                            backgroundColor: 'white',
                            margin: responsiveHeight(2),
                            borderRadius: 10,
                          }}>
                          <Image
                            source={{uri: item.img}}
                            style={{
                              height: responsiveHeight(25),
                              width: responsiveWidth(73),
                              borderTopLeftRadius: 10,
                              borderTopRightRadius: 10,
                            }}
                          />
                          <Text
                            style={{
                              fontSize: responsiveFontSize(2.5),
                              fontFamily: 'Montserrat Alternates',
                              fontWeight: '500',
                              letterSpacing: 1,
                              marginLeft: responsiveWidth(4),
                              marginTop: responsiveHeight(0.5),
                            }}>
                            {item.title}
                          </Text>
                        </TouchableOpacity>
                      )}
                      keyExtractor={(item: any) => item.id}
                    />
                  </View>
                  <View
                    style={{
                      height: responsiveHeight(3),
                      width: responsiveWidth(100),
                      backgroundColor: '#C4C4C4',
                    }}></View>
                  <View style={{backgroundColor: '#E5E5E5'}}>
                    <Text
                      style={{
                        fontSize: responsiveScreenFontSize(3),
                        fontFamily: 'Montserrat Alternates',
                        marginLeft: responsiveWidth(5),
                        fontWeight: '500',
                        letterSpacing: 1,
                        marginBottom: responsiveHeight(2),
                        marginTop: responsiveHeight(2),
                      }}>
                      Press Corner
                    </Text>
                    <View
                      style={{
                        height: responsiveHeight(33),
                        width: responsiveWidth(90),
                        marginLeft: responsiveWidth(5),
                        marginBottom: responsiveHeight(5),
                        borderRadius: 10,
                        backgroundColor: 'white',
                      }}>
                      <Image
                        style={{
                          height: responsiveHeight(20),
                          width: responsiveWidth(90),
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        }}
                        source={require('../assets/presscorner.png')}
                      />
                      <Text
                        style={{
                          fontSize: responsiveScreenFontSize(2),
                          padding: responsiveHeight(1),
                          fontWeight: '500',
                        }}>
                        Fipola on expansion mode, enters Hyderabad with 14
                        stores
                      </Text>
                      <Text
                        style={{
                          fontSize: responsiveScreenFontSize(2),
                          padding: responsiveHeight(1),
                          color: 'red',
                          fontWeight: '500',
                        }}>
                        September 09, 2021 | The Hindu
                      </Text>
                    </View>

                    {/* <ActionButton buttonColor="rgba(231,76,60,1)">
                 <ActionButton.Item
                   buttonColor="#9b59b6"
                   title="New Task"
                   onPress={() => console.log('notes tapped!')}>
                   <Icon name="md-create" style={styles.actionButtonIcon} />
                 </ActionButton.Item>
                 <ActionButton.Item
                   buttonColor="#3498db"
                   title="Notifications"
                   onPress={() => {}}>
                   <Icon
                     name="md-notifications-off"
                     style={styles.actionButtonIcon}
                   />
                 </ActionButton.Item>
                 <ActionButton.Item
                   buttonColor="#1abc9c"
                   title="All Tasks"
                   onPress={() => {}}>
                   <Icon name="md-done-all" style={styles.actionButtonIcon} />
                 </ActionButton.Item>
               </ActionButton> */}
                  </View>

                  <Modal
                    visible={this.state.buttonModal}
                    transparent={true}
                    animationType="fade">
                    <View
                      style={{
                        backgroundColor: '#25D366',
                        height: responsiveHeight(7),
                        width: responsiveWidth(14),
                        borderRadius: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        bottom: responsiveHeight(27),
                        right: responsiveWidth(4),
                      }}>
                      <TouchableOpacity
                        onPress={() =>
                          this.setState({opacity: 1, buttonModal: false})
                        }>
                        <MaterialCommunityIcons
                          name="whatsapp"
                          size={25}
                          color="white"
                        />
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        backgroundColor: '#F5BF45',
                        height: responsiveHeight(7),
                        width: responsiveWidth(14),
                        borderRadius: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        bottom: responsiveHeight(18),
                        right: responsiveWidth(4),
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({opacity: 1, buttonModal: false});
                          this.props.navigation.navigate('chat');
                        }}>
                        <MaterialIcons name="message" size={25} color="white" />
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        backgroundColor: 'white',
                        height: responsiveHeight(7),
                        width: responsiveWidth(14),
                        borderRadius: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        bottom: responsiveHeight(10),
                        right: responsiveWidth(4),
                      }}>
                      <TouchableOpacity
                        onPress={() =>
                          this.setState({opacity: 1, buttonModal: false})
                        }>
                        <MaterialCommunityIcons
                          name="close"
                          size={25}
                          color="black"
                        />
                      </TouchableOpacity>
                    </View>
                  </Modal>
                  <Modal
                    visible={this.state.isModelVisible}
                    transparent={true}
                    animationType="slide">
                    <View style={{flex: 1}}>
                      <View style={styles.container2}>
                        <Text style={styles.deliveryLocation}>
                          Delivery Location
                        </Text>
                        <Text style={styles.descTxt}>
                          serviceable locations : Bengaluru I Chennai I
                          Coimbatore I Hyderabad Puducherry I Turpur I vellore
                        </Text>

                        <Formik
                          initialValues={{postal_code: ''}}
                          onSubmit={(values, actions) => {
                            actions.resetForm();
                            const pincode = Number(values.postal_code);
                            console.log(typeof pincode);

                            axios
                              .get(
                                `https://api.postalpincode.in/pincode/${pincode}`,
                              )
                              .then(res => {
                                console.log(res.data[0].PostOffice[0].Name);
                                this.setState({
                                  pincode: res.data[0].PostOffice[0].Name,
                                });
                                this.setState({
                                  isModelVisible: false,
                                  opacity: 1,
                                });
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
                          onPress={this.toggleHandler}
                        />
                      </View>
                    </View>
                  </Modal>
                </View>
              </ScrollView>
              <View
                style={{
                  backgroundColor: '#F62B2A',
                  height: responsiveHeight(7),
                  width: responsiveWidth(14),
                  borderRadius: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'absolute',
                  bottom: responsiveHeight(3),
                  right: responsiveWidth(4),
                  opacity: this.state.opacity,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({opacity: 0.1, buttonModal: true})
                  }>
                  <MaterialCommunityIcons
                    name="headphones"
                    size={25}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        )}
      </MyContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  flatlistContainer: {
    padding: responsiveHeight(1.5),
  },
  bestsellersTxt: {
    fontSize: responsiveScreenFontSize(3),
    fontWeight: '600',
    fontFamily: 'MontserratAlternates-Regular',
    letterSpacing: 1,
    marginBottom: responsiveHeight(2),
    marginTop: responsiveHeight(1),
    marginLeft: responsiveHeight(2),
  },
  BestSellersView: {
    height: responsiveHeight(42),
    width: responsiveWidth(100),
    paddingTop: responsiveHeight(2),
    zIndex: -1,
  },
  inputContainerinLocation: {
    marginLeft: responsiveHeight(5),
    marginTop: responsiveHeight(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 50,
    width: responsiveWidth(80),
  },
  closeButton: {
    position: 'absolute',
    top: responsiveHeight(2),
    right: responsiveWidth(5),
  },
  locationButton: {},
  arrowButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: responsiveWidth(5),
  },
  inptTxt: {
    width: responsiveScreenWidth(50),
    paddingLeft: responsiveWidth(6),
  },
  descTxt: {
    width: responsiveWidth(80),
    fontSize: responsiveScreenFontSize(1.8),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(2),
  },
  deliveryLocation: {
    fontSize: responsiveScreenFontSize(3),
    textAlign: 'center',
    paddingTop: responsiveHeight(3.5),
  },
  container2: {
    height: responsiveScreenHeight(50),
    width: responsiveScreenWidth(100),
    marginTop: responsiveHeight(65),
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

  inputField: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fipolaImg: {
    width: responsiveWidth(30),
    height: responsiveHeight(5),
    resizeMode: 'contain',
  },
  mainContainer: {},
  fipolaTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: responsiveHeight(10),
    width: responsiveWidth(100),
    backgroundColor: '#F5BF45',
  },
});

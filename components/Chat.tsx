import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const data = [
  {
    id: 1,
    img: require('../assets/chat/flatlistrec.png'),
    text: 'Order Related Query',
  },
  {
    id: 2,
    img: require('../assets/chat/flatlistrec.png'),
    text: 'Delivery Related',
  },
  {
    id: 3,
    img: require('../assets/chat/flatlistrec.png'),
    text: 'Quality Related',
  },
];

interface Iprops {
  navigation?: any;
}

const date = new Date().toDateString().slice(3, 15);

export default class Chat extends Component<Iprops> {
  render() {
    return (
      <View
        style={{height: responsiveHeight(100), width: responsiveWidth(100)}}>
        <View style={styles.TitleContainer}>
          <Text style={styles.ourCategory}>fipola</Text>
          <View
            style={{
              backgroundColor: '#E7AC27',
              height: responsiveHeight(5),
              width: responsiveWidth(10),
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: responsiveWidth(65),
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('tab')}>
              <AntDesign name="close" size={25} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginTop: responsiveHeight(40),
            position: 'absolute',
            bottom: responsiveHeight(38),
            marginLeft: responsiveWidth(40),
          }}>
          <Text style={{fontSize: responsiveFontSize(2)}}> {date}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: responsiveHeight(5),
            position: 'absolute',
            bottom: responsiveHeight(28),
          }}>
          <Image source={require('../assets/chat/f.png')} />

          <View
            style={{
              width: responsiveWidth(80),
              backgroundColor: 'white',
              marginLeft: responsiveWidth(5),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
            }}>
            <Text style={{}}>hey, welcome to fipola! how may help you?</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: responsiveHeight(5),
            marginTop: responsiveHeight(5),
            marginLeft: responsiveWidth(19),
            backgroundColor: '#F5BF45',
            width: responsiveWidth(80),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
            position: 'absolute',
            bottom: responsiveHeight(20),
          }}>
          <Text>hey, I need your help</Text>
        </View>
        <View style={{position: 'absolute', bottom: responsiveHeight(10)}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={data}
            renderItem={({item}) => (
              <View
                style={{
                  height: responsiveHeight(5),
                  width: responsiveWidth(50),
                  backgroundColor: 'white',
                  borderRadius: 25,
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: responsiveHeight(0.5),
                }}>
                <Text>{item.text}</Text>
              </View>
            )}
            keyExtractor={(item: any) => item.id}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: responsiveHeight(1),
            paddingRight: responsiveHeight(1),
            position: 'absolute',
            bottom: 20,
            backgroundColor: 'white',
            width: responsiveWidth(100),
          }}>
          <TextInput
            placeholder="Type Your Message"
            style={{marginLeft: responsiveWidth(5)}}
          />
          <FontAwesome5
            size={20}
            name="link"
            color={'black'}
            style={{marginLeft: responsiveWidth(50)}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ourCategory: {
    fontSize: responsiveScreenFontSize(3),
    fontWeight: '700',
    letterSpacing: 1,
    marginLeft: responsiveWidth(3),
  },
  TitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: responsiveHeight(10),
    width: responsiveWidth(100),
    backgroundColor: '#F5BF45',
  },
});

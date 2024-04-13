/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
  FlatList,
  Alert,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
// import {individualItemdata} from './categoryData';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyContext from './ContextAPI/Context';

interface Iprops {
  navigation?: any;
  route?: any;
  value: any;
}

interface Istate {}

export default class Category extends Component<Iprops, Istate> {
  static contextType = MyContext;
  declare context: React.ContextType<typeof MyContext>;

  handlePresser = (item: any) => {
    console.log(item);
    this.props.navigation.navigate('categoryindividualpage', item);
  };
  render() {
    const typeofItem = this.props.route.params;
    console.log(typeofItem.title);

    const filterData = this.context.individualItemdata.filter(
      (item: any) => item.type === typeofItem.title,
    );
    console.log(filterData[0].data);

    // const dataRender = filterData[0].data.map((item: any) => {
    //   return {
    //     id: item.id,
    //     title: item.title,
    //     img: item.img,
    //     actualPrice: item.actualPrice,
    //     offPrice: item.offPrice,
    //     quantity: item.quantity,
    //   };
    // });

    return (
      // <MyContext.Consumer>
      //   {value => (
      <View
        style={{
          height: responsiveHeight(100),
          width: responsiveWidth(100),
        }}>
        <View style={styles.TitleContainer}>
          <TouchableOpacity>
            <Ionicons
              name="arrow-back"
              size={30}
              color={'black'}
              style={{marginLeft: responsiveWidth(3)}}
            />
          </TouchableOpacity>
          <Text style={styles.ourCategory}>{filterData[0].type}</Text>
        </View>
        <View>
          <FlatList
            data={filterData[0].data}
            numColumns={2}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => this.handlePresser(item)}
                style={{
                  marginLeft: responsiveWidth(3.4),
                  marginTop: responsiveHeight(1),
                  marginBottom: responsiveHeight(1),
                }}>
                <Image
                  source={{uri: `${item.img}`}}
                  style={{
                    height: responsiveHeight(15),
                    width: responsiveWidth(45),
                  }}
                />
                <Text
                  style={{
                    fontSize: responsiveFontSize(2),
                    width: responsiveWidth(40),
                    fontWeight: '600',
                    marginLeft: responsiveWidth(0.5),
                    color: 'black',
                    letterSpacing: 0.5,
                    marginTop: responsiveHeight(1),
                  }}>
                  {item.title}
                </Text>
                <View
                  style={{
                    backgroundColor: '#F5BF45',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    borderRadius: 50,
                    height: responsiveHeight(5),
                    padding: responsiveHeight(0.2),
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      if (item.quantity === 0) {
                        Alert.alert('Atleast 1 item should be in cart');
                      } else {
                        this.context.updateQuantityCategory(
                          item.id,
                          --item.quantity,
                        );
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
                      this.context.updateQuantityCategory(
                        item.id,
                        ++item.quantity,
                      );
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
      // )}
      // </MyContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  categoriesList: {
    backgroundColor: '#E5E5E5',
  },
  placeholderStyling: {
    marginLeft: 20,
    fontWeight: '700',
    fontSize: responsiveFontSize(2),
  },
  searchIconStyle: {
    marginLeft: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: responsiveHeight(7),
    width: responsiveWidth(100),
  },
  ourCategory: {
    fontSize: responsiveFontSize(3),
    fontWeight: '500',
    letterSpacing: 1,
    marginLeft: responsiveWidth(28),
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

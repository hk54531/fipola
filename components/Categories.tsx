/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
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
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Ionions from 'react-native-vector-icons/Ionicons';

const categories = [
  {
    id: 1,
    title: 'Chicken',
    img: require('../assets/categories/1.png'),
  },
  {
    id: 2,
    title: 'Lamb & Goat',
    img: require('../assets/categories/2.png'),
  },
  {
    id: 3,
    title: 'Sea Food',
    img: require('../assets/categories/3.png'),
  },
  {
    id: 4,
    title: 'Marinades',
    img: require('../assets/categories/4.png'),
  },
  {
    id: 5,
    title: 'Cold Cuts',
    img: require('../assets/categories/5.png'),
  },
  {
    id: 6,
    title: 'Ready to Fry',
    img: require('../assets/categories/6.png'),
  },
  {
    id: 7,
    title: 'Relishes',
    img: require('../assets/categories/7.png'),
  },
  {
    id: 8,
    title: 'Eggs',
    img: require('../assets/categories/8.png'),
  },
  {
    id: 9,
    title: 'Combos',
    img: require('../assets/categories/9.png'),
  },
  {
    id: 10,
    title: 'BBQ Corner',
    img: require('../assets/categories/10.png'),
  },
  {
    id: 11,
    title: 'Imported',
    img: require('../assets/categories/11.png'),
  },
  {
    id: 12,
    title: 'Dry Fish',
    img: require('../assets/categories/12.png'),
  },
  {
    id: 13,
    title: 'Grill House',
    img: require('../assets/categories/13.png'),
  },
  {
    id: 14,
    title: 'Vegan',
    img: require('../assets/categories/14.png'),
  },
];

interface Iprops {
  navigation?: any;
}

interface Istate {
  typedText: any;
  filteredData: any;
}

export default class Categories extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      typedText: '',
      filteredData: null,
    };
  }

  handlePress = (item: any) => {
    // console.log(item);
    this.props.navigation.navigate('eachcategory', item);
  };

  filterData = (text: any) => {
    this.setState({typedText: text});
    if (this.state.typedText) {
      const filteredData = categories.filter(item =>
        item.title.toLowerCase().includes(text.toLowerCase()),
      );
      this.setState({filteredData});
    } else {
      this.setState({filteredData: null});
    }
  };
  render() {
    return (
      <View
        style={{height: responsiveHeight(100), width: responsiveWidth(100)}}>
        <View>
          <View style={styles.TitleContainer}>
            <Text style={styles.ourCategory}>Our Category</Text>
          </View>
          <View style={styles.searchContainer}>
            <TouchableOpacity>
              <Ionions
                name="search-outline"
                size={30}
                color="grey"
                style={styles.searchIconStyle}
              />
            </TouchableOpacity>
            <TextInput
              style={styles.placeholderStyling}
              placeholder="Search..."
              onChangeText={text => {
                this.filterData(text);
              }}
            />
          </View>
          <View
            style={{
              height: responsiveHeight(76),
            }}>
            <FlatList
              data={
                this.state.filteredData === null
                  ? categories
                  : this.state.filteredData
              }
              showsVerticalScrollIndicator={false}
              numColumns={2}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => {
                    this.handlePress(item);
                  }}>
                  <Image
                    source={item.img}
                    style={{
                      // height: responsiveHeight(18),
                      // width: responsiveWidth(36),
                      marginLeft: 40,
                      marginTop: 40,
                      marginBottom: 10,
                    }}
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: responsiveScreenFontSize(2),
                      fontWeight: '600',
                      marginLeft: 40,
                      letterSpacing: 1,
                    }}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item: any) => item.id}
            />
          </View>
        </View>
      </View>
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
    fontSize: responsiveScreenFontSize(3),
    fontWeight: '700',
    letterSpacing: 1,
  },
  TitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: responsiveHeight(10),
    width: responsiveWidth(100),
    backgroundColor: '#F5BF45',
  },
});

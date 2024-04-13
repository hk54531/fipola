/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {Component} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
//import MainPage from './MainPage';
import {Image, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MainPage from './MainPage';
import OrderHistory from './OrderHistory';
import TabClass from './Tab';

const Drawerr = createDrawerNavigator();

export default class Drawer extends Component {
  Home = () => {
    return <Text>About screen</Text>;
  };
  About = () => {
    return <Text>about screen</Text>;
  };
  faq = () => {
    return <Text>faq screen</Text>;
  };
  contact = () => {
    return <Text>contact screen</Text>;
  };
  wheels = () => {
    return <Text>fipola on wheels screen</Text>;
  };
  history = () => {
    return <Text>history screen</Text>;
  };
  tc = () => {
    return <Text>terms and conditions screen</Text>;
  };
  certificates = () => {
    return <Text>certificates screen</Text>;
  };
  franchise = () => {
    return <Text>franchise screen</Text>;
  };

  render() {
    return (
      <Drawerr.Navigator
        drawerContent={props => {
          //to add images, image backgroundimage,views text inside a drawer navigation we use drawer content
          return (
            // <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
              {/* this scroll view acts like a div and contains all the data before list of drawer items */}
              <View>
                <View
                  style={{
                    backgroundColor: '#F5BF45',
                    height: responsiveHeight(18),
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    bottom: responsiveHeight(0.5),
                  }}>
                  <Image
                    source={require('../assets/logo_png1.png')}
                    style={{
                      height: responsiveHeight(6),
                      width: responsiveWidth(30),
                    }}
                  />
                </View>
                <DrawerItemList {...props} />
                {/* here this represent list of drawer components if we want to do any task before items we have write before this line
              the content should come after the list like signout button and app version should mention after this line
              */}
                <TouchableOpacity
                  style={{
                    backgroundColor: '#F5BF45',
                    height: responsiveHeight(6),
                    width: responsiveWidth(50),
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: responsiveWidth(10),
                    marginTop: responsiveHeight(3),
                  }}>
                  <Text
                    style={{
                      color: 'white',
                    }}>
                    Sign Out
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{
                    marginLeft: responsiveWidth(22),
                    marginTop: responsiveHeight(3),
                  }}>
                  App Version 3.4.7
                </Text>
              </View>
            </DrawerContentScrollView>
            // </View>
          );
        }}
        // here for the home screen we connected with tab navigation with the component as tabclass

        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          drawerLabelStyle: {
            color: 'black', //to change text color
          },
        }}>
        <Drawerr.Screen
          name="Home"
          component={MainPage}
          options={{
            // to add icons in drawer navigation
            title: 'Home',
            drawerIcon: ({focused, size}) => (
              <Ionicons
                name="md-home"
                size={size}
                color={focused ? '#F5BF45' : '#ccc'}
              />
            ),
          }}
        />
        <Drawerr.Screen
          name="About Us"
          component={this.About}
          options={{
            drawerIcon: ({focused, size}) => (
              <Ionicons
                name="information-circle"
                size={size}
                color={focused ? '#F5BF45' : '#ccc'}
              />
            ),
          }}
        />
        <Drawerr.Screen
          name="FAQ'S"
          component={this.faq}
          options={{
            drawerIcon: ({focused, size}) => (
              <FontAwesome5
                name="question-circle"
                size={size}
                color={focused ? '#F5BF45' : '#ccc'}
              />
            ),
          }}
        />
        <Drawerr.Screen
          name="Contact"
          component={this.contact}
          options={{
            drawerIcon: ({focused, size}) => (
              <FontAwesome5
                name="headphones"
                size={size}
                color={focused ? '#F5BF45' : '#ccc'}
              />
            ),
          }}
        />
        <Drawerr.Screen
          name="fipola On Wheels"
          component={this.wheels}
          options={{
            drawerIcon: ({focused, size}) => (
              <Feather
                name="truck"
                size={size}
                color={focused ? '#F5BF45' : '#ccc'}
              />
            ),
          }}
        />
        <Drawerr.Screen
          name="orderhistory"
          component={OrderHistory}
          options={{
            drawerIcon: ({focused, size}) => (
              <Entypo
                name="back-in-time"
                size={size}
                color={focused ? '#F5BF45' : '#ccc'}
              />
            ),
          }}
        />
        <Drawerr.Screen
          name="Term & Conditions"
          component={this.tc}
          options={{
            drawerIcon: ({focused, size}) => (
              <FontAwesome5
                name="file-alt"
                size={size}
                color={focused ? '#F5BF45' : '#ccc'}
              />
            ),
          }}
        />
        <Drawerr.Screen
          name="Certificates"
          component={this.certificates}
          options={{
            drawerIcon: ({focused, size}) => (
              <MaterialCommunityIcons
                name="file-certificate"
                size={size}
                color={focused ? '#F5BF45' : '#ccc'}
              />
            ),
          }}
        />
        <Drawerr.Screen
          name="franchise"
          component={this.franchise}
          options={{
            drawerIcon: ({focused, size}) => (
              <Entypo
                name="shop"
                size={size}
                color={focused ? '#F5BF45' : '#ccc'}
              />
            ),
          }}
        />
      </Drawerr.Navigator>
    );
  }
}

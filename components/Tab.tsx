/* eslint-disable react/no-unstable-nested-components */
import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Categories from './Categories';
import Cart from './Cart';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Drawer from './Drawer';
import MyContext from './ContextAPI/Context';

const Tab = createBottomTabNavigator();

export default class TabClass extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {value => (
          <Tab.Navigator
            initialRouteName="home"
            screenOptions={({route}) => ({
              tabBarHideOnKeyboard: true, // to hide bottom navigator while opening keyboard
              tabBarShowLabel: false, //for disabling the label names in tab like home,category,cart
              headerShown: false, //to hide the name of the screen at top
              tabBarStyle: {backgroundColor: '#F5BF45', zIndex: 0}, //for tab bar color
              tabBarIcon: ({focused, size}) => {
                let iconName;

                if (route.name === 'home') {
                  iconName = focused ? 'home' : 'home-outline';
                  size = focused ? 30 : 25;
                } else if (route.name === 'category') {
                  iconName = focused ? 'apps' : 'apps-outline';
                  size = focused ? 30 : 25;
                } else if (route.name === 'cart') {
                  iconName = focused ? 'cart' : 'cart-outline';
                  size = focused ? 30 : 25;
                } // @ts-expect-error
                return <Ionicons name={iconName} size={size} color={'white'} />;
              },
            })}>
            <Tab.Screen name="home" component={Drawer} />
            <Tab.Screen name="category" component={Categories} />
            <Tab.Screen
              name="cart"
              component={Cart}
              // {
              //   value.cart.length ===0 ? null :options={{tabBarBadge: value.cart.length}}
              // }

              //@ts-expect-error
              options={
                value.cart.length === 0
                  ? null
                  : {tabBarBadge: value.cart.length}
              }
            />
          </Tab.Navigator>
        )}
      </MyContext.Consumer>
    );
  }
}

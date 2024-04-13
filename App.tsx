import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import Splash from './components/Splash';
import Otpui from './components/Otpui';
import OtpForm from './components/OtpForm';
import TabClass from './components/Tab';
import ProfileEditPage from './components/ProfileEditPage';
import Chat from './components/Chat';
import Drawer from './components/Drawer';
// import IndividualComponent from './components/IndividualComponent';
import TestComponent from './components/TestComponent';
import Category from './components/Category';
import IndividualComponent from './components/IndividualComponent';
import CategoryIndividualPage from './components/CategoryIndividualPage';
import AddressListPage from './components/AddressListPage';
import AddNewAddress from './components/AddNewAddress';
import Payment from './components/Payment';
import Congratulations from './components/Congratulations';
import OrderHistory from './components/OrderHistory';
import OrdersPage from './components/OrdersPage';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="tab">
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="otpui" component={Otpui} />
          <Stack.Screen name="otpform" component={OtpForm} />
          <Stack.Screen name="tab" component={TabClass} />
          <Stack.Screen name="drawer" component={Drawer} />

          {/* as we added tab navigation we should add drawer navigation too here */}
          <Stack.Screen name="edit" component={ProfileEditPage} />
          <Stack.Screen name="chat" component={Chat} />
          <Stack.Screen name="eachcategory" component={Category} />
          <Stack.Screen name="testcomponent" component={TestComponent} />
          <Stack.Screen
            name="individualcomponent"
            component={IndividualComponent}
          />
          <Stack.Screen
            name="categoryindividualpage"
            component={CategoryIndividualPage}
          />
          <Stack.Screen name="addresslistpage" component={AddressListPage} />
          <Stack.Screen name="addnewaddress" component={AddNewAddress} />
          <Stack.Screen name="payment" component={Payment} />
          <Stack.Screen name="congratulations" component={Congratulations} />
          <Stack.Screen name="orderhistory" component={OrderHistory} />
          <Stack.Screen name="orderspage" component={OrdersPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

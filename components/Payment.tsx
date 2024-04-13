import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight, Alert} from 'react-native';

import RazorpayCheckout from 'react-native-razorpay';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

interface Iprops {
  navigation?: any;
}

class Payment extends Component<Iprops> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={{
            backgroundColor: '#F5BF45',
            height: responsiveHeight(6),
            width: responsiveWidth(20),
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {
            var options = {
              description: 'fipola purchase',
              image:
                'https://i.postimg.cc/CL7p9Cv9/3135715-removebg-preview.png',
              currency: 'INR',
              // key: 'rzp_test_locuRaWt3KL2uf',
              // key: 'rzp_test_X2oJM0KQrdklVO', //sharat key
              key: 'rzp_test_7ESJUaZ1N8iI5f',
              amount: 1000,
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
          }}>
          <Text style={styles.text}>Continue</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Payment;

// import React, {Component} from 'react';
// import {StyleSheet, Text, View, TouchableHighlight, Alert} from 'react-native';

// import RazorpayCheckout from 'react-native-razorpay';
// import {
//   responsiveHeight,
//   responsiveWidth,
// } from 'react-native-responsive-dimensions';

// interface Iprops {
//   navigation?: any;
// }

// class Payment extends Component<Iprops> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableHighlight
//           style={{
//             backgroundColor: '#F5BF45',
//             height: responsiveHeight(6),
//             width: responsiveWidth(20),
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//           onPress={() => {
//             var options = {
//               description: 'fipola purchase',
//               image:
//                 'https://i.postimg.cc/CL7p9Cv9/3135715-removebg-preview.png',
//               currency: 'INR',
//               // key: 'rzp_test_locuRaWt3KL2uf',
//               // key: 'rzp_test_X2oJM0KQrdklVO', //sharat key
//               key: 'rzp_test_7ESJUaZ1N8iI5f',
//               amount: 1000,
//               // external: {
//               //   wallets: ['paytm'],
//               // },
//               name: 'Hari kishan Veeranki',
//               prefill: {
//                 email: 'harikishanveeranki@razorpay.com',
//                 contact: '8297354490',
//                 name: 'hari kishan veeranki',
//               },
//               theme: {color: '#F5BF45'},
//               order_id:
//                 'order_' + Math.floor(Math.random() * 1000000).toString(),
//               //'order_LN3G6yuRR4VFyA'
//             };

//             RazorpayCheckout.open(options)
//               .then(data => {
//                 // handle success
//                 Alert.alert(`Success: ${data.razorpay_payment_id}`);
//               })
//               .catch(error => {
//                 // handle failure
//                 Alert.alert(`Error: ${error.code} | ${error.description}`);
//                 setTimeout(() => {
//                   this.props.navigation.navigate('congratulations');
//                 }, 1000);
//               });
//             RazorpayCheckout.onExternalWalletSelection((data: any) => {
//               Alert.alert(`External Wallet Selected: ${data.external_wallet} `);
//               setTimeout(() => {
//                 this.props.navigation.navigate('congratulations');
//               }, 900);
//             });
//           }}>
//           <Text style={styles.text}>Continue</Text>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
//   text: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default Payment;

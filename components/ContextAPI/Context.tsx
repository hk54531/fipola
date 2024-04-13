import {createContext} from 'react';

interface Iprops {
  individualItemdata: any;
  flatListData2: any;
  flatlistData: any;
  updateQuantity: any;
  addresses: any;
  updateQuantityCategory: any;
  updateQuantityList2: any;
  cart: any;
  addToCart: any;
  removefromCart: any;
  filterCart: any;
  deleteFromCart: any;
  addAddresses: any;
  removeAddresses: any;
  orders: any;
  addtoOrders: any;
  emptyCart: any;
}

const MyContext = createContext<Iprops>({
  individualItemdata: null,
  cart: null,
  flatListData2: null,
  flatlistData: null,
  addresses: null,
  orders: null,
  updateQuantity: () => {},
  updateQuantityCategory: () => {},
  updateQuantityList2: () => {},
  addToCart: () => {},
  removefromCart: () => {},
  filterCart: () => {},
  deleteFromCart: () => {},
  addAddresses: () => {},
  removeAddresses: () => {},
  addtoOrders: () => {},
  emptyCart: () => {},
});

export default MyContext;

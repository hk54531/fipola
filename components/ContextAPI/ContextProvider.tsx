import React, {Component} from 'react';
import MyContext from './Context';
import {individualItemdata, flatListData2, flatlistData} from '../categoryData';

interface Iprops {
  children: any;
}
interface Istate {
  individualItemdata: any;
  flatListData2: any;
  flatlistData: any;
  cart: any;
  addresses: any;
  orders: any;
}

export class ContextProvider extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      individualItemdata: individualItemdata,
      flatListData2: flatListData2,
      flatlistData: flatlistData,
      cart: [],
      addresses: [],
      orders: '',
    };
  }

  addAddresses = (address: any) => {
    this.setState({addresses: [...this.state.addresses, address]}, () =>
      console.log(this.state.addresses),
    );
  };

  removeAddresses = (address: any) => {
    let filteredData = this.state.addresses.filter(
      (item: any) => item !== address,
    );
    this.setState({addresses: [...filteredData]});
  };

  addtoOrders = (item: any) => {
    console.log(item);
    this.setState({orders: [...this.state.orders, item]}, () => {
      console.log(this.state.orders);

      const newData = this.state.flatlistData.map((itemm: any) =>
        itemm ? {...itemm, quantity: 0} : itemm,
      );
      this.setState({flatlistData: newData});
    });
  };

  emptyCart = () => {
    this.setState({cart: []}, () => console.log(this.state.cart));
  };

  addToCart = (item: any) => {
    let someCd = this.state.cart.find(
      (CartItem: any) => CartItem.id === item.id,
    );

    if (someCd) {
      someCd.quantity = ++someCd.quantity;
    } else {
      this.setState({cart: [...this.state.cart, item]});
    }
    console.log(this.state.cart);
  };

  removefromCart = (item: any) => {
    let someCd = this.state.cart.find(
      (CartItem: any) => CartItem.id === item.id,
    );

    if (someCd) {
      someCd.quantity = --someCd.quantity;
    } else {
      this.setState({cart: [...this.state.cart, item]});
    }
    console.log(this.state.cart);
  };

  filterCart = (id: any) => {
    let filteredData = this.state.cart.filter((item: any) => item.id !== id);
    this.setState({cart: [...filteredData]});
    console.log(this.state.cart);
  };

  deleteFromCart = (id: any) => {
    const newData = this.state.flatlistData.map((item: any) =>
      item.id === id ? {...item, quantity: 0} : item,
    );
    this.setState({flatlistData: newData});

    let filteredData = this.state.cart.filter((item: any) => item.id !== id);
    this.setState({cart: [...filteredData]});
  };

  updateQuantity = (id: any, quantity: any) => {
    const newData = this.state.flatlistData.map((item: any) =>
      item.id === id ? {...item, quantity: quantity} : item,
    );
    this.setState({flatlistData: newData});
  };

  updateQuantityList2 = (id: any, quantity: any) => {
    const newData2 = this.state.flatListData2.map((item: any) =>
      item.id === id ? {...item, quantity: quantity} : item,
    );
    this.setState({flatListData2: newData2});
  };

  updateQuantityCategory = (id: any) => {
    const newDataaa = this.state.individualItemdata[id].data.map(
      (item: any) => {
        return {
          id: item.id,
          title: item.title,
          img: item.img,
          actualPrice: item.actualPrice,
          offPrice: item.offPrice,
          quantity: item.quantity,
        };
      },
    );

    console.log(newDataaa);

    // const newData2 = newDataaa.map((item: any) =>
    //   item.id === id ? {...item, quantity: quantity} : item,
    // );
    this.setState({
      individualItemdata: [...this.state.individualItemdata, {...newDataaa}],
    });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          individualItemdata: this.state.individualItemdata,
          flatListData2: this.state.flatListData2,
          flatlistData: this.state.flatlistData,
          cart: this.state.cart,
          updateQuantity: this.updateQuantity,
          updateQuantityList2: this.updateQuantityList2,
          updateQuantityCategory: this.updateQuantityCategory,
          addToCart: this.addToCart,
          removefromCart: this.removefromCart,
          filterCart: this.filterCart,
          deleteFromCart: this.deleteFromCart,
          addresses: this.state.addresses,
          addAddresses: this.addAddresses,
          removeAddresses: this.removeAddresses,
          orders: this.state.orders,
          addtoOrders: this.addtoOrders,
          emptyCart: this.emptyCart,
        }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default ContextProvider;

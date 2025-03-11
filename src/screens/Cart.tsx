import React, { useMemo } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import CartItem from '../components/CartItem';

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const totalCart = useMemo(() => {
    return cartItems.reduce((accumulator, currentItem) => {
      return accumulator + (currentItem.quantity * currentItem.price)
    }, 0)
  }, [cartItems])

  return (
    <View style={{overflow:'scroll'}}>
      {cartItems.length === 0 &&<Text>Your cart is empty</Text>}
      {cartItems.length > 0 && 
        <FlatList 
          data={cartItems} 
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <CartItem item={item} />} 
        />
      }
      {cartItems.length > 0 &&  <Text style={{fontWeight:'bold', textAlign:'center', backgroundColor: 'lightblue', fontSize: 18, paddingVertical:8}}>Total: ${Number(totalCart).toFixed(2)} </Text>}
    </View>
  );
};

export default Cart;

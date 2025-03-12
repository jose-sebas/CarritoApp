import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text, Image, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';

import { RootStackParamList } from '../App';

import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/reducers/cartSlice';

const ProductCard = ({ product }: any) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList,'ProductList'>>();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    Toast.show({
      type: 'success',
      text1: 'Added to Cart',
      text2: `${product.title} has been added!`,
    });
  };


  return (
    <TouchableOpacity style={{alignItems:'center', marginBottom:16}}  onPress={() => navigation.navigate('ProductDetail', { product })}>
      <Image source={{ uri: product.image }} style={{ width: 100, height: 100 }} />
      <Text style={{width:'80%', textAlign:'center'}}>{product.title}</Text>
      <Text>{`$${product.price}`}</Text>
      <Text numberOfLines={1} style={{width:'80%', color:'grey', fontSize: 10}}>{product.description}</Text>
      <TouchableOpacity style={{backgroundColor:'lightblue', borderRadius:8, padding:8, marginTop: 4}} onPress={handleAddToCart}>
        <Text style={{textAlign:'center'}}>Add to Cart</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductCard;

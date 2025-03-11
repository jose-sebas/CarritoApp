import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/reducers/cartSlice';
import Toast from 'react-native-toast-message';

const ProductDetail = ({route}) => {
  const { product } = route.params;
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
    <View style={{padding:8}}>
      <Text style={{fontSize:16, fontWeight:'bold'}}>{product.title}</Text>
      <Image source={{ uri: product.image }} style={{width: '100%', height: 450, resizeMode: 'contain'}} />
      <Text style={{textAlign:'center', fontSize:14, fontWeight:'bold'}}>{`$${product.price}`}</Text>
      <Text style={{marginVertical: 8}}>{product.description}</Text>
      <TouchableOpacity style={{backgroundColor:'lightblue', borderRadius:8, padding:8}} onPress={handleAddToCart}>
        <Text style={{textAlign:'center'}}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetail;

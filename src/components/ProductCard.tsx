import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../App';

const ProductCard = ({ product }: any) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList,'ProductList'>>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { product })}>
      <Image source={{ uri: product.image }} style={{ width: 100, height: 100 }} />
      <Text>{product.title}</Text>
      <Text>{`$${product.price}`}</Text>
      <TouchableOpacity>
        <Text>Add to Cart</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductCard;

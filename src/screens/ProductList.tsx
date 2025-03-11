import React, { useEffect, useState } from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions';
import ProductCard from '../components/ProductCard';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
  <View style={{flex:1}}>
      <TextInput
        placeholder="Search Products"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id.toString()}
        style={{flex:1}}
      />
      <Text>test</Text>
    </View>
  );
};

export default ProductList;

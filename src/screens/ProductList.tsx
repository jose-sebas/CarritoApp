import React, { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, FlatList, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsRequest } from '../redux/reducers/productSlice';
import ProductCard from '../components/ProductCard';
import { RootState } from '../redux/store';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state: RootState) => state.products);

  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  const filteredProducts = useMemo(() => {
    return products?.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase()))
  }, [products, search]);

  if (loading) return <ActivityIndicator size="large" color="blue" />;
  if (error) return <Text>Error loading products</Text>;

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
    </View>
  );
};

export default ProductList;

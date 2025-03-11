import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import ProductList from './screens/ProductList';
import ProductDetail from './screens/ProductDetail';
import Cart from './screens/Cart';

export type RootStackParamList = {
  ProductList: undefined;
  ProductDetail: { product: any };
  Cart: undefined
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ProductList">
          <Stack.Screen 
            name="ProductList" 
            component={ProductList}
            options={({ navigation }) => ({
              title: 'Product List',
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{ marginRight: 15 }}>
                  <Ionicons name="cart-outline" size={24} color="black" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen 
            name="ProductDetail" 
            component={ProductDetail} 
            options={({ navigation }) => ({
              title: 'Product detail',
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{ marginRight: 15 }}>
                  <Ionicons name="cart-outline" size={24} color="black" />
                </TouchableOpacity>
              ),
            })} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </Provider> 
  );
}

import { useCallback, useMemo } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../redux/reducers/cartSlice";

const CartItem = ({item}) => {
    const dispatch = useDispatch()

    const totalItems  = useMemo(() => {
        return item.quantity * item.price
    }, [item])

    const handleRemoveFromCart = useCallback(() => {
        dispatch(removeFromCart(item.id))
    }, [])

    const handleIncreaseQty = useCallback(() => {
        dispatch(increaseQuantity(item.id))
    }, [])

    const handleDecreaseQty = useCallback(() => {
        dispatch(decreaseQuantity(item.id))
    }, [])
    
    return (
        <View style={{flex:1, paddingHorizontal:12, marginVertical:12}}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <Image source={{ uri: item.image }} style={{width: '20%', height: 100, resizeMode: 'contain'}} />
                <View style={{width:'60%'}}>
                    <Text>{item.title}</Text>
                    <Text>${item.price}</Text>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text> Qty: </Text>
                        <TouchableOpacity style={{marginLeft:16}} onPress={handleDecreaseQty}>
                            <Ionicons style={{fontSize:18}} name="remove-circle"/>
                        </TouchableOpacity>
                        <Text> {item.quantity} </Text>
                        <TouchableOpacity onPress={handleIncreaseQty}>
                            <Ionicons style={{fontSize:18}} name="add-circle"/>
                        </TouchableOpacity>

                    </View>
                    <Text>Total: ${Number(totalItems).toFixed(2)}</Text>
                </View>
                <View style={{width:'10%'}}>
                    <TouchableOpacity onPress={handleRemoveFromCart} >
                        <Ionicons name="close-outline" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                </View>
        </View>
    );
    };

export default CartItem;

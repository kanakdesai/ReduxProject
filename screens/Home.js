import {View, Text, StyleSheet, FlatList, TouchableOpacity, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addItemToCart } from './redux/actions/actions';
export default function Home({navigation}) {
const [data, setData] = useState([])
    const getItems = async() => {
        await axios({
          method: 'GET',
          url: 'https://dummyjson.com/products?limit=10&skip=10&select=title,price',
        }).then(res=>{
          console.log(res.data.products)
          setData(res.data.products)
        }).catch(err=>{
          console.log(err)
        })
      };

  useEffect(() => {
    getItems()
  },[]);

  const dispach = useDispatch()
  const addItem = (item) =>{
    dispach(addItemToCart(item));
  }

  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.cart} onPress={()=>navigation.navigate("Cart")}>
        <Text>Cart</Text>
        <Text>0</Text>
    </TouchableOpacity>
      <FlatList
            style={styles.flatList}
            data={data}
            // key={data.key}
            renderItem={({item, index})=>{
            return(

            <View style={styles.productStyle}>
                <Text>{item.title}</Text>
                <Text>{item.price}</Text>
                <Button onPress={()=>addItem(item)} title='Add to cart'></Button>
            </View>
            )
            }
            }
            horizontal
            pagingEnabled
      ></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15
  },
  productStyle:{
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: '2%',
    padding: 5
  },
  flatList:{
    marginTop: '5%',
    paddingVertical: '5%',
    width: '90%',
    height: '100%'
  },
  cart:{
    width: '20%',
    // height: '5%',
    backgroundColor:'pink',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical: 5
  }
});

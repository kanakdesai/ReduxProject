import { FlatList, StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from './redux/actions/actions';
export default function Cart({navigation}) {
  const item = useSelector(state => state)
  const dispach = useDispatch()
  const removeItem = (index) =>{
    dispach(removeFromCart(index))
  }
  return (
    <View style={styles.container}>
      <Text>Cart</Text>
      <FlatList 
        key={item.id}
        data={item}
        style={styles.flatList} 
        renderItem={({item})=>
            <View style={styles.productStyle}>
                <Text>{item.title}</Text>
                <Text>{item.price}</Text>
                <Button  title='Remove' onPress={()=>removeItem(item)}></Button>
            </View>
            }
      >

      </FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    flatList:{
      marginTop: '5%',
      paddingVertical: '5%',
      width: '90%',
      height: '100%'
    },
    productStyle:{
      borderWidth: 1,
      borderColor: 'black',
      marginVertical: '2%',
      padding: 5
    },
});
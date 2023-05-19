import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

export default function Cart() {

  const name = useSelector((state)=>state.name)
  const age = useSelector((state)=>state.age)
  const city = useSelector((state)=>state.city)
  return (
    <View style={styles.container}>
      <Text>This is name {name.name}</Text>
      <Text>{age.age}</Text>
      <Text>{city.city}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
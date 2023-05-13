import { View, Text, StyleSheet,TextInput, Button} from 'react-native'
import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addAge, addName } from '../store/slice/UserSlice'
export default function Home({navigation}) {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const dispach = useDispatch()
  const SaveDetails=()=>{
      
      dispach(addName(name))
      dispach(addAge(age))
      
  }

  return (
    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput onChangeText={(n)=>setName(n)} style={styles.palceholderSt} placeholder='Name'></TextInput>
      <Text>Age</Text>
      <TextInput onChangeText={(a)=>setAge(a)
      } style={styles.palceholderSt} placeholder='age'></TextInput>
      <Button onPress={()=>navigation.navigate("Cart",SaveDetails())} title='register'></Button>
    </View>

  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    palceholderSt:{
        width: 200,
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        paddingHorizontal: 10
    }
});
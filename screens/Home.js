import { View, Text, StyleSheet,TextInput, Button} from 'react-native'
import React,{useState} from 'react'


export default function Home() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
  return (
    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput onChangeText={(n)=>setName(n)} style={styles.palceholderSt} placeholder='Name'></TextInput>
      <Text>Age</Text>
      <TextInput onChangeText={(a)=>setName(a)
      } style={styles.palceholderSt} placeholder='age'></TextInput>
      <Button title='register'></Button>
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
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React, { useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
export default function Card({number, name,date , color1, color2, color3}) {
  const visa = require('./visa2.png');
  const chip = require('./chip1.png');
  const signal = require('./wifi1.png');
  const [show, setShow] = useState(true)
 


  const Numbers=()=>{
      return(
        <Pressable onPress={()=>setShow(false)}
          style={{
            
            flexDirection: 'row',
            width: 230,
            alignContent: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
            
            paddingVertical: 5
          
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: '100',
              letterSpacing: 1,
             
              fontSize: 20,
              
            }}>
            {number.slice(0, 3)}
          </Text>
          <Text
            style={{
              color: 'white',
              fontWeight: '100',
              letterSpacing: 1,
             
              fontSize: 20
            }}>
            {number.slice(4, 7)}
          </Text>
          <Text
            style={{
              color: 'white',
              fontWeight: '100',
              letterSpacing: 1,
              
              fontSize: 20
            }}>
            {number.slice(8, 11)}
          </Text>
          <Text
            style={{
              color: 'white',
              fontWeight: '100',
              letterSpacing: 1,
              
              fontSize: 20
            }}>
            {number.slice(12, 15)}
          </Text>
        </Pressable>
      )
  }

  const Hidden=()=>{
    return(
      <Pressable onPress={()=>setShow(true)}
        style={{
          
          flexDirection: 'row',
          width: 230,
          alignContent: 'center',
          justifyContent: 'space-between',
          marginTop: 10,
          
          paddingVertical: 5
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: '100',
            letterSpacing: 1,
            // marginTop: 10,
            fontSize: 20
          }}>
          ****
        </Text>
        <Text
          style={{
            color: 'white',
            fontWeight: '100',
            letterSpacing: 1,
            // marginTop: 10,
            fontSize: 20
          }}>
          ****
        </Text>
        <Text
          style={{
            color: 'white',
            fontWeight: '100',
            letterSpacing: 1,
            // marginTop: 10,
            fontSize: 20
          }}>
          ****
        </Text>
        <Text
          style={{
            color: 'white',
            fontWeight: '100',
            letterSpacing: 1,
            // marginTop: 10,
            fontSize: 20
          }}>
          ****
        </Text>
      </Pressable>
    )
}
  return (
    <View>
      <LinearGradient
        colors={[color1, color2, color3]}
        start={{x: 0.8, y: 0}}
        style={{
          paddingHorizontal: '10%',
          height: 220,
          width: 330,
          paddingVertical: '5%',
          borderRadius: 10,
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: '300',
            fontSize: 12,
            marginTop: 10,
            letterSpacing: 2,
          }}>
          Debit Card
        </Text>
        <Text
          style={{
            color: 'white',
            fontWeight: '500',
            fontSize: 12,
            marginTop: 10,
            letterSpacing: 2,
          }}>
          {name.toUpperCase()}
        </Text>
        <Text style={{
           color: 'white',
            fontWeight: '500',
            fontSize: 12,
            marginTop: 10,
            letterSpacing: 6
        }}>{date}</Text>
        {show?<Numbers></Numbers>:<Hidden></Hidden>}
        <Image
          style={{
            width: '20%',
            resizeMode: 'contain',
            top: -220,
          }}
          source={chip}></Image>
        <Image
          source={signal}
          style={{
            width: '10%',
            resizeMode: 'contain',
            bottom: 840,
            alignSelf: 'flex-end',
          }}></Image>
        <Image
          source={visa}
          style={{
            width: '30%',
            resizeMode: 'contain',
            bottom: 1240,
            alignSelf: 'flex-end',
          }}></Image>
      </LinearGradient>
    </View>
  );
}

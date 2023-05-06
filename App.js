import { View, Text } from 'react-native'
import React from 'react'
import Main from './main'
import { Provider } from 'react-redux'
import { myStore } from './screens/redux/store/store'

export default function App() {
  return (
    <Provider store={myStore}>
    <Main></Main>

    </Provider>
  )
}
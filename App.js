import { View, Text } from 'react-native'
import React from 'react'
import Main from './main'
import { Provider } from 'react-redux'
import store from './store/store'
// import { myStore } from './screens/redux/store/store'

export default function App() {
  return (
    <Provider store={store}>
    <Main></Main>

    </Provider>
  )
}
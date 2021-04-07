import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { setValidate } from '../store/Action'


export default function Finish({route, navigation}) {
  const dispatch = useDispatch()
  function home () {
    dispatch(setValidate(''))
    navigation.replace('Home')
  }
  const {name} = route.params
  return(
    <View style={styles.component}>
      <Text style={styles.title}>Congtragulations {name}</Text>
      <Button
        style={styles.button}
        title="Play Again"
        onPress={home}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  component: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    margin: 20,
    fontSize: 20,
    color: 'blue'
  },
  button:{
    width: 50
  }
})
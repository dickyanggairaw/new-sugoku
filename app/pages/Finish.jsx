import React, {useEffect} from 'react'
import { Text, View, Button, StyleSheet, Image, Dimensions } from 'react-native'
import { useDispatch } from 'react-redux'
import { setValidate } from '../store/Action'


export default function Finish({route, navigation}) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setValidate(false))
  }, [])

  const {name} = route.params
  return(
    <View style={styles.component}>
      <Image source={{ uri: "https://i.pinimg.com/originals/15/71/77/1571779bedfe3de62f6440273d7beb02.gif" }} style={styles.image} /> 
      <Text style={styles.title}>{name}</Text>
      <Button
        color= 'blue'
        title="Play Again"
        onPress={() => navigation.replace('Home')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  component: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'black'
  },
  title: {
    margin: 20,
    fontSize: 20,
    color: 'white'
  },
  image: {
    marginTop: 100,
    width: Dimensions.get('window').width * 0.8, 
    height: Dimensions.get('window').width * 0.4
  }
})
import React from 'react'
import {TextInput, StyleSheet, View, Text, ImageBackground } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setBoard } from '../store/Action'

function BoardCol (props) {
  const dispatch = useDispatch()
  const { boards } = useSelector(state => state)
  const { boardCol } = props
  const image= { uri: "https://images.pexels.com/photos/220166/pexels-photo-220166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
  function handleInput(input) {
    const InitialBoard = boards.map(board => [...board])
    InitialBoard[boardCol.y][boardCol.x] = +input
    dispatch(setBoard(InitialBoard))
  }
  return (
    <View>
      {
        boardCol.x % 3 === 2 ?
        <View style={ styles.border }>
          <ImageBackground source={image} style={styles.image}>
            {
              boardCol.value === 0 ? <TextInput style={styles.input} keyboardType={'number-pad'} maxLength={1} onChangeText={(text) => handleInput(text)} /> :
              <Text style={styles.text}>{boardCol.value}</Text>
            }
          </ImageBackground>
        </View> :
        <View style={ styles.border2 }>
        <ImageBackground source={image} style={styles.image}>
          {
            boardCol.value === 0 ? <TextInput style={styles.input} keyboardType={'number-pad'} maxLength={1} onChangeText={(text) => handleInput(text)} /> :
            <Text style={styles.text}>{boardCol.value}</Text>
          }
        </ImageBackground>
      </View>
      }
    </View>         
  )
}

const styles = StyleSheet.create({
  border: {
    height: 40, 
    borderColor: 'black', 
    borderWidth: 1, 
    width: 40,
    backgroundColor: 'yellow',
    marginRight: 5
  },
  border2: {
    height: 40, 
    borderColor: 'black', 
    borderWidth: 1, 
    width: 40,
    backgroundColor: 'yellow'
  },
  input: {
    textAlign: 'center',
    padding: 5,
    color: 'blue'
  },
  text: {
    textAlign: 'center',
    padding: 5,
    color: 'black'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: 39,
    width: 39
  },
});
export default BoardCol
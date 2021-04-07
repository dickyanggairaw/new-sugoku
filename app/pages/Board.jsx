import React, { useEffect } from 'react'
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import BoardGame from '../components/Board'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBoard, validated, auto } from '../store/Action'

export default function Board ({route, navigation}) {
  const dispatch = useDispatch()
  const { boards, loading, validate, initialBoard } = useSelector(state => state)
  useEffect(() => {
    dispatch(fetchBoard(dificult))
  }, [])
  useEffect(() => {
    if(validate) {
      if(validate === 'solved'){
        navigation.replace('Finish', {
          name
        })
      }else {
        alert(validate)
      }
    }    
  }, [validate])
  const { name, dificult} = route.params
  function validateBoard () {
    dispatch(validated(boards))
  }
  function autoSolve() {
    dispatch(auto(initialBoard))
  }
  return(
    <View style={styles.board}>
      {
        loading ? <Image source={{ uri: "https://cms.qz.com/wp-content/uploads/2016/09/loading.gif?quality=75&strip=all&w=1900&h=1068" }} style={styles.image} /> :
        boards.map((board, index) => {
        const boardRows ={
          board,
          y: index
        }
        return (
            index % 3 === 2 ? <BoardGame boardRows={boardRows} key={index} /> :
            <BoardGame boardRows={boardRows} key={index} />
        )          
        })
      }
      <View style={styles.buttonRow}>
        <View style={styles.button}>
          <Button
            style={styles.button2}
            title="Validate"
            onPress={validateBoard}
          />
        </View>  
        <View style={styles.button}>
          <Button
            title="autoSolve"
            onPress={autoSolve}
          />
        </View> 
      </View>         
    </View>
  )
}

const styles = StyleSheet.create({
  board:{
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  button: {
    margin:10
  },
  buttonRow: {
    flexDirection: 'row'
  },
  button2: {
    backgroundColor: 'red'
  },
  image: {
    width: 305, 
    height: 159
  }
})
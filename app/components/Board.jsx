import React from 'react'
import { StyleSheet, View } from 'react-native'
import BoardCol from './BoardCol'

function Board (props) {
  const {boardRows} = props
  return (
    <View>
      {
        boardRows.y % 3 === 2 ? 
        <View style={styles.board}>
          {
            boardRows.board.map((boardRow,index) => {
              const boardCol = {
                value: boardRow,
                y: boardRows.y,
                x: index
              }
              return <BoardCol boardCol={boardCol} key={index}></BoardCol>
            })
          }
        </View> :
        <View style={styles.board2}>
          {
            boardRows.board.map((boardRow,index) => {
              const boardCol = {
                value: boardRow,
                y: boardRows.y,
                x: index
              }
              return <BoardCol boardCol={boardCol} key={index}></BoardCol>
            })
          }
        </View>
        }      
    </View>
  )
}

const styles = StyleSheet.create({
  board: {
    flexDirection: 'row',
    marginBottom: 5
  },
  board2: {
    flexDirection: 'row'
  }
});


export default Board
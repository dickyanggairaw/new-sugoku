import React, {useState} from 'react'
import { Button, View, Text, TextInput, Picker, StyleSheet } from 'react-native';

export default function Home ({navigation}) {
  const [name, setName] = useState('')
  const [dificult, setDificult] = useState('easy')

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>User Name</Text>
        <TextInput style={styles.input} onChangeText={(text) => setName(text)}></TextInput>
        <Picker selectedValue={dificult} style={styles.select} onValueChange={(itemValue) => setDificult(itemValue)}>
          <Picker.Item label="easy" value="easy" />
          <Picker.Item label="medium" value="medium" />
          <Picker.Item label="hard" value="hard" />
        </Picker>
        <Button
          title="Play Game"
          onPress={() => navigation.navigate('Board', {
            name: name,
            dificult: dificult
          })}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  input: {
    width: 200, 
    height: 50, 
    borderWidth: 1, 
    margin: 10, 
    padding: 10,
    borderRadius: 10
  },
  select: {
    height: 50,
    width: 150, 
    marginBottom: 10,
    textAlign: 'center'
  },
  row: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center'
  },
})
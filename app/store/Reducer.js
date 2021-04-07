import { State } from "react-native-gesture-handler"
import store from "."

const initialState = {
  boards: [],
  loading: false,
  validate: '',
  initialBoard: []
}

export default function reducer (state = initialState, action) {
  const {type, payload} = action
  if(type === "boards/setBoards") {
    return {...state, boards: payload}
  }else if(type === "loading/setLoading") {
    return {...state, loading: payload}
  }else if(type === "validate/setValidate") {
    return {...state, validate: payload}
  }else if(type === "initialValidate/setInitialValidate") {
    return {...state, initialBoard: payload}
  }
  return state
}
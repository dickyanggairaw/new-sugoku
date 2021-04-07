const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '')

const encodeParams = (params) => 
  Object.keys(params)
  .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
  .join('&');

export function fetchBoard (dificult) {
  return (dispatch) => {
    dispatch(setLoading(true))
    fetch("https://sugoku.herokuapp.com/board?difficulty=" + dificult)
      .then(res => res.json())
      .then(res =>{
        dispatch(setBoard(res.board))
        dispatch(setInitialBoard(res.board.map(data=> [...data])))
      })
      .catch(err => console.log(err))
      .finally(_ => dispatch(setLoading(false)))
  }
}

export function validated(boards) {
  const data = {
    board: boards
  }
  return (dispatch) => {
    fetch('https://sugoku.herokuapp.com/validate', {
    method: 'POST',
    body: encodeParams(data),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  })
    .then(response => response.json())
    .then(response => {
      if(response.status === "solved"){
        dispatch(setValidate(true))
      }
      alert(response.status)
    })
    .catch(console.warn)
  }  
}

export function auto(boards) {
  const data = {
    board: boards
  }
  return (dispatch) => {
    fetch('https://sugoku.herokuapp.com/solve', {
    method: 'POST',
    body: encodeParams(data),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  })
    .then(response => response.json())
    .then(response => dispatch(setBoard(response.solution)))
    .catch(console.warn)
  }  
}

export function setBoard (payload) {
  return {type: "boards/setBoards", payload}
}

export function setLoading (payload) {
  return {type: "loading/setLoading", payload}
}
export function setValidate (payload) {
  return {type: "validate/setValidate", payload}
}
export function setInitialBoard (payload) {
  return {type: "initialValidate/setInitialValidate", payload}
}
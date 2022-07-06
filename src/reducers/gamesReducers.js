const initState = {
  popular: [],
  newGames: [],
  upcoming: []
}

const gamesReducers = (state=initState, action) => {
  switch(action.type){
    case "FETCH_GAMES":
      return {...state} //return {...state, ..action.payload}
    default:
      return {...state}
  }
}

//ACTION
/*const fetchGames = userData => {
  return {
    type: "FETCH_GAMES",
    payload: userData
  }
}*/



export default gamesReducers
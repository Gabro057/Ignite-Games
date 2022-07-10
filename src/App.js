import React, { useEffect } from "react"
import { useDispatch } from 'react-redux'
import { loadGames } from './actions/gamesAction'


//import linkGames from "./api"

function App() {  
  //FETCH GAMES
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Hello IGNITE :)</h1>
      
    </div>
  );
}

/*<label>Link:</label>
      <p>{linkGames}</p>*/

export default App;

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { loadGames } from '../actions/gamesAction'

const Home = () => {
  //FETCH GAMES
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  return (
    <>
      <h1>HOME</h1>
    </>
  )
}

export default Home
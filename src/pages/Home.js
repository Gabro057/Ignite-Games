import React, { useEffect } from 'react';
import GameDetail from '../components/GameDetail';

import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../actions/gamesAction'
// Components
import Game from '../components/Game';
// Styling and animation
import styled from 'styled-components'
//import { motion } from "framer-motion"
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion/dist/framer-motion'
import { useLocation } from 'react-router-dom'

import { fadeIn } from '../animations';

const Home = () => {
  //get the current location
  const location = useLocation()
  const pathId = location.pathname.split("/")[2]

  console.info("location", location)
  console.info("pathId", pathId)
  //FETCH GAMES
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  // Get that data back
  const { popular, newGames, upcoming, searched } = useSelector(state => state.games)
  // popular.map(game => )
  
  return (
    <GameList variants={fadeIn} initial='hidden' animate='show'>     
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {/*<GameDetail/>*/}
          { pathId && <GameDetail pathId={pathId} /> }
        </AnimatePresence>

        { searched.length ? (
          <div className="searched">
            <h2>Searched games</h2>
            <Games>
              { searched.map(game => (
                <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />
              )) }
            </Games>
          </div>
        ) : ''}
        <h2>Upcoming games</h2>
        <Games>
          { upcoming.map(game => (
            <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />
          )) }
        </Games>
        <h2>Popular games</h2>
        <Games>
          { popular.map(game => (
            <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />
          )) }
        </Games>
        <h2>New games</h2>
        <Games>
          { newGames.map(game => (
            <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />
          )) }
        </Games>
      </AnimateSharedLayout>
    </GameList>
  )
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;

  h2 {
    padding: 5rem 0rem;
  }
`
const Games = styled(motion.div)`
  display: grid;
  min-height: 80vh;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`

export default Home
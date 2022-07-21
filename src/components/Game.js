import React from 'react'
// Styling and animation
import styled from 'styled-components'
import { motion } from 'framer-motion/dist/framer-motion'
// Redux
import { useDispatch } from 'react-redux'
import { loadDetail } from '../actions/detailAction'
import { Link } from 'react-router-dom'

const Game = ({ name, id, released, image }) => {
  const dispatch = useDispatch()
  const loadDetailHandler = () => {
    dispatch(loadDetail(id))
  }

  return (
    <StyledGame id={id} onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={image} alt={name}/>
      </Link>
    </StyledGame>
  )
}

const StyledGame = styled(motion.div)`
  position: relative;
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
  text-align: center;
  border-radius: .5rem;
  cursor: pointer;

  img {
    position: absolute;
    width: 100%;
    height: 70%;
    bottom: 0;
    left: 0;
    object-fit: cover;
    border-radius: 0 0 .5rem .5rem;
  }
`

export default Game
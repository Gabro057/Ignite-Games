import React from 'react'
import { smallImage } from '../util'
// Styling and animation
import styled from 'styled-components'
import { motion } from 'framer-motion/dist/framer-motion'
// Redux
import { useDispatch } from 'react-redux'
import { loadDetail } from '../actions/detailAction'
import { Link } from 'react-router-dom'

import { popup } from '../animations';

const Game = ({ name, id, released, image }) => {
  const stringPathId = id.toString()
  console.info("stringPathId", stringPathId)
  const dispatch = useDispatch()
  const loadDetailHandler = () => {
    document.body.style.overflow = 'hidden' // potlaceni posuvniku na hlavni strance
    dispatch(loadDetail(id))
  }

  return (
    <StyledGame variants={popup} initial="hidden" animate="show" layoutId={stringPathId} onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img layoutId={`image ${stringPathId}`} src={smallImage(image, 640)} alt={name}/>
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
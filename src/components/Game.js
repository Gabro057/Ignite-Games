import React from 'react'
// Styling and animation
import styled from 'styled-components'
import { motion } from 'framer-motion/dist/framer-motion'

export default function Game({ name, id, released, image }) {
  return (
    <StyledGame id={id}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image}  alt={name}/>
    </StyledGame>
  )
}

const StyledGame = styled(motion.div)`
  position: relative;
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
  text-align: center;
  border-radius: 1rem;

  img {
    position: absolute;
    width: 100%;
    height: 70%;
    bottom: 0;
    left: 0;
    object-fit: cover;
    border-radius: 0 0 1rem 1rem;
  }
`

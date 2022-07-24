import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion/dist/framer-motion'
import logo from '../img/logo.svg'

export default function Nav() {
  return (
    <StyledNav>
      <Logo>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <div className="search">
        <input type="text" />
        <button>Search</button>
      </div>

    </StyledNav>
  )
}


const StyledNav = styled(motion.div) `
  padding: 3rem 5rem;
  text-align: center;

  input {
    width: 30%;
    font-size: 1.5rem;
    padding: .5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0 0 30px rgba(0, 0, 0, .2);    
  }

  button {
    font-size: 1.5rem;
    border: none;
    padding: .5rem 2rem;
    cursor: pointer;
    background-color: #ff7676;
    color: white;
  }
`

const Logo = styled(motion.div) `
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;

  img {
    height: 2rem;
    width: 2rem;
  }
`
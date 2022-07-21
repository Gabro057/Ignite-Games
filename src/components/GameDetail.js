import React from 'react'
// Styling
import styled from 'styled-components'
import { motion } from 'framer-motion/dist/framer-motion'
// Redux
import { useSelector } from 'react-redux'
//import { gameDetailsURL } from '../api'

const GameDetail = () => {
	// Data
	const { screen, game } = useSelector(state => state.detail)

	return ( 
		<CardShadow>
			<Detail>
				<Stats>
					<div className='rating'>
						<h3>{ game.name }</h3>
						<p>Rating: { game.rating }</p>
					</div>
					<Info>
						<h3>Platforms</h3>
						<Platforms>
							{ game.platforms && game.platforms.map(data => (
								<h3 key={data.platform.id}>{ data.platform.name }</h3>
							)) }
						</Platforms>						
					</Info>
				</Stats>  
				<Media>
					<img src={ game.background_image } alt={ game.background_image } />
				</Media>
				<Description>
					<p>{ game.description_raw }</p>
				</Description>
				<Gallery>
					{ screen.results && screen.results.map(screen => (
						<img src={screen.image} key={screen.id} alt="{screen.image}" />
					))}
				</Gallery>
			</Detail> 
		</CardShadow>
	)
}

const CardShadow = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	min-height: 100vh;
	overflow-y: scroll;
	background: rgba(0,0,0,0.5);
	z-index: 1;

	&::-webkit-scrollbar-thumb {
		background-color: #ff7676;
	}

	&::-webkit-scrollbar-track {
		background: white;
	}
`;

const Detail = styled(motion.div)`
	position: absolute;
	left: 10%;
	width: 80%;
	border-radius: 1rem;
	padding: 2rem 5rem;
	background: #f0f0f0;
	color: #888;

	img {
		width: 80%;
	}
`;

const Stats = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const Info = styled(motion.div)`
	text-align: center;
`

const Platforms = styled(motion.div)`
	display: flex;
	justify-content: space-evenly;

	img {
		margin-left: 3rem;
	}
`

const Media = styled(motion.div)`
	margin-top: 5rem;

	img {
		width: 100%;
		/*height: 60vh;
		object-fit: cover;*/
	}
`

const Description = styled(motion.div)`
	margin: 5rem 0rem;
`

const Gallery = styled(motion.div)`
	
`

export default GameDetail
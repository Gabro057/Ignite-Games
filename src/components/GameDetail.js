import React from 'react'
import { smallImage } from '../util' 

// Styling
import styled from 'styled-components'
import { motion } from 'framer-motion/dist/framer-motion'
// Redux
import { useSelector } from 'react-redux'
//import { gameDetailsURL } from '../api'
import { useNavigate } from 'react-router-dom'
//images
import playstation from '../img/playstation.svg'
import steam from '../img/steam.svg'
import xbox from '../img/xbox.svg'
import nintendo from '../img/nintendo.svg'
import apple from '../img/apple.svg'
import gamepad from '../img/gamepad.svg'
import starEmpty from '../img/star-empty.png'
import starFull from '../img/star-full.png'

const GameDetail = ({ pathId }) => {
	const navigate = useNavigate()
	// ExitDetail
	const exitDetailHandler = e => {
		const element = e.target
		if(element.classList.contains('shadow')){
			document.body.style.overflow = 'auto'
			navigate('/')
		}
	}

	const getPlatform = platform => {
		switch(platform){
			case "Playstation 4":
				return playstation
			case "Xbox One":
				return xbox
			case "PC":
				return steam
			case "Nintendo Switch":
				return nintendo
			case "iOS":
				return apple
			default:
				return gamepad
		}
	}

	const getStars = () => {
		const stars = []
		const rating = Math.floor(game.rating)
		for (let i=0;i<5;i++){
			//i <= rating ? stars.push(<img alt="star" key={i} src={starFull}/>) : stars.push(<img alt="star" key={i} src={starEmpty}/>)
			stars.push(<img alt="star" key={i} src={i <= rating ? starFull : starEmpty}/>)
		}
		return stars
	}

	// Data
	const { screen, game, isLoading } = useSelector(state => state.detail)

	return ( 
		<>
		{!isLoading && (
		<CardShadow className="shadow" onClick={exitDetailHandler}>
			<Detail layoutId={pathId}>
				<Stats>
					<div className='rating'>
						<motion.h3 layoutId={`title ${pathId}`}>{ game.name }</motion.h3>
						<p>Rating: { game.rating }</p>
						<div className="stars">{getStars()}</div>
					</div>
					<Info>
						<h3>Platforms</h3>
						<Platforms>
							{ game.platforms && game.platforms.map(data => (
								<img key={data.platform.id} src={getPlatform(data.platform.name)} alt={data.platform.name} title={data.platform.name} />
							)) }
						</Platforms>						
					</Info>
				</Stats>  
				<Media>
					<motion.img layoutId={`image ${pathId}`} src={ smallImage(game.background_image, 1280) } alt={ game.background_image } />
				</Media>
				<Description>
					<p>{ game.description_raw }</p>
				</Description>
				<div>
					{ screen.results && screen.results.map(screen => (
						<img src={smallImage(screen.image, 1280)} key={screen.id} alt="{screen.image}" />
					))}
				</div>
			</Detail> 
		</CardShadow>
		)}
		</>
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

	.stars {
		display: inline-block;

		img {			
			width: 2rem;
			height: 2rem;		
		}
	}
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

export default GameDetail
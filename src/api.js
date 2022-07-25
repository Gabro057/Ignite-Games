// Base URL

const base_url = `https://api.rawg.io/api/`
const key = `key=${process.env.REACT_APP_RAWG_KEY}`

// Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1  
  return month < 10 ? `0${month}` : month
}

const getCurrentDay = () => {
  const day = new Date().getDate()
  return day < 10 ? `0${day}` : day
}

let month = getCurrentMonth()
let day = getCurrentDay()
let year = new Date().getFullYear()

let currentDate = `${year}-${month}-${day}`
console.log("currentDate=" + currentDate)
let lastYear = `${year-1}-${month}-${day}`
let nextYear = `${year+1}-${month}-${day}`

// Popular games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`
const upcoming_games = `games?dates=${year},${nextYear}&ordering=-added&page_size=10`
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`

export const popularGamesURL = () => `${base_url}${popular_games}&${key}`
export const upcomingGamesURL = () => `${base_url}${upcoming_games}&${key}`
export const newGamesURL = () => `${base_url}${new_games}&${key}`

// Game details
export const gameDetailsURL = game_id => `${base_url}games/${game_id}?${key}`

// Games screenshots
export const gameScreenshotURL = game_id => `${base_url}games/${game_id}/screenshots?${key}`

// Searched game
export const searchGameURL = game_name => `${base_url}games?search=${game_name}&page_size=6&${key}`
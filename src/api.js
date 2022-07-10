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

export const popularGamesURL = () => `${base_url}${popular_games}&${key}`

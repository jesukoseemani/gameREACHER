const base_url = "https://api.rawg.io/api/";


const theMonth = () => {
  const month = new Date().getMonth() + 1;
 if(month < 10){
   return `0${month}`
 }else{
   return month
 }
}

const theDay = () => {
  const day = new Date().getDate();
 if(day < 10){
   return `0${day}`
 }else{
   return day
 }
}

const currentYear = new Date().getFullYear();
const currentDay = theDay();
const currentMonth = theMonth();
 
const thisYearDate= `${currentYear}-${currentMonth}-${currentDay}`
const lastYearDate= `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYearDate= `${currentYear + 1}-${currentMonth}-${currentDay}`





const popular_games = `games?dates=${lastYearDate},${thisYearDate}&ordering=-rating&page_size=10`
const upcoming_games = `games?dates=${thisYearDate},${nextYearDate}&ordering=-added&page_size=10`;
const newGames = `games?dates=${lastYearDate},${thisYearDate}&ordering=-released&page_size=10`;


export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

export const gameDetailsURL = (id) => `${base_url}games/${id}`
export const screenshotDetailsURL = (id) => `${base_url}games/${id}/screenshots`
export const searchGamesURL = (game_name) => `${base_url}games?search=${game_name}&page_size=9`;

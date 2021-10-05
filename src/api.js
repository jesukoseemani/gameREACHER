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





const popular_games = `games?key=f18f8bcef0f649e49280efb455dbe9e3&dates=${lastYearDate},${thisYearDate}&ordering=-rating&page_size=10`
const upcoming_games = `games?key=f18f8bcef0f649e49280efb455dbe9e3&dates=${thisYearDate},${nextYearDate}&ordering=-added&page_size=10`;
const newGames = `games?key=f18f8bcef0f649e49280efb455dbe9e3&dates=${lastYearDate},${thisYearDate}&ordering=-released&page_size=10`;


export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

export const gameDetailsURL = (id) => `${base_url}games/${id}?key=f18f8bcef0f649e49280efb455dbe9e3`
export const screenshotDetailsURL = (id) => `${base_url}games/${id}/screenshots?key=f18f8bcef0f649e49280efb455dbe9e3`
export const searchGamesURL = (game_name) => `${base_url}games?key=f18f8bcef0f649e49280efb455dbe9e3&search=${game_name}&page_size=9`;


// ef7b7ea7e4904de7add09b0beb58ab8e
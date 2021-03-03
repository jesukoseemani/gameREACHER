import axios from "axios";
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGamesURL,
} from "../api";


export const gamesActions = () => async (dispatch) => {

const fetchPopularGames = await axios.get(popularGamesURL())
const fetchnewGames = await axios.get(newGamesURL())
const fetchupcomingGames = await axios.get(upcomingGamesURL())


dispatch({
  type: "FETCH_GAMES",
  payload: {
    popular: fetchPopularGames.data.results,
    upcoming: fetchupcomingGames.data.results,
    newGames: fetchnewGames.data.results,
  }
})
}

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGamesURL(game_name));

dispatch({
  type: "SEARCHED_GAMES",
  payload: {
    searched: searchGames.data.results,
    
  }
})
}
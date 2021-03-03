import axios from "axios";
import {gameDetailsURL, screenshotDetailsURL} from "../api"


export const detailAction = (id) =>async(dispatch) => {
dispatch({
  type: "IT_LOADING"
})



const getGameData = await axios.get(gameDetailsURL(id))
const getScreenshotData = await axios.get(screenshotDetailsURL(id))

dispatch({
  type: "FETCH_DETAILS",
  payload: {
    game: getGameData.data,
    screenshot: getScreenshotData.data
  }
})

}
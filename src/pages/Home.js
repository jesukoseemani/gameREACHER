import {useState, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {gamesActions} from "../Actions/gamesActions"
import styled from "styled-components"
import {motion} from "framer-motion"
import Game from "../components/Game"
import Testes from "../components/Testes"


// import {useLocation} from "react-router-dom"
import { fadeIn } from "../animation";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}



const Home = () => {
// const Location = useLocation()
// const pathId = Location.pathname.split("/")[2]
const dispatch = useDispatch()
const [favorite, setFavorite] = useLocalStorage('favorite', [])
 

  useEffect(()=>{
   dispatch(gamesActions())
  },[dispatch])

const {popular,upcoming,newGames,searched} = useSelector((state) => state.games)

  return(
    <GameList variants={fadeIn} initial="hidden" animate="show">
      
     {searched.length > 0 && (
       <div className="searched">
     <h2>Searched Games</h2>
      <Games>
      {searched.map(game => (
        <Game 
        name={game.name}
        rating={game.rating}
        id={game.id}
        image={game.background_image}
        key={game.id}
        favorite= {favorite}
        setFavorite= {setFavorite}
        />
      ))}
      </Games>
      </div>
        )}


    {favorite.length > 0 && (
    <div className="watchlist">
     <h2>Your WatchList</h2>
      <Gamesf>
      {favorite.map(fav => (
        <Testes 
        name={fav.name}
        rating={fav.rating}
        id={fav.id}
        image={fav.image}
        key={fav.id}
        favorite= {favorite}
        setFavorite= {setFavorite}
         />
      ))}
      </Gamesf>
      </div>
      )}
     
     
      <h2>Upcoming Games</h2>
      <Games>
      {upcoming.map(game => (
        <Game 
        name={game.name}
        rating={game.rating}
        id={game.id}
        image={game.background_image}
        key={game.id}
        favorite= {favorite}
        setFavorite= {setFavorite}
        />
      ))}
      </Games>

      <h2>Popular Games</h2>
      <Games>
      {popular.map(game => (
        <Game 
        name={game.name}
        rating={game.rating}
        id={game.id}
        image={game.background_image}
        key={game.id}
        favorite= {favorite}
        setFavorite= {setFavorite}
        />
      ))}
      </Games>

      <h2>Newest Games</h2>
      <Games>
      {newGames.map(game => (
        <Game 
        name={game.name}
        rating={game.rating}
        id={game.id}
        image={game.background_image}
        key={game.id}
        favorite= {favorite}
        setFavorite= {setFavorite}
        />
      ))}
      </Games>
      
</GameList>
  )
}
const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  @media (max-width: 600px){
    padding: 0rem 3rem;
    }
    /* @media (max-width: 450px){
    padding: 0rem .5rem 0rem 1.9rem;
    } */
  h2 {
    padding: 5rem 0rem;
    @media (max-width: 600px){
       font-size: 1.8rem;
       padding: 2rem 0rem;
    }
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  @media (max-width: 400px){
    grid-template-columns: 1fr;
    }
`;
const Gamesf = styled(Games)`
  grid-template-columns: repeat(auto-fit, minmax(25rem, 25rem));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  @media (max-width: 500px){
    grid-template-columns: repeat(auto-fit, 20rem);
    }
  @media (max-width: 400px){
    grid-template-columns: 1fr;
    }
  
`

export default Home
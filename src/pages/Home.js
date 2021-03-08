import {useState, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {gamesActions} from "../Actions/gamesActions"
import styled from "styled-components"
import {motion} from "framer-motion"
import Nav from "../components/Nav"
import Game from "../components/Game"
import Testes from "../components/Testes"


// import {useLocation} from "react-router-dom"
import { fadeIn } from "../animation";


const Home = () => {
// const Location = useLocation()
// const pathId = Location.pathname.split("/")[2]


const [favorite, setFavorite] = useState([])


  const dispatch = useDispatch()


  useEffect(()=>{
   dispatch(gamesActions())
  },[dispatch])

const {popular,upcoming,newGames,searched} = useSelector((state) => state.games)

useEffect(() => {
  getFromLocalStorage();

},[])

const getFromLocalStorage = () => {

  if(localStorage.getItem("favorite") === null){
    localStorage.setItem("favorite", JSON.stringify([]));
  }else{
    let data = JSON.parse(localStorage.getItem("favorite"))
      
    setFavorite(data);
    
  }
  
}

  return(
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <Nav />
    {favorite.length ? (
    <div className="watchlist">
     <h2>Your WatchList</h2>
      <Games>
      {favorite.map(fav => (
        <Testes 
        name={fav.name}
        released={fav.released}
        id={fav.id}
        image={fav.image}
        key={fav.id} />
      ))}
      </Games>
      </div>
      ) : ""}
     

     {searched.length ? (
       <div className="searched">
     <h2>Searched Games</h2>
      <Games>
      {searched.map(game => (
        <Game 
        name={game.name}
        released={game.released}
        id={game.id}
        image={game.background_image}
        key={game.id}
        favorite= {favorite}
        setFavorite= {setFavorite}
        />
      ))}
      </Games>
      </div>
        ) : ""}
      <h2>Upcoming Games</h2>
      <Games>
      {upcoming.map(game => (
        <Game 
        name={game.name}
        released={game.released}
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
        released={game.released}
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
        released={game.released}
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
    padding: 0rem 2.5rem;
    }
  h2 {
    padding: 5rem 0rem;
    @media (max-width: 600px){
       font-size: 2rem;
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
`;


export default Home

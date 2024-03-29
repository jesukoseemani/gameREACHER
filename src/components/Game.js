import { useState, useEffect} from "react"
import styled from "styled-components"
import {motion} from "framer-motion"
import {useDispatch} from "react-redux"
import {detailAction} from "../Actions/detailAction"
import { Link } from "react-router-dom"
import { smallImage} from "../util"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Game = ({ name, rating, image, id , favorite, setFavorite}) => {
  

  const dispatch = useDispatch()
  
  
  
  const [icon, setIcon] = useState(false)
  const saveToLocalStorage = () => {

    localStorage.setItem("favorite", JSON.stringify(favorite));
     
    }
  
  useEffect(() => {
    saveToLocalStorage();
  // eslint-disable-next-line
  },[favorite])
  

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("favorite"))
    data.map(item => item.id === id ? setIcon(true) : "")
  }, [id]);


const loadDetailsHandler = () => {
 
  dispatch(detailAction(id))
}

const clickHandler = () => {
  setIcon(!icon)
  if(icon !== true){
    setFavorite([
      ...favorite,
      {
      name, 
      rating, 
      image, 
      id,
      
    }
  ])
  }else{
    setFavorite(favorite.filter(game => game.id !== id))
  }
 

}
const starMesh = (count) => {

  const starPercentage = (count / 5) * 100;
  const starRounded = Math.round(starPercentage / 10) * 10

  return starRounded;
}

  return(
     <StyledGame >
       
       <h3>{name}</h3>
       <StyledPi>
       <Rating>
          <div class="stars-outer">
          <div style={{width: `${starMesh(rating)}%`}} 
          class="stars-inner" id="sta"></div>
          </div>
        </Rating>
       <div className="icon">
       
       <FontAwesomeIcon onClick={clickHandler} style={{color: icon ? "#FF0000": "#7a7a7a"}} icon={icon ? faHeart : faHeart} size="2x" / >
       
       </div>
       </StyledPi >
       <div onClick={loadDetailsHandler}>
       <Link to={`/game/${id}`}>

       <img src={smallImage(image, 640)} alt={name} />
       </Link>
       </div>
    </StyledGame>
  )
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
 
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    object-position: top;
    cursor: pointer;
  }
`;

const StyledPi = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: .5rem .8rem;

.icon{
  cursor: pointer;
}
`
const Rating = styled.div`
 /* @media (max-width: 600px){
     p{
       display: none
     }
    } */
.stars-outer {
  position: relative;
  display: inline-block;

  &::before {
  content: "\f005 \f005 \f005 \f005 \f005";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  font-size: 1rem;
  color: #ccc;
 
}
}

.stars-inner {
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: 0%;

  &::before {
  content: "\f005 \f005 \f005 \f005 \f005";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  font-size: 1rem;
  color: #FF7676;
  
}
}`

export default Game
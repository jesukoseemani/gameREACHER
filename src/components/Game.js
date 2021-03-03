import styled from "styled-components"
import {motion} from "framer-motion"
import {useDispatch} from "react-redux"
import {detailAction} from "../Actions/detailAction"
import { Link } from "react-router-dom"
import { smallImage} from "../util"
import { popup } from "../animation";

const Game = ({ name, released, image, id }) => {
const dispatch = useDispatch()

const loadDetailsHandler = () => {
  document.body.style.overflow = "hidden";
  dispatch(detailAction(id))
}


  return(
     <StyledGame 
     variants={popup}
     initial="hidden"
     animate="show"
      onClick={loadDetailsHandler}>
       <Link to={`/game/${id}`}>
       <h3>{name}</h3>
       <p>{released}</p>
       <img src={smallImage(image, 640)} alt={name} />
       </Link>
    </StyledGame>
  )
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
 
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    object-position: top;
  }
`;

export default Game
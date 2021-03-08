import { Link } from "react-router-dom"
import { smallImage} from "../util"
import {detailAction} from "../Actions/detailAction"
import styled from "styled-components"
import {motion} from "framer-motion"
import {useDispatch} from "react-redux"

const Testes = ({ name, released, image, id}) => {
  const dispatch = useDispatch()
  
  const loadfavoriteHandler = () => {
 
    dispatch(detailAction(id))
  }
  
  return(
    <StyledGame onClick={loadfavoriteHandler}>
         <Link to={`/game/${id}`}> 
         <h3>{name}</h3> 
         <div className="icon-word">
         <p>{released}</p>
         </div>
         <div className="icon">
         </div>
         <img src={smallImage(image, 640)} alt={name} />
         </Link>
      </StyledGame>
  )



}

const StyledGame = styled(motion.div)`
  height: 60vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
 
  img {
    width: 100%;
    height:40vh;
    object-fit: cover;
    object-position: top;
    cursor: pointer;
  }
`;

export default Testes
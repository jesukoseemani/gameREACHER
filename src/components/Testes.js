import { Link } from "react-router-dom"
import { smallImage} from "../util"
import {detailAction} from "../Actions/detailAction"
import styled from "styled-components"
import {motion} from "framer-motion"
import {useDispatch} from "react-redux"

const Testes = ({ name, rating, image, id}) => {
  const dispatch = useDispatch()
  
  const loadfavoriteHandler = () => {
 
    dispatch(detailAction(id))
  }
  const starMesh = (count) => {

    const starPercentage = (count / 5) * 100;
    const starRounded = Math.round(starPercentage / 10) * 10
  
    return starRounded;
  }

  return(
    <StyledGame onClick={loadfavoriteHandler}>
         <Link to={`/game/${id}`}> 
         <h3>{name}</h3> 
          <Rating>
          <div class="stars-outer">
          <div style={{width: `${starMesh(rating)}%`}} 
          class="stars-inner" id="sta"></div>
          </div>
        </Rating>
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

export default Testes
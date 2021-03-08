import {useSelector} from "react-redux"
import styled from "styled-components"
import {motion} from "framer-motion"
// import {useHistory} from "react-router-dom"
import { smallImage} from "../util"
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";

const Gamedetails = () => {
// const History = useHistory()
// const exitDetailHandler= (e) => {
//   const element = e.target
//   if(element.classList.contains("shadow")){
//     document.body.style.overflow = "auto"
//     History.push("/")
//   }
// }

const getPlatform = (platform) => {
  switch(platform){
    case "PlayStation 4":
      return playstation;
    case "PlayStation 5":
      return playstation;
    case "Xbox Series S/X":
      return xbox;
    case "Xbox S":
      return xbox;
    case "Xbox One":
      return xbox;
    case "PC":
      return steam;
    case "Nintendo Switch":
      return nintendo;
    case "iOS":
      return apple;
    default:
      return gamepad;
  }

}

const {game, screenshot, isLoading} = useSelector((state) => state.details)

const starMesh = (count) => {

  const starPercentage = (count / 5) * 100;
  const starRounded = Math.round(starPercentage / 10) * 10

  return starRounded;
}
  return(
    <>
   {!isLoading && (
    <Detail >
      <Stats>
        <Rateflex>
          <motion.h3>{game.name}</motion.h3>
          <Rating>
          <div class="stars-outer">
          <div style={{width: `${starMesh(game.rating)}%`}} 
          class="stars-inner" id="sta"></div>
          </div>
          <p>Rating: {game.rating}</p>
          </Rating>
        </Rateflex>
        <Info>
          <h3>Platforms</h3>
          <Platforms>
            {game.platforms.map((data) => (
              <img
                alt={data.platform.name}
                key={data.platform.id}
                src={getPlatform(data.platform.name)}
                title={data.platform.name}
              ></img>
            ))}
          </Platforms>
        </Info>
      </Stats>
      <Media>
        <motion.img
          src={smallImage(game.background_image, 1280)}
          alt={game.background_image}
        />
      </Media>
      <Description>
        <p>{game.description_raw}</p>
      </Description>
      <div className="gallery">
        {screenshot.results.map((screen) => (
          <img
            src={smallImage(screen.image, 1280)}
            key={screen.id}
            alt={screen.image}
          />
        ))}
      </div>
    </Detail>
    )}
</>

  )
}

// const CardShadow = styled(motion.div)`
//   width: 100%;
//   min-height: 100vh;
//   overflow-y: scroll;
//   background: rgba(0, 0, 0, 0.5);
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 5;

//   &::-webkit-scrollbar {
//     width: 0.5rem;
//   }

//   &::-webkit-scrollbar-thumb {
//     background-color: #ff7676;
//   }

//   &::-webkit-scrollbar-track {
//     background: white;
//   }
// `;

const Detail = styled(motion.div)`
  width: 100%;
  border-radius: 1rem;
  padding: 2rem 1rem;
  background: white;
  color: black;
 
  img {
    width: 100%;
  }
`;

const Rateflex = styled.div`
 @media (max-width: 600px){
  display: flex;
  align-items: center;
  justify-content: space-between;
  width:100%;
  flex-wrap: wrap

    }
`

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px){
      flex-direction: column;
    
    }
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
    @media (max-width: 950px){
      width: 1.7rem;
      height: 1.7rem;
    }
    @media (max-width: 600px){
      margin-top: 2rem;
      align-self: center;
    }
  }
`;
const Info = styled(motion.div)`
  text-align: center;
  @media (max-width: 600px){
      h3{
        display: none;
      }
    }
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
    @media (max-width: 950px){
    margin-left:2rem
    }
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

const Rating = styled.div`
 @media (max-width: 600px){
     p{
       display: none
     }
    }
.stars-outer {
  position: relative;
  display: inline-block;

  &::before {
  content: "\f005 \f005 \f005 \f005 \f005";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  font-size: 2rem;
  color: #ccc;
  @media (max-width: 950px){
      font-size: 1rem;
    }
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
  font-size: 2rem;
  color: #FF9529;
  @media (max-width: 950px){
      font-size: 1rem;
    }
}
}





`

export default Gamedetails
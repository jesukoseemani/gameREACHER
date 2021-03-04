
//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
//Redux and Routes
import {useDispatch, useSelector} from "react-redux"
import {useState, useEffect} from "react"
import {fetchSearch} from "../Actions/gamesActions"
import { fadeIn } from "../animation";

import Error from "../components/Error"

const Nav = () => {
const dispatch = useDispatch()
const {searched} = useSelector((state) => state.games)


const[textInput, setTextInput] = useState("")
const[info, setInfo] = useState({
  message: "",
  class: ""
})



const textInputHandler = (e) => {
const input = e.target.value

setTextInput(input)
}

const submitHandler = (e) => {
 e.preventDefault()
if(textInput !== ""){
  dispatch(fetchSearch(textInput))
  if(searched.length){
    setInfo({
      ...info,
      message: "Successful, waiting for your game to fetch...",
      class: "green"
    })
  }else{
    setInfo({
      ...info,
      message: "There is no corresponding game, you can checkout closely related game...",
      class: "red"
    })
  }
  
}else{
  setInfo({
    ...info,
    message: "You need to type something on the input box...",
    class:"red"
  })
}
 

 setTextInput("")
}
const clearSearched = () => {
  dispatch({ type: "CLEAR_SEARCHED" });
};

useEffect(() => {
  const timer = setTimeout(() => {
     setInfo({
      message: "",
      class: ""
    })
   }, 3000);
   return () => clearTimeout(timer);
 },[info]);
  
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo" />
        <h1>gameREACHER</h1>
      </Logo>
      <Error info={info} setInfo={setInfo} />
      <form className="search">
        <input value={textInput} onChange={textInputHandler} type="text" />
        <button onClick={submitHandler} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    @media (max-width: 950px){
       width:50%
    }
    @media (max-width: 600px){
       width:90%
    }
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.6rem  2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
    outline: none;
    @media (max-width: 950px){
      padding: 0.5rem  2rem;
    }
    @media (max-width: 600px){
       margin-top: 1.2rem;
    }
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;

export default Nav;

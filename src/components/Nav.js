
//Animation
import styled from "styled-components";
import { motion } from "framer-motion";

//Redux and Routes
import {useDispatch, useSelector} from "react-redux"
import {useState, useEffect} from "react"
import {fetchSearch} from "../Actions/gamesActions"
import { fadeIn } from "../animation";
import Loader from "../components/Loader"

import Error from "../components/Error"

const Nav = () => {
const dispatch = useDispatch()
const {searched} = useSelector((state) => state.games)


const[textInput, setTextInput] = useState("")
const[info, setInfo] = useState({
  message: "",
  class: ""
})
const[style, setStyle] = useState(false)
const[loading, setLoading] = useState(false)
const[disabled, setDisabled] = useState(false)




const textInputHandler = (e) => {
const input = e.target.value

setTextInput(input)

dispatch(fetchSearch(textInput));
}

const submitHandler = (e) => {
 e.preventDefault()
if(textInput !== ""){

  setLoading(true)
  setDisabled(!disabled)
  

  setStyle(false)
  if(searched.length){
    setInfo({
      ...info,
      message: "Successful, waiting for your game to fetch...",
      class: "green"
    })
  }else{
    setInfo({
      ...info,
    })
  }

  setTimeout(() => {
    dispatch(fetchSearch(textInput));
    setLoading(false)
    setDisabled(false)
   }, 3000);
  
}else{
  setInfo({
    ...info,
    message: "Hello, This is an error and you need to type something here",
    class:"red"
  })
  setStyle(true)
}
 
 
 setTextInput("")
}


useEffect(() => {
  const timer = setTimeout(() => {
     setInfo({
      message: "",
      class: ""
    })
    setStyle(false)
   }, 3000);
   return () => clearTimeout(timer);
 },[info]);
  
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <form className="search">
        <input style={{ border: `${style ? "1px solid red" : ""}`}} value={textInput} onChange={textInputHandler} type="text" />
        <button onClick={submitHandler} type="submit" disabled={disabled}>
          Search
        </button>
      </form>
      <Error info={info} setInfo={setInfo} />
     {loading && <Loader />}
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  width:100%;
  margin: 3rem 5rem;
  text-align: center;
  @media (max-width: 950px){
    margin: 3rem .7rem;
    }
    @media (max-width: 600px){
      margin: 3rem .7rem;
    }
    @media (max-width: 430px){
      margin: 3rem .3rem;
    }
    
  input {
    width: 50%;
    font-size: 1.3rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    @media (max-width: 950px){
       width:70%
    }
    @media (max-width: 600px){
       width:90%
    }
    /* @media (max-width: 408px){
       width:100%
    } */
  }
  button {
    font-size: 1.3rem;
    border: none;
    padding: 0.6rem  2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
    outline: none;
    &:disabled,
    &[disabled] {
  background-color: transparent;
  pointer-events: none;
  color: rgb(196, 196, 196);
  border: none;
  outline: none;
}
    @media (max-width: 950px){
      padding: 0.5rem  2rem;
    }
    @media (max-width: 600px){
       margin-top: 1.2rem;
    }
  }
`;


export default Nav;

import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import { fadeIn } from "../animation";
import { useDispatch } from "react-redux";
import {useHistory} from "react-router-dom"

const Header = () => {
   const dispatch = useDispatch()
   const History = useHistory()

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
    History.push("/")
  };
  return(
    <Logo variants={fadeIn} initial="hidden" animate="show" onClick={clearSearched}>
    <img src={logo} alt="logo" />
    <h1>gameREACHER</h1>
  </Logo>
  )
}
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
export default Header
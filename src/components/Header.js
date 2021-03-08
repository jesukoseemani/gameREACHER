import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import { fadeIn } from "../animation";
import { useDispatch } from "react-redux";

const Header = () => {
   const dispatch = useDispatch()

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
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
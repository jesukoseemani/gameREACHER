import styled from "styled-components";
import logo from "../img/logo.svg";
import {useDispatch} from "react-redux";

const Footer = () => {
  const dispatch = useDispatch()

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return(
    <Styledfooter>
       <Logo onClick={clearSearched}>
        <img src={logo} alt="logo" />
        <h1>gameREACHER</h1>
      </Logo>
      <Styleddesign>
        <p>This is designed by koseemani</p>
      </Styleddesign>
    </Styledfooter>
  )
}

const Styledfooter = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 10vh;
background-color: #fafafa;
margin: 1.5rem;
color: #e49400;
@media(max-width: 950px){
    flex-direction: column;
    }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  @media (max-width: 950px){
    padding: .2rem;
    }
  img {
    height: 2rem;
    width: 2rem;
  }
  h1{
    font-size: 1.6rem;
    @media(max-width: 950px){
    font-size: 1rem;
    }
   
  }
`;

const Styleddesign = styled.div`
margin-right: 2rem;
/* @media (max-width: 950px){
    
    } */
   
p{
  color: black;
  font-style: italic;
  font-weight: bold;
  @media(max-width: 950px){
    font-size: 1rem;
    }
}
`

export default Footer
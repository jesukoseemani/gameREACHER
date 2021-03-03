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
background-color: #808080;
margin: 1.5rem;
color: #fafafa
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;

const Styleddesign = styled.div`
margin-right: 2rem;
p{
  color: #fafafa;
  font-style: italic;
}
`

export default Footer
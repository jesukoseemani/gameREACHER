import styled from "styled-components"
import loading from "../img/loading.gif"


const Loader = () => {
 
  
   return(
    <Styledloader>
    <div>
      <img src={loading} alt="loading"></img>
    </div>
    </Styledloader>
  )
}

const Styledloader = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 0.7rem;
img{
  width:6rem;
  height:6rem;
  display: block;
}
`

export default Loader
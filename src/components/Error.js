import styled from "styled-components"



const Error = ({info}) => {
 
  
   return(
    <StyledErr>
    <div>
      <p className={info.class}>{info.message}</p>
    </div>
    </StyledErr>
  )
}

const StyledErr = styled.div`
margin: 1rem;
.green{
  text-align: center;
  font-size: 1rem;
  font-style: italic;
  color: green;
}
.red{
  text-align: center;
  font-size: 1rem;
  font-style: italic;
  color: red;
}
`

export default Error;
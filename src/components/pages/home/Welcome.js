import styled from "styled-components";
import { P } from "../../common.styles/DisplayText";

const Div = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  text-align: center;
  padding: 20px;
  margin: -65px -10px 0 -10px;
  @media ${({ theme }) => theme.devices.tabletS} { 
    text-align: left;
    display: flex;
    justify-content: space-around;
    margin: -65px 30px 0 30px;
  }
`;


const Welcome = () => {
  return (
    <Div>
      <P paragraph="Welcome to Holidaze" uppercase lightColor />
    </Div>
  )
}

export default Welcome;
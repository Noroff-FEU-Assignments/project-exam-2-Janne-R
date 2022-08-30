import styled from "styled-components";
import { P } from "../../common.styles/DisplayText";
import Search from "../../common.styles/Search";

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


const Reservation = () => {
  return (
    <Div>
      <div>
        <P paragraph="Reservation" uppercase lightColor />
        <P paragraph="Find your next hotel in Bergen" lightColor />
      </div>
      <Search />
    </Div>
  )
}

export default Reservation;
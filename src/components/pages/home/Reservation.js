import styled from "styled-components";
import { P } from "../../common.styles/DisplayText";

const Div = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryColor};
`;

const Reservation = () => {
  return (
    <Div>
      <P paragraph="Reservation" uppercase lightColor />
    </Div>
  )
}

export default Reservation;
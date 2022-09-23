import styled from "styled-components";

const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  opacity: 0.96;
  padding: 10px;
  margin: 0 -10px 0 -10px;

 @media ${({ theme }) => theme.devices.tabletS} { 
    grid-area: 1 / 13 / 13 / 8;
    padding: 20px;
 }

@media ${({ theme }) => theme.devices.laptopS} { 
grid-area: 1 / 12 / 13 / 8;
padding: 30px;
}

`;

export default Box;
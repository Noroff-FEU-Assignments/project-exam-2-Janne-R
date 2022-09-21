import styled from "styled-components";


const GridContainer = styled.div`

@media ${({ theme }) => theme.devices.tabletS} { 
 display: grid;
 grid-template-columns: repeat(12, 1fr);
 grid-template-rows: repeat(12, 1fr);
 }
`;

export default GridContainer;

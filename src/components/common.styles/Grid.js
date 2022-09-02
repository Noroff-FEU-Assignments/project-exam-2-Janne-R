import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
  grid-column-gap: 20px;
`;

export default Grid;
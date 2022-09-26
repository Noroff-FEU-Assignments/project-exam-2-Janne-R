import { FaStarOfLife } from 'react-icons/fa';
import styled from "styled-components";

const Star = styled(FaStarOfLife)`
  display:none;
  
  @media ${({ theme }) => theme.devices.tabletS} { 
    display:flex ;
    color: ${({ theme }) => theme.colors.primaryColor};
    opacity: 0.3;
    transform: rotate(33deg);
    margin-top: 20px;
  }
`;

export default Star;
import styled from "styled-components";
import BackgroundImage from "./BackgroundImage";
import { H2, P } from "./DisplayText";
import { FaStarOfLife } from 'react-icons/fa';

const GridContainer = styled.div`

 @media ${({ theme }) => theme.devices.tabletS} { 
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  }
`;

const BackgroundImageBleed = styled(BackgroundImage)`
  margin: 0 -10px 0 -10px;
  
  @media ${({ theme }) => theme.devices.tabletS} { 
    height: 460px ;
    margin: 0;
    grid-area: 2 / 1 / 12 / 13;
  }

  @media ${({ theme }) => theme.devices.laptopS} { 
    height: 560px ;
    grid-area: 2 / 1 / 12 / 13;
   
  }

  @media ${({ theme }) => theme.devices.laptopL} { 
    height: 660px ;
   
  }
`;

const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  padding: 10px;
  margin: 0 -10px 0 -10px;

 @media ${({ theme }) => theme.devices.tabletS} { 
    grid-area: 1 / 12 / 13 / 8;
 }
`;

const Ul = styled.ul`
  padding: 0;
  list-style-type: none;

  li{
    color: ${({ theme }) => theme.colors.textColorLight};
  }
`;

const Flex = styled.div`
  display: Flex;
  align-items: center;
  margin-bottom:40px ;
`;

const StarIcon = styled(FaStarOfLife)`
  margin-right: 20px;
`;

const InfoBox = ({ title, paragraph, liste, img }) => {
  return (
    <GridContainer>
      <BackgroundImageBleed img={img} height={"360px"} />
      <Box>
        <H2 title={title} lightColor uppercase />
        <P lightColor paragraph={paragraph} />
        <Ul>
          {liste.map((item) => (
            <Flex key={item.id}>
              <StarIcon size="1.5rem" color="white" />
              <li>{item}</li>
            </Flex>
          ))}
        </Ul>
      </Box>
    </GridContainer>
  )
}

export default InfoBox;
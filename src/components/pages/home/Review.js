import styled from "styled-components";
import BackgroundImage from "../../common.styles/BackgroundImage";
import { H1, H2, P } from "../../common.styles/DisplayText";
import { FaStarOfLife } from 'react-icons/fa';



const StarIcon = styled(FaStarOfLife)`
  margin-right: 20px;
`;

const GridContainer = styled.div`

 @media ${({ theme }) => theme.devices.tabletS} { 
   height: 430px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  }
`;

const BackgroundImageBleed = styled(BackgroundImage)`
  margin: 0 -10px 0 -10px;
  
  @media ${({ theme }) => theme.devices.tabletS} { 
    margin: 0;
    height: 360px;
    grid-area: 2 / 1 / 12 / 13;
  }
`;

const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  padding: 20px;
  margin: 0 -10px 0 -10px;

 @media ${({ theme }) => theme.devices.tabletS} { 
    opacity: 94%;
    grid-area: 1 / 12 / 13 / 9;
 }
`;


const Flex = styled.div`
  display: Flex;
  align-items: center;
  margin-bottom:20px ;
`;


const Ul = styled.ul`
  padding: 0;
  list-style-type: none;

  li{
    color: ${({ theme }) => theme.colors.textColorLight};
  }
`;

const Review = ({ title, paragraph, liste }) => {
  return (
    <GridContainer>
      <BackgroundImageBleed img={"/images/bergenSmall.webp"} height={"260px"} />
      <Box>
        <H2 title={title} lightColor uppercase />
        <P lightColor paragraph={paragraph} />
        <Ul>
          {liste.map((item) => (
            <Flex>
              <StarIcon size="1.5rem" color="white" />
              <li>{item}</li>
            </Flex>
          ))}
        </Ul>
      </Box>
    </GridContainer>
  )
}

export default Review;
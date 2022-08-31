import styled from "styled-components";
import BackgroundImage from "../../common.styles/BackgroundImage";
import { H2, P } from "../../common.styles/DisplayText";

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
    grid-area: 1 / 6 / 13 / 2;
 }
`;

const Review = ({ title, paragraph, img }) => {
  return (
    <GridContainer>
      <BackgroundImageBleed img={img} height={"260px"} />
      <Box>
        <H2 title={title} lightColor uppercase />
        <P lightColor paragraph={paragraph} />
        <div>

        </div>
      </Box>
    </GridContainer>
  )
}

export default Review;
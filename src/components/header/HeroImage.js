import styled from "styled-components";
import BackgroundImage from "../common.styles/BackgroundImage";

const StyledBackgroundImage = styled(BackgroundImage)`
@media ${({ theme }) => theme.devices.tabletS} { 
    max-width: 1200px;
    margin: 0px auto;
  }
`;

const HeroImage = () => {
  return (
    <StyledBackgroundImage img={"/images/bergenSmall.webp"} height={"460px"} />
  );
};

export default HeroImage;
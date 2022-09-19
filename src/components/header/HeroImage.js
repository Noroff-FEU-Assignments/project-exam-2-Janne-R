import styled from "styled-components";
import BackgroundImage from "../common.styles/BackgroundImage";

const HeaderImage = styled(BackgroundImage)`
@media ${({ theme }) => theme.devices.tabletS} { 
    max-width: 1920px;
    margin: 0px auto;
    height: 560px;
  }
  @media ${({ theme }) => theme.devices.tabletL}{
    height: 660px;
  }
  @media ${({ theme }) => theme.devices.laptopS}{
    height: 860px;
  }
`;

const HeroImage = () => {
  return (
    <HeaderImage img={"/images/hero.webp"} height={"460px"} />
  );
};

export default HeroImage;
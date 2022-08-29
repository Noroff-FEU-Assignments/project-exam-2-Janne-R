import styled from "styled-components";
import BackgroundImage from "../common.styles/BackgroundImage";

const HeaderImage = styled(BackgroundImage)`
@media ${({ theme }) => theme.devices.tabletS} { 
    max-width: 1200px;
    margin: 0px auto;
    height: 460px;
  }
  @media ${({ theme }) => theme.devices.tabletL}{
    height: 560px;
  }
  @media ${({ theme }) => theme.devices.laptopS}{
    height: 660px;
  }
`;

const HeroImage = () => {
  return (
    <HeaderImage img={"/images/bergenSmall.webp"} height={"360px"} />
  );
};

export default HeroImage;
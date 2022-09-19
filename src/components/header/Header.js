import styled from "styled-components"
import Navigation from "./Navigation";
import HeroImage from "./HeroImage";

const StickyNav = styled.div`
    position: fixed;
    width: 100%;
    z-index: 1;
`;

const Header = () => {
  return (
    <header>
      <StickyNav>
        <Navigation />
      </StickyNav>
      <HeroImage />
    </header>
  )
}

export default Header;
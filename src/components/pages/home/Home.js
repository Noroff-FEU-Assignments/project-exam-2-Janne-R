import Section from "../../common.styles/Section";
import SearchHotel from "./SearchHotel";
import InfoBox from "../../common.styles/InfoBox";
import FeaturedHotels from "./FeaturedHotels";
import VisitBergen from "./VisitBergen";
import BackgroundImage from "../../common.styles/BackgroundImage";
import styled from "styled-components";
import SEO from "../../helpers/SEO";

const BackgroundImageSizes = styled(BackgroundImage)`
  margin: 0 -10px 0 -10px;
  
  @media ${({ theme }) => theme.devices.tabletS} { 
    margin: 0;
    height: 460px ;
  }

  @media ${({ theme }) => theme.devices.laptopS} { 
    height: 560px ;
  }

  @media ${({ theme }) => theme.devices.laptopL} { 
    height: 660px ;
  }
`;

const Home = () => {

  return (
    <>
      <SEO
        title="Home"
        description="Holidaze - your hotel in Bergen"
        keywords="bergen, hotel, contact" />
      <main>
        <Section backgroundColorLight>
          <SearchHotel />
        </Section>
        <Section backgroundColorLight>
          <VisitBergen />
        </Section>
        <Section>
          <InfoBox img={"/images/hotelroom.webp"} alt="Hotel image" title="Why choose us" paragraph="All hotels in the Holidaze family offers:" liste={["Easy booking", "Great customer service", "Quality hotels", "Best city in Norway", "Free breakfast", "Free wifi"]} />
        </Section>
        <Section backgroundColorLight>
          <FeaturedHotels />
        </Section>
        <Section>
          <BackgroundImageSizes img={"/images/exampleRoom.webp"} alt="Hotel image" height={"360px"} />
        </Section>
      </main>
    </>
  )
}

export default Home;
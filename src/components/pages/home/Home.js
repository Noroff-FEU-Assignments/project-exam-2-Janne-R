import Section from "../../common.styles/Section";
import SearchHotel from "./SearchHotel";
import InfoBox from "../../common.styles/InfoBox";
import FeaturedHotels from "./FeaturedHotels";
import VisitBergen from "./VisitBergen";
import BackgroundImage from "../../common.styles/BackgroundImage";
import styled from "styled-components";

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
    <main>
      <Section backgroundColorLight>
        <SearchHotel />
      </Section>
      <Section backgroundColorLight>
        <VisitBergen />
      </Section>
      <Section>
        <InfoBox img={"/images/hotelroom.webp"} title="Why choose us" paragraph="All hotels in the Holidaze family offers:" liste={["Easy booking", "Great customer service", "Quality hotels", "Best city in Norway", "Free breakfast", "Free wifi", "Free parking", "Wakeup service"]} />
      </Section>
      <Section backgroundColorLight>
        <FeaturedHotels />
      </Section>
      <Section>
        <BackgroundImageSizes img={"/images/exampleRoom.webp"} height={"360px"} />
      </Section>
    </main>
  )
}

export default Home;
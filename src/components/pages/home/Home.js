import Section from "../../common.styles/Section";
import SearchHotel from "./SearchHotel";
import InfoBox from "../../common.styles/InfoBox";
import FeaturedHotels from "./FeaturedHotels";
import VisitBergen from "./VisitBergen";

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
    </main>
  )
}

export default Home;
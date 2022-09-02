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
        <InfoBox img={"/images/bergenSmall.webp"} title="Why choose us" paragraph="Some of the feedbacks we get from our lovely customers:" liste={["Easy booking", "Great customer service", "Quality hotels", "Best city in Norway"]} />
      </Section>
      <Section backgroundColorLight>
        <FeaturedHotels />
      </Section>
    </main>
  )
}

export default Home;
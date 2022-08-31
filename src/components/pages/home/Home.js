import Section from "../../common.styles/Section";
import Reservation from "./Reservation";
import InfoBox from "../../common.styles/InfoBox";
import FeaturedHotels from "./FeaturedHotels";
import VisitBergen from "./VisitBergen";
import Review from "./Review";

const Home = () => {
  return (
    <main>
      <Section backgroundColorLight>
        <Reservation />
      </Section>
      <Section backgroundColorLight>
        <VisitBergen />
      </Section>
      <Section>
        <InfoBox img={"/images/bergenSmall.webp"} title="What people say" paragraph="Many our customers" liste={["item 1", "janneghlømmer", "item 1", "item 1"]} />
      </Section>
      <Section backgroundColorLight>
        <FeaturedHotels />
      </Section>
      <Section>
        <Review img={"/images/bergenSmall.webp"} roundImg={"/images/bergenSmall.webp"} title="What people say" paragraph="Many our customers" liste={["item 1", "janneghlømmer", "item 1", "item 1"]} />
      </Section>
    </main>
  )
}

export default Home;
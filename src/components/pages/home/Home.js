import Section from "../../common.styles/Section";
import Reservation from "./Reservation";
import { H1 } from "../../common.styles/DisplayText";

const Home = () => {
  return (
    <main>
      <Section backgroundColorLight>
        <Reservation />
      </Section>
      <Section backgroundColorLight>
        <H1 title="Visit Bergen" uppercase />
      </Section>
    </main>
  )
}

export default Home;
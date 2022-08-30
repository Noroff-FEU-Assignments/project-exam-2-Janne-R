import styled from "styled-components";
import Section from "../../common.styles/Section";
import Reservation from "./Reservation";
import { H1, H2, P } from "../../common.styles/DisplayText";
import BackgroundImage from "../../common.styles/BackgroundImage";
import Button from "../../common.styles/Button";
import { FaStarOfLife } from 'react-icons/fa';
import FeaturedHotels from "./FeaturedHotels";


const Grid = styled.div`
@media ${({ theme }) => theme.devices.tabletS} { 
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
}
`;

const Ribbon = styled.div`
  background-color: ${({ theme }) => theme.colors.highlightColor} ;
  position: absolute;
  padding: 5px;
  margin-top: 16px;
  margin-left: -10px;
`;
const BackgroundImageBleed = styled(BackgroundImage)`
  margin: 0 -10px 0 -10px;
  @media ${({ theme }) => theme.devices.tabletS} { 
    margin: 0;
    height: 360px;
  }
`;

const WhyChooseUs = styled.div`
 background-color: ${({ theme }) => theme.colors.primaryColor};
 margin: -65px -10px 0 -10px;
 padding: 10px;
 opacity: 94%;
 @media ${({ theme }) => theme.devices.tabletS} { 
    width: 30%;
    margin-left: 480px;
    margin-top: -400px;
    height: 420px;
  }
  @media ${({ theme }) => theme.devices.tabletL} { 
    margin-left: 525px;
  }
  @media ${({ theme }) => theme.devices.laptopS} { 
    margin-left: 650px;
  }
`;

const Flex = styled.div`
  display: Flex;
  align-items: center;
`;

const StarIcon = styled(FaStarOfLife)`
margin-right: 20px;
`;

const Home = () => {
  return (
    <main>
      <Section backgroundColorLight>
        <Reservation />
      </Section>
      <Section backgroundColorLight>
        <H1 title="Visit Bergen" uppercase />
        <P paragraph="What to do when visiting Bergen. Here are the top three most popular attractions our hotelguest visit when in Bergen. Need help booking some of theese attractions, contact your hotel and they will be of assistance." />
        <Grid>
          <div>
            <Ribbon>
              FLØIBANEN
            </Ribbon>
            <BackgroundImage img={"/images/bergenSmall.webp"} height={"260px"} />
            <P paragraph="Fløibanen is a rail-running cable car between the city center and the Fløyen viewpoint located at 320 meters above sea level. The Fløibanen and Fløyen are an iconic feature of Bergen and at the same time one of Norway's most visited and largest tourist attractions." />
          </div>
          <div>
            <Ribbon>
              ULRIKSBANEN
            </Ribbon>
            <BackgroundImage img={"/images/bergenSmall.webp"} height={"260px"} />
            <P paragraph="Ulriksbanen is a double ropeway that runs up to the city's highest mountain, Ulriken. The cable car has a length of 1,120 meters and the trip takes six minutes. The view along the way and from the top is formidable." />
          </div>
          <div>
            <Ribbon>
              FJORD CRUISE
            </Ribbon>
            <BackgroundImage img={"/images/bergenSmall.webp"} height={"260px"} />
            <P paragraph="Experience deep fjords, steep mountains, fresh waterfalls and strong currents - all year round! The tour starts from Zachariasbryggen, close to the famous Fish Market in Bergen. On the departure from Bergen, you will get a good view of the famous Bryggen, Gamle Bergen and the rest of the harbor area. " />
          </div>
        </Grid>
        <Button text="Explore our hotels" />
      </Section>
      <Section>
        <BackgroundImageBleed img={"/images/bergenSmall.webp"} height={"260px"} />
        <WhyChooseUs>
          <H2 title="Why choose us" lightColor uppercase />
          <P lightColor paragraph="We have a wide range of hotels that offers a lot." />
          <div>
            <Flex>
              <StarIcon size="1.5rem" color="white" />
              <P lightColor paragraph="Easy booking" />
            </Flex>
            <Flex>
              <StarIcon size="1.5rem" color="white" />
              <P lightColor paragraph="Easy booking" />
            </Flex>
            <Flex>
              <StarIcon size="1.5rem" color="white" />
              <P lightColor paragraph="Easy booking" />
            </Flex>
            <Flex>
              <StarIcon size="1.5rem" color="white" />
              <P lightColor paragraph="Easy booking" />
            </Flex>
          </div>
        </WhyChooseUs>
      </Section>
      <FeaturedHotels />
      <Section>
        <BackgroundImageBleed img={"/images/bergenSmall.webp"} height={"260px"} />
        <WhyChooseUs>
          <H2 title="Why choose us" lightColor uppercase />
          <P lightColor paragraph="We have a wide range of hotels that offers a lot." />
          <div>
            <Flex>
              <StarIcon size="1.5rem" color="white" />
              <P lightColor paragraph="Easy booking" />
            </Flex>
            <Flex>
              <StarIcon size="1.5rem" color="white" />
              <P lightColor paragraph="Easy booking" />
            </Flex>
            <Flex>
              <StarIcon size="1.5rem" color="white" />
              <P lightColor paragraph="Easy booking" />
            </Flex>
            <Flex>
              <StarIcon size="1.5rem" color="white" />
              <P lightColor paragraph="Easy booking" />
            </Flex>
          </div>
        </WhyChooseUs>
      </Section>
    </main>
  )
}

export default Home;
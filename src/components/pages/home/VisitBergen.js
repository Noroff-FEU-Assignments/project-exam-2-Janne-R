import styled from "styled-components";
import { H1, P } from "../../common.styles/DisplayText";
import BackgroundImage from "../../common.styles/BackgroundImage";
import { Link } from "react-router-dom";
import Grid from "../../common.styles/Grid";
import { MdKeyboardArrowRight } from 'react-icons/md';

const Ribbon = styled.div`
  background-color: ${({ theme }) => theme.colors.highlightColor} ;
  position: absolute;
  padding: 5px;
  margin-top: 16px;
  margin-left: -10px;
`;

const ButtonLink = styled(Link)`
  text-decoration: none;
  width: fit-content;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.buttonColor};
  color: ${({ theme }) => theme.colors.textColorLight};
  font-size: 21px;
  border: none;
  border-radius: 3px;
  padding: 10px;
  margin: 35px 0 15px 0;
  cursor: pointer;
  transition-duration: 0.4s;
  
  :hover{
    background-color: ${({ theme }) => theme.colors.highlightColor};
    color: ${({ theme }) => theme.colors.textColorDark};
  }
`;

const Arrow = styled(MdKeyboardArrowRight)`
  margin-left:20px;
`;

const VisitBergen = () => {

  return (
    <>
      <H1 title="Visit Bergen" uppercase />
      <P paragraph="What to do when visiting Bergen. Here are the top three most popular attractions our hotelguest visit when in Bergen. Need help booking some of theese attractions, contact your hotel and they will be of assistance." />
      <Grid>
        <div>
          <Ribbon>
            FLØIBANEN
          </Ribbon>
          <BackgroundImage img={"/images/fløibanen.webp"} height={"360px"} />
          <P paragraph="Fløibanen is a rail-running cable car between the city center and the Fløyen viewpoint located at 320 meters above sea level. The Fløibanen and Fløyen are an iconic feature of Bergen and at the same time one of Norway's most visited and largest tourist attractions." />
        </div>
        <div>
          <Ribbon>
            ULRIKSBANEN
          </Ribbon>
          <BackgroundImage img={"/images/ulriksbanen.webp"} height={"360px"} />
          <P paragraph="Ulriksbanen is a double ropeway that runs up to the city's highest mountain, Ulriken. The cable car has a length of 1,120 meters and the trip takes six minutes. The view along the way and from the top is formidable." />
        </div>
        <div>
          <Ribbon>
            FJORD CRUISE
          </Ribbon>
          <BackgroundImage img={"/images/fjordcruise.webp"} height={"360px"} />
          <P paragraph="Experience deep fjords, steep mountains, fresh waterfalls and strong currents - all year round! The tour starts from Zachariasbryggen, close to the famous Fish Market in Bergen. On the departure from Bergen, you will get a good view of the famous Bryggen, Gamle Bergen and the rest of the harbor area. " />
        </div>
      </Grid>
      <ButtonLink to="/hotels">
        Explore our hotels
        <Arrow size="2rem" />
      </ButtonLink>
    </>
  );
}

export default VisitBergen;
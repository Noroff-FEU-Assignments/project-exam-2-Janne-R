import { H1, H2, P } from "../../common.styles/DisplayText";
import useApi from "../../../hooks/useApi";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../constants/api";
import Loader from "../../common.styles/Loader";
import { ErrorMessage } from "../../common.styles/DisplayMessages";
import styled from "styled-components";
import Section from "../../common.styles/Section";
import Button from "../../common.styles/Button";
import EnquiryModal from "./EnquiryModal";
import { useState } from "react";
import InfoBox from "../../common.styles/InfoBox";
import Grid from "../../common.styles/Grid";
import BackgroundImage from "../../common.styles/BackgroundImage";
import { RiStarSFill, RiStarSLine } from 'react-icons/ri';
import { FaMapMarker } from 'react-icons/fa';

const GridContainer = styled.div`

 @media ${({ theme }) => theme.devices.tabletS} { 
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  }
`;

const InfoText = styled.div`
  grid-area: 2 / 1 / 12 / 8;
  margin-right: 20px;
  `;


const Box = styled.div`
background-color: ${({ theme }) => theme.colors.primaryColor};
padding: 10px;
margin: 0 -10px 0 -10px;


@media ${({ theme }) => theme.devices.tabletS} { 
  grid-area: 1 / 12 / 13 / 8;
  margin-top: -40px;
    margin-bottom: -40px;
    z-index: 1;
}
`;

const FlexContainer = styled.div`
@media ${({ theme }) => theme.devices.tabletS} { 
  display: flex;
  justify-content:space-between;
  align-items:center;
}
`;

const Flex = styled.div`
    display: flex;
  align-items:center;
`;

const MapIcon = styled(FaMapMarker)`
margin-right: 10px;
`;

const Div = styled.div`
background-color: ${({ theme }) => theme.colors.primaryColor};
margin: 0 -10px 0 -10px;
padding:40px 10px;
text-align:center;
`;

const Details = () => {
  let { id } = useParams();
  const url = `${BASE_URL}/api/hotels/${id}?populate=*`;
  const [openEnquiryModal, setOpenEnquiryModal] = useState(false);
  const { data: hotel, isLoading, isError } = useApi(url, null);
  console.log(hotel);

  const toggleModal = () => {
    setOpenEnquiryModal(!openEnquiryModal);
  };

  return (
    <main>
      <Section backgroundColorLight>
        {isLoading && <Loader />}
        {isError && <ErrorMessage>A error has occurred</ErrorMessage>}
        {hotel &&
          <FlexContainer>
            <H1 title={hotel.attributes.hotelName} uppercase />
          </FlexContainer>
        }
      </Section>

      {hotel &&
        <>
          <Section>

            <GridContainer>
              <InfoText>
                <P uppercase>
                  Welcome to {hotel.attributes.hotelName}
                </P>
                <P >
                  {hotel.attributes.shortDescription}
                </P>
                <P >
                  {hotel.attributes.longDescription}
                </P>
                <P paragraph={`Price: $${hotel.attributes.price} per/night`} />
                <Button text="Booking" onClick={toggleModal} />
                {openEnquiryModal && <EnquiryModal closeModal={toggleModal} />}
              </InfoText>
              <Box>
                <p>Contact us</p>
              </Box>
            </GridContainer>

          </Section>

        </>
      }
      <Section backgroundColorLight>
        <H2 title="Our rooms" uppercase />
        <Grid>
          <div>
            <BackgroundImage img={"/images/standardRoom.webp"} height={"360px"} />
            <P uppercase paragraph="Standard room" />
            <P paragraph="Two single beds." />
          </div>
          <div>
            <BackgroundImage img={"/images/familyRoom.webp"} height={"360px"} />
            <P uppercase paragraph="Family room" />
            <P paragraph="One dobbel bed and one bunk bed." />
          </div>
          <div>
            <BackgroundImage img={"/images/premiumRoom.webp"} height={"360px"} />
            <P uppercase paragraph="Premium room" />
            <P paragraph="King size dobble bed." />
          </div>
        </Grid>
      </Section>
      <Section >
        {hotel &&
          <BackgroundImage img={hotel.attributes.coverImage.data?.attributes.formats.large?.url} height={"560px"} />
        }
      </Section>
    </main>
  );
};
export default Details;
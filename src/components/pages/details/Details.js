import { H1, H2, H3, P } from "../../common.styles/DisplayText";
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
import Grid from "../../common.styles/Grid";
import BackgroundImage from "../../common.styles/BackgroundImage";
import { RiStarSFill, RiStarSLine } from 'react-icons/ri';
import Box from "../../common.styles/Box";
import GridContainer from "../../common.styles/GridContainer";
import { AiTwotonePhone } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaMapMarker } from 'react-icons/fa';
import SEO from "../../helpers/SEO";

const StyledBox = styled(Box)`
  @media ${({ theme }) => theme.devices.tabletS} { 
    margin-top: -70px;
    margin-bottom: -70px;
  }
`;

const InfoText = styled.div`
  grid-area: 1 / 1 / 12 / 8;
  margin-right: 20px;
  margin-bottom:50px ;
  
  @media ${({ theme }) => theme.devices.tabletS} { 
    margin-bottom: 0;
  }
`;

const FlexContainer = styled.div`
  @media ${({ theme }) => theme.devices.tabletS} { 
    display: flex;
    align-items:center;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 30px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const Phone = styled(AiTwotonePhone)`
  margin-right: 20px;
  color: white;
`;

const Mail = styled(MdEmail)`
  margin-right: 20px;
  color: white;
`;

const Map = styled(FaMapMarker)`
  margin-right: 20px;
  color: white;
`;

const FullStar = styled(RiStarSFill)`
  color: ${({ theme }) => theme.colors.primaryColor}
`;

const OutlineStar = styled(RiStarSLine)`
  color: ${({ theme }) => theme.colors.primaryColor}
`;

const IconsContainer = styled.div`
  @media ${({ theme }) => theme.devices.tabletS} { 
    margin-left: 30px;
  }
`;

const getImageUrl = (imageAttributes) => {
  const imageOptions = "f_auto,q_auto"
  const url = `https://res.cloudinary.com/dxbcnekub/image/upload/c_fill,w_1920,h_768/${imageOptions}/${imageAttributes.hash}${imageAttributes.ext}`;
  return url;
};

const Details = () => {
  let { id } = useParams();

  const url = `${BASE_URL}/api/hotels/${id}?populate=*`;

  const [openEnquiryModal, setOpenEnquiryModal] = useState(false);
  const { data: hotel, isLoading, isError } = useApi(url, null);

  const toggleModal = () => {
    setOpenEnquiryModal(!openEnquiryModal);
  };

  console.log(hotel);

  return (
    <>
      {hotel &&
        <SEO
          title={hotel.attributes.hotelName}
          description={`Hotel page for ${hotel.attributes.hotelName}`}
          keywords="bergen, hotel" />}
      <main>
        <Section backgroundColorLight>
          {isLoading && <Loader />}
          {isError && <ErrorMessage>A error has occurred</ErrorMessage>}
          {hotel &&
            <FlexContainer>
              <H1 title={hotel.attributes.hotelName} uppercase />
              <IconsContainer>
                <FullStar size="2rem" />
                <FullStar size="2rem" />
                <FullStar size="2rem" />
                <FullStar size="2rem" />
                <OutlineStar size="2rem" />
              </IconsContainer>
            </FlexContainer>
          }
        </Section>
        {hotel &&
          <Section>
            <GridContainer>
              <InfoText>
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
              <StyledBox>
                <Div>
                  <H2 title="Contact us" uppercase lightColor />
                  <Flex>
                    <Phone size="2rem" />
                    <P paragraph={hotel.attributes.phone} lightColor />
                  </Flex>
                  <Flex>
                    <Mail size="2rem" />
                    <P paragraph={hotel.attributes.email} lightColor />
                  </Flex>
                  <Flex>
                    <Map size="2rem" />
                    <P paragraph={hotel.attributes.adress} lightColor />
                  </Flex>
                </Div>
              </StyledBox>
            </GridContainer>
          </Section>
        }
        <Section backgroundColorLight>
          <H2 title="Our rooms" uppercase />
          <Grid>
            <div>
              <BackgroundImage img={"/images/standardRoom.webp"} height={"360px"} />
              <H3 uppercase title="Standard room" />
              <P paragraph="Two single beds." />
            </div>
            <div>
              <BackgroundImage img={"/images/familyRoom.webp"} height={"360px"} />
              <H3 uppercase title="Family room" />
              <P paragraph="One dobbel bed and one bunk bed." />
            </div>
            <div>
              <BackgroundImage img={"/images/premiumRoom.webp"} height={"360px"} />
              <H3 uppercase title="Premium room" />
              <P paragraph="King size dobble bed." />
            </div>
          </Grid>
        </Section>
        <Section >
          {hotel &&
            <BackgroundImage img={getImageUrl(hotel.attributes.coverImage.data?.attributes)} height={"768px"} />}
        </Section>
      </main>
    </>
  );
};

export default Details;
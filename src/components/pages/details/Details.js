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


const Information = styled.div`
  
  @media ${({ theme }) => theme.devices.tabletS} { 

    margin: 0;
    height: 360px;
    grid-area: 2 / 1 / 12 / 13;
  }
`;

const Details = () => {
  let { id } = useParams();
  const url = `${BASE_URL}/api/hotels/${id}`;
  const [openEnquiryModal, setOpenEnquiryModal] = useState(false);
  const { data: hotel, isLoading, isError } = useApi(url);

  const toggleModal = () => {
    setOpenEnquiryModal(!openEnquiryModal);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorMessage>A error has occurred</ErrorMessage>;
  }

  if (hotel) {
    return (
      <>
        <Section backgroundColorLight>
          <H1 title={hotel.attributes.hotelName} uppercase />
        </Section>
        <Section>
          <Information>
            <P uppercase>
              Welcome to {hotel.attributes.hotelName}
            </P>
            <P >
              {hotel.attributes.longDescription}
            </P>
            <P paragraph={`Price: $${hotel.attributes.price} per/night`} />
            <Button text="Booking" onClick={toggleModal} />
            {openEnquiryModal && <EnquiryModal closeModal={toggleModal} />}
          </Information>
        </Section>
        <Section backgroundColorLight>
          <InfoBox img={"/images/bergenSmall.webp"} title="We offer" paragraph="At our hotel you will always get:" liste={["Breakfast", "Free wifi", "Free parking", "Daily cleaning", "Laundry service"]} />
        </Section>
        <Section>
          <H2 title="Our rooms" />
          <Grid>
            <div>
              <BackgroundImage img={"/images/bergenSmall.webp"} height={"260px"} />
              <P uppercase paragraph="Standard room" />
              <P paragraph="Two single beds." />
            </div>
            <div>
              <BackgroundImage img={"/images/bergenSmall.webp"} height={"260px"} />
              <P uppercase paragraph="Family room" />
              <P paragraph="One dobbel bed and one bunk bed." />
            </div>
            <div>
              <BackgroundImage img={"/images/bergenSmall.webp"} height={"260px"} />
              <P uppercase paragraph="Premium room" />
              <P paragraph="King size dobble bed." />
            </div>
          </Grid>
        </Section>

      </>
    );
  };
};

export default Details;
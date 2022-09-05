import { H1, P } from "../../common.styles/DisplayText";
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
          <P uppercase>
            Welcome to {hotel.attributes.hotelName}
          </P>
          <P >
            {hotel.attributes.longDescription}
          </P>
          <P paragraph={`Price: $${hotel.attributes.price} per/night`} />
          <Button text="Booking" onClick={toggleModal} />
          {openEnquiryModal && <EnquiryModal closeModal={toggleModal} />}
        </Section>

      </>
    );
  };
};

export default Details;
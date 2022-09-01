import { H1, P } from "../../common.styles/DisplayText";
import useApi from "../../../hooks/useApi";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../constants/api";
import Loader from "../../common.styles/Loader";
import { ErrorMessage } from "../../common.styles/DisplayMessages";
import styled from "styled-components";
import Section from "../../common.styles/Section";

const Details = () => {
  let { id } = useParams();
  const url = `${BASE_URL}/api/hotels/${id}`;

  const { data: hotel, isLoading, isError } = useApi(url);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorMessage>A error has occurred</ErrorMessage>;
  }

  if (hotel) {
    return (
      <Section>
        <H1 title={hotel.attributes.hotelName} uppercase />
      </Section>
    );
  };
};

export default Details;
import Section from "../../common.styles/Section";
import { H2, H3, P } from "../../common.styles/DisplayText";
import BackgroundImage from "../../common.styles/BackgroundImage";
import Button from "../../common.styles/Button.js";
import Grid from "../../common.styles/Grid.js";
import useApi from "../../../hooks/useApi";
import { BASE_URL } from "../../../constants/api";
import Loader from "../../common.styles/Loader";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ErrorMessage } from "../../common.styles/DisplayMessages";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const url = `${BASE_URL}/api/hotels`;

const FeaturedHotels = () => {
  const { data: featuredList, isLoading, isError } = useApi(url, []);

  const featuredHotels = featuredList.filter((hotel) => {
    if (hotel.attributes.isFeatured === true) {
      return true;
    }
    return false;
  });


  return (
    <>
      <H2 title="Featured hotels" uppercase />
      <P paragraph="Some of our most popular hotels at the moment." />
      {isLoading && <Loader />}
      {isError && <ErrorMessage>A error has occurred</ErrorMessage>}
      <Grid>
        {featuredHotels.map((featuredHotel) => (
          <StyledLink key={featuredHotel.id} to={`/details/${featuredHotel.id}`}>
            <BackgroundImage img={"/images/bergenSmall.webp"} height={"260px"} />
            <H2 title={featuredHotel.attributes.hotelName} uppercase />
            <P paragraph={featuredHotel.attributes.shortDescription} />
            <P paragraph={`Price: $${featuredHotel.attributes.price} per/night`} />
            <Button text="View" />
          </StyledLink>
        ))}
      </Grid>
    </>
  )
}

export default FeaturedHotels;
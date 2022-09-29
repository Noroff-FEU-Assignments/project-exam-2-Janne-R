import Section from "../../common.styles/Section";
import { H1, H3, P } from "../../common.styles/DisplayText";
import FilterHotels from "./FilterHotels";
import styled from "styled-components";
import BackgroundImage from "../../common.styles/BackgroundImage";
import Button from "../../common.styles/Button";
import useApi from '../../../hooks/useApi';
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../constants/api";
import { ErrorMessage } from "../../common.styles/DisplayMessages";
import Loader from "../../common.styles/Loader";
import { useState } from "react";
import Grid from "../../common.styles/Grid";
import SEO from "../../helpers/SEO";

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
`;

const Div = styled.div`
  margin-top:auto;
`;

const url = `${BASE_URL}/api/hotels?populate=*`;

const Hotels = () => {

  const { data: hotelList, isLoading, isError } = useApi(url, []);
  const [filterResult, setFilterResult] = useState(null);

  const hotelsToPresent = filterResult ? filterResult : hotelList;

  return (
    <>
      <SEO
        title="Hotels"
        description="All our hotels in Bergen"
        keywords="bergen, hotel, hotels" />
      <main>
        <Section backgroundColorLight>
          {isLoading && <Loader />}
          {isError && <ErrorMessage>A error has occurred</ErrorMessage>}
          <H1 title="All hotels" uppercase />
          <FilterHotels filterList={hotelList} filterResultUpdated={setFilterResult} />
        </Section>
        <Section>
          <Grid>
            {hotelsToPresent.map((hotel) => (
              <StyledLink key={hotel.id} to={`/details/${hotel.id}`}>
                <BackgroundImage img={hotel.attributes.coverImage.data?.attributes.formats.small?.url} height={"360px"} />
                <H3 title={hotel.attributes.hotelName} uppercase />
                <P paragraph={hotel.attributes.shortDescription} />
                <P paragraph={`Price: $${hotel.attributes.price} per/night`} />
                <Div>
                  <Button text="View" />
                </Div>
              </StyledLink>
            ))}
          </Grid>

          {filterResult && filterResult.length === 0 && hotelList.length > 0 && <ErrorMessage>No hotels matching your search</ErrorMessage>}
          {hotelList.length === 0 && !isLoading && <ErrorMessage>Sorry we have no hotels</ErrorMessage>}
        </Section>
      </main>
    </>
  )
}

export default Hotels;
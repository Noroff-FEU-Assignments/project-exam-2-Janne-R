import Section from "../../common.styles/Section";
import { H1, H2, P } from "../../common.styles/DisplayText";
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
import SearchAutoComplete from "./SearchAutoComplete";

const Grid = styled.div`
@media ${({ theme }) => theme.devices.tabletS} { 
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
}
@media ${({ theme }) => theme.devices.laptopS} { 
  grid-template-columns: repeat(4, 1fr);;
}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const url = `${BASE_URL}/api/hotels`;

const Hotels = () => {
  const { data: hotelList, isLoading, isError } = useApi(url);
  const [filterResult, setFilterResult] = useState(null);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorMessage>A error has occurred</ErrorMessage>;
  }

  const hotelsToPresent = filterResult ? filterResult : hotelList;

  if (hotelList) {
    return (
      <>
        <Section backgroundColorLight>
          <H1 title="All hotels" uppercase />
          <FilterHotels filterList={hotelList} filterResultUpdated={setFilterResult} />
          <SearchAutoComplete searchList={hotelList} />
        </Section>
        <Section>
          <Grid>
            {hotelsToPresent.map((hotel) => (
              <StyledLink to={`/details/${hotel.id}`}>
                <BackgroundImage img={"/images/bergenSmall.webp"} height={"260px"} />
                <H2 title={hotel.attributes.hotelName} uppercase />
                <P paragraph={hotel.attributes.shortDescription} />
                <P paragraph={hotel.attributes.price} />
                <Button text="View" />
              </StyledLink>
            ))}

          </Grid>
          {filterResult && filterResult.length === 0 && hotelList.length > 0 && <ErrorMessage>No hotels matching your search</ErrorMessage>}
          {hotelList.length === 0 && <ErrorMessage>Sorry we have no hotels</ErrorMessage>}
        </Section>
      </>
    )
  }
}

export default Hotels;
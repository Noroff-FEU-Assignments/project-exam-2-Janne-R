import Section from "../../common.styles/Section";
import { H1, H2, P } from "../../common.styles/DisplayText";
import Search from "../../common.styles/Search";
import styled from "styled-components";
import BackgroundImage from "../../common.styles/BackgroundImage";
import Button from "../../common.styles/Button";
import useApi from '../../../hooks/useApi';
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../constants/api";
import { ErrorMessage } from "../../common.styles/DisplayMessages";
import Loader from "../../common.styles/Loader";

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
  const { data, isLoading, isError } = useApi(url, null);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorMessage>A error has occurred</ErrorMessage>;
  }

  if (data) {
    return (
      <>
        <Section backgroundColorLight>
          <H1 title="All hotels" uppercase />
          <Search />
        </Section>
        <Section>
          <Grid>
            {data.map((hotel) => (
              <StyledLink to={`/details/${hotel.id}`}>
                <BackgroundImage img={"/images/bergenSmall.webp"} height={"260px"} />
                <H2 title={hotel.attributes.hotelName} uppercase />
                <P paragraph={hotel.attributes.shortDescription} />
                <P paragraph={hotel.attributes.price} />
                <Button text="View" />
              </StyledLink>
            ))}
          </Grid>
        </Section>
      </>
    )
  }
}

export default Hotels;
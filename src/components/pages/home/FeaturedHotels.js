import Section from "../../common.styles/Section";
import { H2, H3, P } from "../../common.styles/DisplayText";
import BackgroundImage from "../../common.styles/BackgroundImage";
import Button from "../../common.styles/Button.js";
import styled from "styled-components";

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

const FeaturedHotels = () => {
  return (
    <>
      <H2 title="Featured hotels" uppercase />
      <P paragraph="Some of our most popular hotels at the moment." />
      <Grid>
        <div>
          <BackgroundImage img={"/images/bergenSmall.webp"} height={"260px"} />
          <H3 title="test" uppercase />
          <P paragraph="tetet." />
          <Button text="View" />
        </div>
        <div>
          <BackgroundImage img={"/images/bergenSmall.webp"} height={"260px"} />
          <H3 title="test" uppercase />
          <P paragraph="tetet." />
          <Button text="View" />
        </div>
        <div>
          <BackgroundImage img={"/images/bergenSmall.webp"} height={"260px"} />
          <H3 title="test" uppercase />
          <P paragraph="tetet." />
          <Button text="View" />
        </div>
        <div>
          <BackgroundImage img={"/images/bergenSmall.webp"} height={"260px"} />
          <H3 title="test" uppercase />
          <P paragraph="tetet." />
          <Button text="View" />
        </div>
      </Grid>
    </>
  )
}

export default FeaturedHotels;
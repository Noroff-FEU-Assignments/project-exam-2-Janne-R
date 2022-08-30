import styled from "styled-components";
import Container from "./Container";

const StyledSection = styled.section`
background-color: ${({ backgroundColorLight, theme }) => backgroundColorLight ? theme.colors.backgroundColorLight : theme.colors.backgroundColorDark};
`;

const Section = ({ children, backgroundColorLight }) => {
  return (
    <StyledSection backgroundColorLight={backgroundColorLight} >
      <Container>
        {children}
      </Container>
    </StyledSection>
  )
}

export default Section;
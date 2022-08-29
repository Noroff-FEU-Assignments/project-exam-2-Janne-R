import styled from "styled-components";

const Div = styled.div`
  padding: 10px;
  max-width: 1200px;
  margin: 0px auto;
`;

const StyledSection = styled.section`
background-color: ${({ backgroundColorLight, theme }) => backgroundColorLight ? theme.colors.backgroundColorLight : theme.colors.backgroundColorDark};
`;

const Section = ({ children, backgroundColorLight }) => {
  return (
    <StyledSection backgroundColorLight={backgroundColorLight} >
      <Div>
        {children}
      </Div>
    </StyledSection>
  )
}

export default Section;
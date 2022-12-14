import styled from "styled-components";

const StyledH1 = styled.h1`
  border-top: 5px solid ${({ theme }) => theme.colors.primaryColor};
  padding-top:10px;
  max-inline-size: fit-content;
  font-weight: bold;
  color: ${({ lightColor, theme }) => lightColor ? theme.colors.textColorLight : theme.colors.textColorDark};
  text-transform: ${props => props.uppercase ? "uppercase" : "initial"};
`;

const StyledH2 = styled.h2`
  border-top: 5px solid ${({ theme }) => theme.colors.primaryColor};
  padding-top:10px;
  max-inline-size: fit-content;
  font-weight: bold;
  color: ${({ lightColor, theme }) => lightColor ? theme.colors.textColorLight : theme.colors.textColorDark};
  text-transform: ${props => props.uppercase ? "uppercase" : "initial"};
`;

const StyledH3 = styled.h3`
  color: ${({ lightColor, theme }) => lightColor ? theme.colors.textColorLight : theme.colors.textColorDark};
  text-transform: ${props => props.uppercase ? "uppercase" : "initial"};
`;

const StyledH4 = styled.h4`
  color: ${({ lightColor, theme }) => lightColor ? theme.colors.textColorLight : theme.colors.textColorDark};
  text-transform: ${props => props.uppercase ? "uppercase" : "initial"};
`;

const StyledP = styled.p`
  color: ${({ lightColor, theme }) => lightColor ? theme.colors.textColorLight : theme.colors.textColorDark};
  text-transform: ${props => props.uppercase ? "uppercase" : "initial"};
`;

export const H1 = ({ title, lightColor, uppercase }) => {
  return (
    <StyledH1 lightColor={lightColor} uppercase={uppercase}>{title} </StyledH1>
  );
};

export const H2 = ({ title, lightColor, uppercase, borderTop }) => {
  return (
    <StyledH2 lightColor={lightColor} uppercase={uppercase} borderTop={borderTop}>{title} </StyledH2>
  );
};

export const H3 = ({ title, lightColor, uppercase }) => {
  return (
    <StyledH3 lightColor={lightColor} uppercase={uppercase}>{title} </StyledH3>
  );
};

export const H4 = ({ title, lightColor, uppercase }) => {
  return (
    <StyledH4 lightColor={lightColor} uppercase={uppercase}>{title} </StyledH4>
  );
};

export const P = ({ paragraph, lightColor, uppercase, children }) => {
  return (
    <StyledP lightColor={lightColor} uppercase={uppercase}>{paragraph || children}</StyledP>
  );
};
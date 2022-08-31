import styled from "styled-components";

export const Message = styled.p`
  color: black;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 50px;
  text-align: center;
  padding: 10px;
  background-color: pink;
  border-radius: 6px;
`;

export const ErrorMessage = styled(Message)`
  background-color: ${({ theme }) => theme.colors.errorColor};
  color: ${({ theme }) => theme.colors.textColorLight};
`;

export const SuccessMessage = styled(Message)`
  background-color: ${({ theme }) => theme.colors.successColor};
  color: ${({ theme }) => theme.colors.textColorLight};
`;
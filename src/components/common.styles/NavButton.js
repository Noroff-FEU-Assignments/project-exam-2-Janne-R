import styled from "styled-components";

const ButtonStyle = styled.button`
 
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.backgroundColorLight};
  color: ${({ theme }) => theme.colors.textColorDark};
  border: 1px solid ${({ theme }) => theme.colors.buttonColor};
  font-size: 21px;
  border-radius: 3px;
  padding: 15px;
  margin: 35px 0 15px 0;
  cursor: pointer;
  transition-duration: 0.4s;
  :focus{
    background-color: ${({ theme }) => theme.colors.buttonColor};
    color: ${({ theme }) => theme.colors.textColorLight};
  }
`;


const NavButton = ({ text, onClick }) => {
  return (
    <ButtonStyle >{text} </ButtonStyle>
  );
};

export default NavButton;
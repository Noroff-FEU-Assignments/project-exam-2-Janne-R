import styled from "styled-components";
import { MdKeyboardArrowRight } from 'react-icons/md';


const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.buttonColor};
  color: ${({ theme }) => theme.colors.textColorLight};
  font-size: 21px;
  border: none;
  border-radius: 3px;
  padding: 15px;
  margin: 35px 0 15px 0;
  cursor: pointer;
  transition-duration: 0.4s;
  :hover{
    background-color: ${({ theme }) => theme.colors.highlightColor};
    color: ${({ theme }) => theme.colors.textColorDark};
  }
`;

const Arrow = styled(MdKeyboardArrowRight)`
margin-left:20px;
`;

const Button = ({ text, onClick }) => {
  return (
    <ButtonStyle onClick={onClick}>{text}<Arrow size="2rem" /> </ButtonStyle>
  );
};

export default Button;
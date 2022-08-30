import styled from "styled-components";
import { BiSearchAlt2 } from 'react-icons/bi';

const Form = styled.form`
  margin-top: 40px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;  
  @media ${({ theme }) => theme.devices.tabletS} { 
    width: 60%;
    margin-bottom: 0;
  }
`;

const Input = styled.input`
  padding: 10px;
  width: 80%;
  background-color: ${({ theme }) => theme.colors.backgroundColorDark};
  border: none;
  border-radius: 3px;
`;

const SearchIcon = styled(BiSearchAlt2)`
  margin-left: -30px;
`;

const Search = () => {
  return (
    <Form>
      <Input placeholder="Search hotels here..." />
      <SearchIcon size="1.5rem" />
    </Form>

  )
}

export default Search;
import styled from "styled-components";
import { BiSearchAlt2 } from 'react-icons/bi';

const Form = styled.form`
  margin-top: 40px;
  margin-bottom: 20px;
  display: flex;
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
  border: 1px solid ${({ theme }) => theme.colors.primaryColor};
  border-radius: 3px;
`;

const SearchIcon = styled(BiSearchAlt2)`
  margin-left: -30px;
  fill: grey;
  width: 20px;
  height: 20px;
`;

const FilterHotels = ({ filterList, filterResultUpdated }) => {
  const onKeyUp = (event) => {
    const filterValue = event.target.value.trim().toLowerCase();

    const filteredHotels = filterList.filter((hotel) => {
      if (hotel.attributes.hotelName.toLowerCase().includes(filterValue)) {
        return true;
      }

      return false;
    });

    filterResultUpdated(filteredHotels);
  }
  return (
    <>
      <Form>
        <Input onChange={onKeyUp} placeholder="Filter hotel..." />
        <SearchIcon size="1.5rem" />
      </Form>
    </>

  )
}

export default FilterHotels;
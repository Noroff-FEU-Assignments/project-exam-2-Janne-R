import styled from "styled-components";
import { P } from "../../common.styles/DisplayText";
import useApi from '../../../hooks/useApi';
import { BASE_URL } from "../../../constants/api";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useNavigate } from "react-router-dom";

const Div = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  margin: -65px -10px 0 -10px;
  @media ${({ theme }) => theme.devices.tabletS} { 
    flex-direction: row;
    text-align: left;
    display: flex;
    justify-content: space-around;
    margin: -65px 30px 0 30px;
  }
`;


const SearchContainer = styled.div`
  width: 100%;
  @media ${({ theme }) => theme.devices.mobileL} { 
    width:80% ;
  }
  @media ${({ theme }) => theme.devices.tabletS} { 
  width:50%;
  }
`;

const url = `${BASE_URL}/api/hotels`;

const Welcome = () => {
  const { data: hotelList } = useApi(url);

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.hotelName}</span>
      </>
    )
  }

  const navigate = useNavigate();

  const handleOnSelect = (item) => {
    navigate(`/details/${item.id}`);
    return item;
  }

  if (hotelList) {
    const mapped = hotelList.map(hotel => ({
      id: hotel.id,
      ...hotel.attributes,
      name: hotel.attributes.hotelName,
    }));

    return (
      <Div>
        <P paragraph="Welcome to Holidaze" uppercase lightColor />
        <SearchContainer>
          <ReactSearchAutocomplete styling={{ borderRadius: "3x", backgroundColor: "#F8F4F0", fontFamily: "Open sans", fontSize: "18px", }}
            items={mapped}
            onSelect={handleOnSelect}
            formatResult={formatResult}
          />
        </SearchContainer>

      </Div>
    )
  }
}

export default Welcome;
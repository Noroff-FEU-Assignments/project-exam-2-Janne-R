import styled from "styled-components";
import { P } from "../../common.styles/DisplayText";
import useApi from '../../../hooks/useApi';
import { BASE_URL } from "../../../constants/api";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useNavigate } from "react-router-dom";
import { useTheme } from 'styled-components'

const Div = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  margin: -65px -10px 0 -10px;
  @media ${({ theme }) => theme.devices.laptopS} { 
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
  @media ${({ theme }) => theme.devices.laptopS} { 
  width:50%;
  }
`;

const url = `${BASE_URL}/api/hotels`;

const Welcome = () => {
  const { data: hotelList } = useApi(url);
  const theme = useTheme();
  const navigate = useNavigate();

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left', cursor: "pointer" }}>{item.hotelName}</span>
      </>
    )
  }

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

    const style = {
      borderRadius: "3x",
      backgroundColor: theme.colors.backgroundColorDark,
    };


    return (
      <Div>
        <div>
          <P paragraph="Search for your next hotel in Bergen here." lightColor />
        </div>
        <SearchContainer>
          <ReactSearchAutocomplete styling={style}
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
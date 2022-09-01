import styled from "styled-components";
import { P } from "../../common.styles/DisplayText";
import SearchHotels from "./SearchHotels";

import useApi from '../../../hooks/useApi';
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../constants/api";
import { useState } from "react";

const Div = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  text-align: center;
  padding: 20px;
  margin: -65px -10px 0 -10px;
  @media ${({ theme }) => theme.devices.tabletS} { 
    text-align: left;
    display: flex;
    justify-content: space-around;
    margin: -65px 30px 0 30px;
  }
`;
const url = `${BASE_URL}/api/hotels`;

const Welcome = () => {

  const { data: hotelList } = useApi(url);
  const [filterResult, setFilterResult] = useState(null);

  const hotelsToPresent = filterResult ? filterResult : hotelList;

  if (hotelList) {
    return (
      <Div>
        <P paragraph="Welcome to Holidaze" uppercase lightColor />
        <SearchHotels filterList={hotelList} filterResultUpdated={setFilterResult} />
        <div>
          {hotelsToPresent.map((hotel) => (
            <Link to={`/details/${hotel.id}`}>
              <p>{hotel.attributes.hotelName}</p>
            </Link>
          ))}
        </div>
      </Div>
    )
  }
}

export default Welcome;






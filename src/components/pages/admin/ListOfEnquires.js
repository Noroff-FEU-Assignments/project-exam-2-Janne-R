import { H2, H3, P } from "../../common.styles/DisplayText";
import useApi from '../../../hooks/useApi';
import { BASE_URL } from "../../../constants/api";
import { ErrorMessage } from "../../common.styles/DisplayMessages";
import Loader from "../../common.styles/Loader";
import AuthContext from "../../../context/AuthContext";
import { useContext } from "react";
import styled from "styled-components";


const Div = styled.div`
border: 1px solid ${({ theme }) => theme.colors.primaryColor};
padding: 10px; 
margin-bottom: 10px;

`;

const url = `${BASE_URL}/api/enquiries?populate=*`;

const ListOfEnquires = () => {

  const [auth] = useContext(AuthContext);
  const { data: enquiriesList, isLoading, isError } = useApi(url, [], { Authorization: `Bearer ${auth?.jwt}` });


  return (
    <>
      <H2 title="All enquires" uppercase />
      {isLoading && <Loader />}
      {isError && <ErrorMessage>A error has occurred</ErrorMessage>}
      {enquiriesList.map((enquiry) => (
        <Div key={enquiry.id}>
          <H3 title={`Hotel name: ${enquiry.attributes.hotel?.data.attributes.hotelName}`} />
          <P paragraph={`First Name: ${enquiry.attributes.firstName}`} />
          <P paragraph={`Last Name: ${enquiry.attributes.lastName}`} />
          <P paragraph={`Email: ${enquiry.attributes.email}`} />
          <P paragraph={`Message: ${enquiry.attributes.message}`} />
          <P paragraph={`Room type: ${enquiry.attributes.roomType}`} />
          <P paragraph={`Start date: ${enquiry.attributes.startDate}`} />
          <P paragraph={`End date: ${enquiry.attributes.endDate}`} />
        </Div>

      ))}
    </>
  )
}

export default ListOfEnquires;
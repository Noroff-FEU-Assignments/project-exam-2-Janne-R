import { H2, P } from "../../common.styles/DisplayText";
import useApi from '../../../hooks/useApi';
import { BASE_URL } from "../../../constants/api";
import { ErrorMessage } from "../../common.styles/DisplayMessages";
import Loader from "../../common.styles/Loader";
import AuthContext from "../../../context/AuthContext";
import { useContext } from "react";
import styled from "styled-components";

const Div = styled.div`
border: 1px solid black;
`;

const url = `${BASE_URL}/api/enquiries`;

const ListOfEnquires = () => {

  const [auth] = useContext(AuthContext);
  const { data: enquiresList, isLoading, isError } = useApi(url, [], { Authorization: `Bearer ${auth.jwt}` });
  console.log(enquiresList);

  return (
    <>
      <H2 title="All enquires" uppercase />
      {isLoading && <Loader />}
      {isError && <ErrorMessage>A error has occurred</ErrorMessage>}
      {enquiresList.map((enquire) => (
        <Div>
          <P paragraph={enquire.attributes.firstName} />
          <P paragraph={enquire.attributes.lastName} />
          <P paragraph={enquire.attributes.email} />
          <P paragraph={enquire.attributes.message} />
          <P paragraph={enquire.attributes.roomType} />
        </Div>

      ))}
    </>
  )
}

export default ListOfEnquires
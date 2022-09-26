import { H2, P } from "../../common.styles/DisplayText";
import { BASE_URL } from "../../../constants/api";
import AuthContext from "../../../context/AuthContext";
import { useContext } from "react";
import useApi from '../../../hooks/useApi';
import Loader from "../../common.styles/Loader";
import { ErrorMessage } from "../../common.styles/DisplayMessages";
import styled from "styled-components";

const Div = styled.div`
border: 1px solid black;
`;

const url = `${BASE_URL}/api/contacts`;

const ListOfMessages = () => {
  const [auth] = useContext(AuthContext);

  const { data: contactList, isLoading, isError } = useApi(url, [], { Authorization: `Bearer ${auth?.jwt}` });

  return (
    <>
      <H2 title="All messages" uppercase />
      {isLoading && <Loader />}
      {isError && <ErrorMessage>A error has occurred</ErrorMessage>}
      {contactList.map((contact) => (
        <Div key={contact.id}>
          <P paragraph={contact.attributes.firstName} />
          <P paragraph={contact.attributes.lastName} />
          <P paragraph={contact.attributes.email} />
          <P paragraph={contact.attributes.message} />
        </Div>
      ))}
    </>
  )
}

export default ListOfMessages
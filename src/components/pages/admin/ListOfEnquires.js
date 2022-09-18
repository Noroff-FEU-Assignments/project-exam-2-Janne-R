import { H2, P } from "../../common.styles/DisplayText";
import useApi from '../../../hooks/useApi';
import { BASE_URL } from "../../../constants/api";
import { ErrorMessage } from "../../common.styles/DisplayMessages";
import Loader from "../../common.styles/Loader";
import AuthContext from "../../../context/AuthContext";
import { useContext } from "react";

const url = `${BASE_URL}/api/enquiries`;

const ListOfEnquires = () => {
  const [auth] = useContext(AuthContext);
  const { data: enquiresList, isLoading, isError } = useApi(url, [], { Authorization: `Bearer ${auth.jwt}` });


  return (
    <>
      <H2 title="All enquires" uppercase />
      {isLoading && <Loader />}
      {isError && <ErrorMessage>A error has occurred</ErrorMessage>}
      {enquiresList.map((enquire) => (
        <P paragraph={enquire.attributes.firstName} />

      ))}
    </>
  )
}

export default ListOfEnquires
import { useContext, useEffect } from "react";
import AuthContext from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { H1, P } from "../../common.styles/DisplayText";
import Section from "../../common.styles/Section";
import NavButton from "../../common.styles/NavButton";
import styled from "styled-components";
import AddNewHotel from "./AddNewHotel";
import ListOfEnquires from "./ListOfEnquires";
import ListOfMessages from "./ListOfMessages";

const Flex = styled.div`
display: flex;
flex-direction: column;

@media ${({ theme }) => theme.devices.laptopS} { 
  flex-direction: row;
  justify-content: space-between;
}
`;

const Admin = () => {
  const [auth] = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  }, [auth, navigate]);

  return (
    <>
      <Section backgroundColorLight>
        <H1 title="Admin" uppercase />
        <P paragraph="Welcome to your admin page" />
      </Section>
      <Section >
        <Flex>
          <NavButton text="Create new establishment" />
          <NavButton text="List of enquires" />
          <NavButton text="List of messages" />
        </Flex>
        <AddNewHotel />
      </Section>
      <Section backgroundColorLight>
        <ListOfEnquires />
      </Section>
      <Section>
        <ListOfMessages />
      </Section>
    </>
  )
}

export default Admin;
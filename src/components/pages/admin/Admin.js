import { useContext, useEffect } from "react";
import { HashLink } from 'react-router-hash-link';
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
    <main>
      <Section backgroundColorLight>
        <H1 title="Admin" uppercase />
        <P paragraph="Welcome to your admin page" />
      </Section>
      <Section >
        <Flex>
          <HashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
            to="#addNew">
            <NavButton text="Create new establishment" />
          </HashLink>
          <HashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
            to="#enquiries">
            <NavButton text="List of enquires" />
          </HashLink>
          <HashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
            to="#messages">
            <NavButton text="List of messages" />
          </HashLink>
        </Flex>
        <AddNewHotel />
      </Section>
      <Section backgroundColorLight>
        <ListOfEnquires />
      </Section>
      <Section>
        <ListOfMessages />
      </Section>
    </main>
  )
}

export default Admin;
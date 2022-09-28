import styled from "styled-components";
import { H1, P } from "../../common.styles/DisplayText";
import Section from "../../common.styles/Section";
import { FaLock } from 'react-icons/fa';
import LoginForm from "./LoginForm";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

const Div = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  margin: 0 -10px 0 -10px;
  padding:40px 10px;
  text-align:center;
`;

const Login = () => {
  useDocumentTitle('Holidaze | Login');

  return (
    <main>
      <Section backgroundColorLight>
        <H1 title="Login" />
        <P paragraph="Login for admins of Holidaze and hotel owners." />
      </Section>
      <Section>
        <Div>
          <FaLock color="white" size="3rem" />
          <P lightColor paragraph="Welcome back" uppercase />
          <P lightColor paragraph="Please login to your account to lorem ipusm." />
        </Div>
      </Section>
      <Section>
        <LoginForm />
      </Section>
    </main>
  )
}

export default Login;
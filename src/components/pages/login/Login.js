import styled from "styled-components";
import { H1, H2, P } from "../../common.styles/DisplayText";
import Section from "../../common.styles/Section";
import { FaLock } from 'react-icons/fa';
import LoginForm from "./LoginForm";

const Div = styled.div`
background-color: ${({ theme }) => theme.colors.primaryColor};
margin: 0 -10px 0 -10px;
padding:40px 10px;
text-align:center;
`;

const Login = () => {
  return (
    <main>
      <Section backgroundColorLight>
        <H1 title="Login" />
        <P paragraph="Login for admins of Holidaze and hotel owners." />
      </Section>
      <Section>
        <Div>
          <FaLock color="white" size="3rem" />
          <H2 lightColor title="Welcome back" />
          <P lightColor paragraph="Please login to your 
account to lorem ipusm.  "/>
        </Div>
      </Section>
      <Section>
        <LoginForm />
      </Section>
    </main>
  )
}

export default Login;
import styled from "styled-components";
import Section from "../common.styles/Section";
import { NavLink } from "react-router-dom";
import { H4, P } from "../common.styles/DisplayText";
import { FaPhoneAlt, FaMapMarker } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const FooterContainer = styled.footer`
  @media ${({ theme }) => theme.devices.tabletS} { 
display:flex ;
justify-content: space-between;
  }
`;

const PhoneIcon = styled(FaPhoneAlt)`
  margin-right: 10px;
`;

const MailIcon = styled(MdEmail)`
  margin-right: 10px;
`;

const MapIcon = styled(FaMapMarker)`
  margin-right: 10px;
`;

const Ul = styled.ul`
list-style-type: none;
padding:0 ;

li {
    margin-bottom:20px;
    margin-top:10px;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.textColorDark};
    }
  }
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  height: 25px;
`;


const Flex = styled.div`
display: flex;
align-items: center;
`;

const Footer = () => (
  <Section backgroundColorLight>
    <FooterContainer>
      <div>
        <H4 uppercase title="Navigation" />
        <Ul>
          <li>
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/hotels">
              Hotels
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">
              Login
            </NavLink>
          </li>
        </Ul>
      </div>
      <div>
        <H4 uppercase title="Contact Information" />
        <Ul>
          <Li>
            <PhoneIcon />
            <P paragraph="+47 123 12 123" aria-label="Phone" />
          </Li>
          <Li>
            <MailIcon />
            <P paragraph="post@codestack.com" aria-label="Email" />
          </Li>
          <Li>
            <MapIcon />
            <P paragraph="123 Street, Norway" aria-label="Address" />
          </Li>
        </Ul>
      </div>
    </FooterContainer>
  </Section>
);

export default Footer;
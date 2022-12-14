import styled from "styled-components";
import Section from "../common.styles/Section";
import { NavLink } from "react-router-dom";
import { H4, P } from "../common.styles/DisplayText";
import { FaPhoneAlt, FaMapMarker } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { HashLink } from 'react-router-hash-link';
import { FaArrowAltCircleUp } from 'react-icons/fa';

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

const Arrow = styled(FaArrowAltCircleUp)`
  margin-left: 10px; 
`;

const StyledHashLink = styled(HashLink)`  
  display: flex;
  align-items: flex-end;
  justify-content: end;
  margin-block-start: 1.33em;
  color: ${({ theme }) => theme.colors.textColorDark};
  text-decoration-line: none;
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
            <P paragraph="99999999" aria-label="Phone" />
          </Li>
          <Li>
            <MailIcon />
            <P paragraph="post@holidaze.com" aria-label="Email" />
          </Li>
          <Li>
            <MapIcon />
            <P paragraph="123 Street, Bergen, Norway" aria-label="Address" />
          </Li>
        </Ul>
      </div>

    </FooterContainer>
    <StyledHashLink to="#top">To top of page <Arrow size="2rem" /></StyledHashLink>
  </Section>
);

export default Footer;
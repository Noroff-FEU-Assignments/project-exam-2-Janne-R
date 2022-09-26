import { H2, P } from "../../common.styles/DisplayText";
import styled from "styled-components";
import { FaPhoneAlt, FaMapMarker } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Star from "../../common.styles/Star";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  background-color: ${({ theme }) => theme.colors.backgroundColorDark};
  margin: 50px -10px 0 -10px;
  
  @media ${({ theme }) => theme.devices.tabletS} { 
    background-color: ${({ theme }) => theme.colors.backgroundColorLight};
    margin:0 ;
    padding-top: 50px;
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

const Flex = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
  margin-bottom: 20px;
  justify-content:center;
`;

const ContactDetails = () => {
  return (
    <>
      <Div>
        <P uppercase paragraph="Holidaze admin" />
        <Flex>
          <PhoneIcon />
          <P paragraph="99999999" aria-label="Phone" />
        </Flex>
        <Flex>
          <MailIcon />
          <P paragraph="post@holidaze.com" aria-label="Email" />
        </Flex>
        <Flex>
          <MapIcon />
          <P paragraph="123 Street, Bergen, Norway" aria-label="Address" />
        </Flex>
        <Star size="15rem" />
      </Div>
    </>
  )
}

export default ContactDetails;
import { H2, P } from "../../common.styles/DisplayText";
import styled from "styled-components";

const Div = styled.div`
text-align: center;
background-color: ${({ theme }) => theme.colors.backgroundColorDark};
margin: 50px -10px 0 -10px;
@media ${({ theme }) => theme.devices.tabletS} { 
  background-color: ${({ theme }) => theme.colors.backgroundColorLight};
  margin:0 ;
}
`;


const ContactDetails = () => {
  return (
    <>
      <Div>
        <P paragraph="Holidaze admin" uppercase />
        <div>
          <P paragraph="Adress:" uppercase />
          <P paragraph="123 Street, Bergen, Norway" />
        </div>
        <div>
          <P paragraph="Phone:" uppercase />
          <P paragraph="99999999" />
        </div>
        <div>
          <P paragraph="Mail:" uppercase />
          <P paragraph="admin@holidaze.com" />
        </div>
      </Div>
    </>
  )
}

export default ContactDetails;
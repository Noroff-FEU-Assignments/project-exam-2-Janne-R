import styled from "styled-components";
import { MdClose } from 'react-icons/md';
import { H1 } from "../../common.styles/DisplayText";
import BookingEnquiry from "./BookingEnquiry";

const Overlay = styled.div`
  position: fixed;
  overflow-y: scroll;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,0.8);
`;

const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundColorLight};
  padding:10px;
  margin: 15% auto; 
  width: 80%; 
  max-width: 800px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  font-size: xx-large;
`;

const EnquryModal = ({ closeModal }) => {
  return (
    <Overlay>
      <ModalContent>
        <Flex>
          <H1 title="Booking enqury" />
          <CloseModalButton aria-label="Close modal" onClick={closeModal}> <MdClose /></CloseModalButton>
        </Flex>
        <BookingEnquiry />
      </ModalContent>
    </Overlay>
  )
}

export default EnquryModal;
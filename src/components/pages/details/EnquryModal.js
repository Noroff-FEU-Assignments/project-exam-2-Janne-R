import styled from "styled-components";
import { MdClose } from 'react-icons/md';

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
  background-color: blue;
  padding:10px;
  margin: 15% auto; 
  width: 80%; 
  max-width: 800px;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  font-size: xx-large;
`;


const EnquryModal = () => {
  return (

    <Overlay>
      <ModalContent>
        <h3>Modal</h3>
        <CloseModalButton aria-label="Close modal"> <MdClose /></CloseModalButton>
      </ModalContent>
    </Overlay>

  )
}

export default EnquryModal;
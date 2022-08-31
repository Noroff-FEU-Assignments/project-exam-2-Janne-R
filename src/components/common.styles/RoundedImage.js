import styled from "styled-components";

const RoundedImage = styled.div`
  background-image:url(${props => props.roundImg});
  height: 100px;
  border-radius: 50%;
  width: 100px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export default RoundedImage;
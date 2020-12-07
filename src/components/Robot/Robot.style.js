import styled from "styled-components";

export const StyledImgDiv = styled.div`
  position: absolute;
  height: 50px;
  width: 50px;
  top: ${(props) => props.yposition};
  left: ${(props) => props.xposition};
`;

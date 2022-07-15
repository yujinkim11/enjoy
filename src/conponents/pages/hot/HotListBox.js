import styled from "styled-components";
import { mainStyle } from "../../../styles/globalstyle";

const ListBoxWrap = styled.div`
  padding: ${mainStyle.padding};
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
`;
const Box = styled.div`
  width: 370px;
  height: 492px;
  background-color: #5d5d5d;
  :hover {
    transform: scale(1.1, 1.1);
    transition: 0.5s;
  }
`;

export const HotListBox = () => {
  return (
    <ListBoxWrap>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </ListBoxWrap>
  );
};

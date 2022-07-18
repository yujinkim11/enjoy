import styled from "styled-components";
import { mainStyle } from "../../../styles/globalstyle";

const SearchBoxWrap = styled.div`
  padding: ${mainStyle.padding};
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const Box = styled.div`
  width: 350px;
  height: 450px;
  background-color: #5d5d5d;
`;

export const SearchBox = () => {
  return (
    <SearchBoxWrap>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </SearchBoxWrap>
  );
};

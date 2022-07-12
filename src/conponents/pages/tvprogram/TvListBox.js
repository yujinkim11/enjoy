import styled from "styled-components";
import { mainStyle } from "../../../styles/globalstyle";

const TvListWrap = styled.div``;

const TvListTitle = styled.h3`
  font-size: 30px;
`;

const ListWrap = styled.div`
  display: flex;
`;

const ListBox = styled.div`
  width: 350px;
  height: 450px;
  background-color: #707070;
`;

export const TvListBox = () => {
  return (
    <>
      <TvListWrap>
        <TvListTitle>TOP! 인기 영화</TvListTitle>
        <ListWrap>
          <ListBox />
          <ListBox />
          <ListBox />
          <ListBox />
        </ListWrap>
      </TvListWrap>
    </>
  );
};

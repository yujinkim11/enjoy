import styled from "styled-components";
import { SearchBox } from "./SearchBox";

const SearchWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SearchTitle = styled.div`
  margin-top: 30px;
  text-align: center;
  h3 {
    font-size: 60px;
    font-weight: 900;
  }
  p {
    font-size: 40px;
    font-weight: 500;
    color: #707070;
    margin-top: 30px;
    margin-bottom: 100px;
  }
`;

export const Search = () => {
  return (
    <SearchWrap>
      <SearchTitle>
        <h3>'어쩌다 사장'</h3>
        <p>에 관련된 검색 결과입니다.</p>
      </SearchTitle>
      <SearchBox />
    </SearchWrap>
  );
};

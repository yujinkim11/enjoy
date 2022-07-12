import styled from "styled-components";
import { mainStyle } from "../../../styles/globalstyle";
import { MovieListBox } from "./MovieListBox";

const MovieWrap = styled.div`
  padding: ${mainStyle.padding};
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MovieTitle = styled.h3`
  font-size: 60px;
  font-weight: 900;
  margin-bottom: 100px;
`;

const MovieCategory = styled.div``;

const CategoryWrap = styled.div`
  width: 440px;
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  font-weight: 700;
`;

const CategoryBar = styled.div`
  width: 440px;
  height: 5px;
  background-color: #707070;
  margin-top: 30px;
`;

const ChoiceBar = styled.div`
  width: 20%;
  height: 5px;
  background-color: ${mainStyle.mainColor};
`;

export const Movie = () => {
  return (
    <MovieWrap>
      <MovieTitle>
        <h3>영화</h3>
      </MovieTitle>
      <MovieCategory>
        <CategoryWrap>
          <span>전체</span>
          <span>한국영화</span>
          <span>해외영화</span>
        </CategoryWrap>
        <CategoryBar>
          <ChoiceBar />
        </CategoryBar>
      </MovieCategory>
      <MovieListBox moviecate="인기 영화" />
      <MovieListBox moviecate="신작" />
      <MovieListBox moviecate="시리즈" />
      <MovieListBox moviecate="코미디" />
      <MovieListBox moviecate="액션" />
    </MovieWrap>
  );
};

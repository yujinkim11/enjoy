import styled from "styled-components";
import { mainStyle } from "../../../styles/globalstyle";

const MovieListWrap = styled.div`
  width: 100%;
`;
const MovieListTitle = styled.h3`
  font-size: 30px;
  font-weight: 500;
  margin: 50px 0;
  span {
    color: ${mainStyle.mainColor};
  }
`;
const ListWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Movies = styled.div`
  width: 350px;
  height: 450px;
  background-color: #707070;
  :hover {
    transform: scale(1.1, 1.1);
    transition: 0.5s;
  }
`;
export const MovieListBox = (props) => {
  return (
    <MovieListWrap>
      <MovieListTitle>
        <span>{props.popular}</span>
        {props.moviecate}
      </MovieListTitle>
      <ListWrap>
        <Movies />
        <Movies />
        <Movies />
        <Movies />
      </ListWrap>
    </MovieListWrap>
  );
};

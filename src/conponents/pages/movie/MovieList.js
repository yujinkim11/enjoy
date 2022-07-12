import { defaultProps } from "spinners-react/lib/esm/helpers";
import styled from "styled-components";

const MovieListWrap = styled.div`
  width: 100%;
`;
const MovieListTitle = styled.h3`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 50px;
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
export const MovieList = () => {
  return (
    <MovieListWrap>
      <MovieListTitle></MovieListTitle>
      <ListWrap>
        <Movies />
        <Movies />
        <Movies />
        <Movies />
      </ListWrap>
    </MovieListWrap>
  );
};

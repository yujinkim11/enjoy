import { useEffect, useState } from "react";
import styled from "styled-components";
import { mainStyle } from "../../../styles/globalstyle";
import { mvApi } from "../../../api";
import { Loading } from "../../Loading";
import { MvSlide } from "./MvSlide";

const MvProgramWrap = styled.div`
  padding: ${mainStyle.padding};
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    padding: ${mainStyle.moPadding};
  }
`;
const MvProgramTitle = styled.h3`
  font-size: 60px;
  font-weight: 900;

  @media screen and (max-width: 500px) {
    font-size: 40px;
    margin-bottom: 70px;
  }
`;

export const MovieProgram = (red, title) => {
  // const [popular, setPopular] = useState();
  const [mvupcome, setMvUpcome] = useState();
  const [top, setTop] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const movieData = async () => {
      try {
        // const {
        //   data: { results: popularData },
        // } = await mvApi.moviepopular();
        // setPopular(popularData);

        const {
          data: { results: TopratedData },
        } = await mvApi.topRated();
        setTop(TopratedData);
        //  영화  TOP

        const {
          data: { results: MvupcomingData },
        } = await mvApi.upComing();
        setMvUpcome(MvupcomingData);

        setLoading(false);
      } catch (error) {}
    };
    movieData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {top && mvupcome && (
            <MvProgramWrap>
              <MvProgramTitle>
                <h3>영화</h3>
              </MvProgramTitle>
              <MvSlide mvdata={top} red="TOP" moviecate=" 인기 프로그램" />
              <MvSlide mvdata={mvupcome} moviecate="개봉 예정 영화" />
            </MvProgramWrap>
          )}
        </>
      )}
    </>
  );
};

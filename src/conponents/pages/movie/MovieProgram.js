import { useEffect, useState } from "react";
import styled from "styled-components";
import { mainStyle } from "../../../styles/globalstyle";
import { mvApi } from "../../../api";
import { Loading } from "../../Loading";
import { MvSlide } from "./MvSlide";
import { PageTitle } from "../../PageTitle";
import { ScrollTop } from "../../../ScrollTop";

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
  const [popular, setPopular] = useState();
  const [mvupcome, setMvUpcome] = useState();
  const [now, setNow] = useState();
  const [top, setTop] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const movieData = async () => {
      try {
        const {
          data: { results: popularData },
        } = await mvApi.moviepopular();
        setPopular(popularData);

        const {
          data: { results: TopratedData },
        } = await mvApi.topRated();
        setTop(TopratedData);
        //  영화  TOP

        const {
          data: { results: MvupcomingData },
        } = await mvApi.upComing();
        setMvUpcome(MvupcomingData);

        const {
          data: { results: nowData },
        } = await mvApi.nowPlaying();
        setNow(nowData);

        setLoading(false);
      } catch (error) {}
    };
    movieData();
  }, []);

  return (
    <>
      <ScrollTop />
      <PageTitle title={"Movie"} />
      {loading ? (
        <Loading />
      ) : (
        <>
          {popular && mvupcome && top && now && (
            <MvProgramWrap>
              <MvProgramTitle>
                <h3>영화</h3>
              </MvProgramTitle>
              <MvSlide mvdata={popular} red="TOP" moviecate=" 인기 영화" />
              <MvSlide mvdata={mvupcome} moviecate="개봉 예정 영화" />
              <MvSlide mvdata={top} moviecate="요즘 뜨는 영화" />
              <MvSlide mvdata={now} moviecate="현재 상영중인 영화" />
            </MvProgramWrap>
          )}
        </>
      )}
    </>
  );
};

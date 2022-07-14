import { useEffect, useState } from "react";
import { mvApi, tvApi } from "../../../api";
import { Container } from "../../Container";
import { Loading } from "../../Loading";
import { Mainbanner } from "./Mainbanner";
import { MovieList } from "./MovieList";
import { TvList } from "./TvList";

export const Home = () => {
  const [mvupcome, setMvUpcome] = useState();
  const [now, setNow] = useState();
  const [tvpopular, setTvPopular] = useState();
  // const [mvpopular, setMvPopular] = useState();
  const [mvtop, setMvTop] = useState();
  const [tvtop, setTvTop] = useState();
  const [latest, setlatest] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const playData = async () => {
      try {
        const {
          data: { results: MvupcomingData },
        } = await mvApi.upComing();
        setMvUpcome(MvupcomingData);
        // 영화 upcoming

        const {
          data: { results: nowData },
        } = await mvApi.nowPlaying();
        setNow(nowData);
        // 영화 now

        // const {
        //   data: { results: mvpopularData },
        // } = await mvApi.moviepopular();
        // setMvPopular(mvpopularData);
        const {
          data: { results: tvpopularData },
        } = await tvApi.popular();
        setTvPopular(tvpopularData);
        // 인기 영화 / tv프로그램

        const {
          data: { results: mvTopratedData },
        } = await mvApi.topRated();
        setMvTop(mvTopratedData);
        const {
          data: { results: tvTopratedData },
        } = await tvApi.topRated();
        setTvTop(tvTopratedData);
        //  영화 TV TOP

        const {
          data: { results: tvlatestData },
        } = await tvApi.latest();
        setlatest(tvlatestData);
        // 최신 tv프로그램

        setLoading(false);
      } catch (error) {}
    };
    playData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {mvupcome && (
            <>
              <Mainbanner
                play={now}
                upcoming={mvupcome}
                tvPopular={tvpopular}
              />

              <Container>
                <MovieList movie={mvupcome} red="새로운" title=" 영화" />
                <MovieList movie={mvtop} red="인기" title=" 영화" />
                <TvList tv={latest} red="새로운" title=" TV프로그램" />
                <TvList tv={tvtop} red="인기" title="TV프로그램" />
              </Container>
            </>
          )}
        </>
      )}
    </>
  );
};

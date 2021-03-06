import { useEffect, useState } from "react";
import { HotBabnner } from "./HotBanner";
import { HotMvSlide } from "./HotMvSlide";
import { mvApi, tvApi } from "../../../api";
import { Loading } from "../../Loading";
import styled from "styled-components";
import { HotTvSlide } from "./HotTvSlide";
import { PageTitle } from "../../PageTitle";
import { ScrollTop } from "../../../ScrollTop";

const HotWrap = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Hot = () => {
  const [mvpop, setMvPop] = useState();
  const [tvpop, setTvPop] = useState();
  const [mvrated, setMvRated] = useState();
  const [tvrated, setTvRated] = useState();
  const [mvup, setMvUp] = useState();
  const [tvLatest, setTvLatest] = useState();

  const [loading, setLoading] = useState();

  // console.log("HOT페이지 데이터", tvrated);
  useEffect(() => {
    const hotData = async () => {
      try {
        const {
          data: { results: mvpopularData },
        } = await mvApi.moviepopular();
        setMvPop(mvpopularData);
        const {
          data: { results: tvpopularData },
        } = await tvApi.popular();
        setTvPop(tvpopularData);
        // 인기 영화 / tv프로그램

        const {
          data: { results: mvTopratedData },
        } = await mvApi.topRated();
        setMvRated(mvTopratedData);
        const {
          data: { results: tvTopratedData },
        } = await tvApi.topRated();
        setTvRated(tvTopratedData);
        //  영화 TV TOP

        const {
          data: { results: mvUpcoming },
        } = await mvApi.upComing();
        setMvUp(mvUpcoming);
        const {
          data: { results: tvLatest },
        } = await tvApi.latest();
        setTvLatest(tvLatest);

        setLoading(false);
      } catch (error) {}
    };
    hotData();
  }, []);
  // console.log(tvrated);
  return (
    <>
      <ScrollTop />
      <PageTitle title={"Hot"} />
      {loading ? (
        <Loading />
      ) : (
        <>
          {mvpop && tvrated && mvpop && mvup && tvLatest && tvrated && tvpop && (
            <>
              <HotWrap>
                <HotBabnner bndata={tvpop[0]} />
                <HotMvSlide hotmvData={mvrated} />
                <HotMvSlide hotmvData={mvpop} />
                <HotMvSlide hotmvData={mvup} />
                <HotTvSlide hottvData={tvLatest} />
                <HotTvSlide hottvData={tvrated} />
                <HotTvSlide hottvData={tvpop} />
              </HotWrap>
            </>
          )}
        </>
      )}
    </>
  );
};

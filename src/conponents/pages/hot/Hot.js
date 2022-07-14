import { useEffect, useState } from "react";
import { HotBabnner } from "./HotBanner";
import { HotSlide } from "./HotSlide";
import { mvApi, tvApi } from "../../../api";
import { Loading } from "../../Loading";
import styled from "styled-components";

const HotWrap = styled.div``;

export const Hot = () => {
  const [mvpop, setMvPop] = useState();
  const [tvpop, setTvPop] = useState();
  const [mvrated, setMvRated] = useState();
  const [tvrated, setTvRated] = useState();
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

        setLoading(false);
      } catch (error) {}
    };
    hotData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {mvpop && tvrated && tvpop && (
            <>
              <HotWrap>
                <HotBabnner bndata={tvpop} />
                <HotSlide hotData={tvrated} />
                <HotSlide hotData={mvrated} />
              </HotWrap>
            </>
          )}
        </>
      )}
    </>
  );
};

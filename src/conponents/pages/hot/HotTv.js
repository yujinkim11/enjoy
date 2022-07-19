import { useEffect, useState } from "react";
import styled from "styled-components";
import { mainStyle } from "../../../styles/globalstyle";
import { tvApi } from "../../../api";
import "swiper/css";
import { HotTvSub } from "./HotTvSub";
import { Loading } from "../../Loading";

const HotTvWrap = styled.div`
  padding: ${mainStyle.padding};
  margin-top: 150px;
  @media screen and (max-width: 500px) {
    padding: ${mainStyle.moPadding};
  }
`;

const HotTvTitle = styled.h3`
  display: flex;
  justify-content: center;
  font-size: 55px;
  font-weight: 700;
  color: white;
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  span {
    font-size: 60px;
    color: ${mainStyle.mainColor};
    margin-right: 5px;
    @media screen and (max-width: 500px) {
      font-size: 40px;
    }
  }
  @media screen and (max-width: 500px) {
    font-size: 35px;

    padding: ${mainStyle.moPadding};
  }
`;

export const HotTv = () => {
  const [tvpop, setTvPop] = useState();
  const [tvrated, setTvRated] = useState();
  const [tvLatest, setTvLatest] = useState();
  const [tvon, setTvOn] = useState();
  const [loading, setLoading] = useState();
  // console.log("HOT페이지 데이터", tvrated);

  useEffect(() => {
    const hotTvData = async () => {
      try {
        const {
          data: { results: tvpopularData },
        } = await tvApi.popular();
        setTvPop(tvpopularData);
        // 인기  tv프로그램

        const {
          data: { results: tvTopratedData },
        } = await tvApi.topRated();
        setTvRated(tvTopratedData);
        //  TV TOP

        const {
          data: { results: tvLatest },
        } = await tvApi.latest();
        setTvLatest(tvLatest);

        const {
          data: { results: tvOnair },
        } = await tvApi.tvOnair();
        setTvOn(tvOnair);

        setLoading(false);
      } catch (error) {}
    };
    hotTvData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {tvpop && tvrated && tvLatest && tvon && (
            <>
              <HotTvWrap>
                <HotTvTitle>
                  <span>HOT!</span>한 TV프로그램
                </HotTvTitle>
                <HotTvSub tvsubData={tvpop} />
                <HotTvSub tvsubData={tvrated} />
                <HotTvSub tvsubData={tvLatest} />
                <HotTvSub tvsubData={tvon} />
              </HotTvWrap>
            </>
          )}
        </>
      )}
    </>
  );
};

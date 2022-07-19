import { useEffect, useState } from "react";
import styled from "styled-components";
import { mainStyle } from "../../../styles/globalstyle";
import { mvApi } from "../../../api";
import { Loading } from "../../Loading";
import { HotMvSub } from "./HotMvSub";

const HotMvWrap = styled.div`
  padding: ${mainStyle.padding};
  margin-top: 150px;
`;

const HotMvTitle = styled.h3`
  display: flex;
  justify-content: center;
  font-size: 55px;
  font-weight: 700;
  color: white;
  padding-bottom: 30px;
  span {
    font-size: 60px;
    color: ${mainStyle.mainColor};
    margin-right: 15px;
  }
`;

export const HotMv = () => {
  const [mvpop, setMvPop] = useState();
  const [mvrated, setMvRated] = useState();
  const [mvup, setMvUp] = useState();
  const [mvnow, setMvNow] = useState();
  const [loading, setLoading] = useState();

  // console.log("HOT페이지 데이터", tvrated);
  useEffect(() => {
    const hotMvData = async () => {
      try {
        const {
          data: { results: mvpopularData },
        } = await mvApi.moviepopular();
        setMvPop(mvpopularData);
        // 인기 영화

        const {
          data: { results: mvTopratedData },
        } = await mvApi.topRated();
        setMvRated(mvTopratedData);
        //  영화 TOP

        const {
          data: { results: mvUpcoming },
        } = await mvApi.upComing();
        setMvUp(mvUpcoming);

        const {
          data: { results: mvNowPlay },
        } = await mvApi.nowPlaying();
        setMvNow(mvNowPlay);

        setLoading(false);
      } catch (error) {}
    };
    hotMvData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {mvpop && mvrated && mvup && mvnow && (
            <>
              <HotMvWrap>
                <HotMvTitle>
                  <span>HOT!</span>한 영화
                </HotMvTitle>
                <HotMvSub mvsubData={mvpop} />
                <HotMvSub mvsubData={mvrated} />
                <HotMvSub mvsubData={mvup} />
                <HotMvSub mvsubData={mvnow} />
              </HotMvWrap>
            </>
          )}
        </>
      )}
    </>
  );
};

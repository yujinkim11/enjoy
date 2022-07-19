import styled from "styled-components";
import { mainStyle } from "../../../styles/globalstyle";
import { Loading } from "../../Loading";
import { tvApi } from "../../../api";
import { useEffect, useState } from "react";
import { TvSlide } from "./TvSlide";
import { PageTitle } from "../../PageTitle";

const TvProgramWrap = styled.div`
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
const TvProgramTitle = styled.h3`
  font-size: 60px;
  font-weight: 900;
  margin-bottom: 0px;
  @media screen and (max-width: 500px) {
    font-size: 40px;
    margin-bottom: 70px;
  }
`;

export const TvProgram = () => {
  const [tvpopular, setTvPopular] = useState();
  const [latest, setLatest] = useState();
  const [top, setTop] = useState();
  const [onair, setOnair] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const TvData = async () => {
      try {
        const {
          data: { results: tvpopularData },
        } = await tvApi.popular();
        setTvPopular(tvpopularData);
        const {
          data: { results: tvlatestData },
        } = await tvApi.latest();
        setLatest(tvlatestData);
        const {
          data: { results: tvtopData },
        } = await tvApi.topRated();
        setTop(tvtopData);
        const {
          data: { results: tvOnData },
        } = await tvApi.tvOnair();
        setOnair(tvOnData);

        setLoading(false);
      } catch (error) {}
    };

    TvData();
  }, []);

  return (
    <>
      <PageTitle title={"TV"} />
      {loading ? (
        <Loading />
      ) : (
        <>
          {tvpopular && top && latest && onair && (
            <TvProgramWrap>
              <TvProgramTitle>
                <h3>TV프로그램</h3>
              </TvProgramTitle>

              <TvSlide data={tvpopular} red="TOP" title=" 인기 프로그램" />
              <TvSlide data={top} title="뜨는 프로그램" />
              <TvSlide data={latest} title="새로 시작한 프로그램" />
              <TvSlide data={onair} title="ON AIR" />
            </TvProgramWrap>
          )}
        </>
      )}
    </>
  );
};

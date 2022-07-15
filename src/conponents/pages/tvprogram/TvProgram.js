import styled from "styled-components";
import { mainStyle } from "../../../styles/globalstyle";
import { Loading } from "../../Loading";
import { tvApi } from "../../../api";
import { useEffect, useState } from "react";
import { TvSlide } from "./TvSlide";

const TvProgramWrap = styled.div`
  padding: ${mainStyle.padding};
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TvProgramTitle = styled.h3`
  font-size: 60px;
  font-weight: 900;
  margin-bottom: 100px;
`;

const TvProgramCategory = styled.div``;

const CategoryWrap = styled.div`
  width: 440px;
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  font-weight: 700;
`;
const CategoryBar = styled.div`
  width: 440px;
  height: 5px;
  background-color: #707070;
  margin-top: 30px;
`;

const ChoiceBar = styled.div`
  width: 20%;
  height: 5px;
  background-color: ${mainStyle.mainColor};
`;

export const TvProgram = () => {
  const [tvpopular, setTvPopular] = useState();
  const [latest, setlatest] = useState();
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
        setlatest(tvlatestData);
        setLoading(false);
      } catch (error) {}
    };

    TvData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {tvpopular && (
            <TvProgramWrap>
              <TvProgramTitle>
                <h3>TV프로그램</h3>
              </TvProgramTitle>
              <TvProgramCategory>
                <CategoryWrap>
                  <span>전체</span>
                  <span>드라마</span>
                  <span>영화</span>
                </CategoryWrap>
                <CategoryBar>
                  <ChoiceBar />
                </CategoryBar>
              </TvProgramCategory>
              <TvSlide data={tvpopular} red="TOP" title=" 인기 프로그램" />
              <TvSlide data={latest} title="새로 시작한 프로그램" />
              {/* <TvSlide data={tvpopular} title="한국 드라마" /> */}
              {/* <TvSlide data={tvpopular} title="애니메이션" /> */}
            </TvProgramWrap>
          )}
        </>
      )}
    </>
  );
};

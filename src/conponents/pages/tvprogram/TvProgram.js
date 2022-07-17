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
  @media screen and (max-width: 500px) {
    padding: ${mainStyle.moPadding};
  }
`;
const TvProgramTitle = styled.h3`
  font-size: 60px;
  font-weight: 900;
  margin-bottom: 100px;
  @media screen and (max-width: 500px) {
    font-size: 40px;
    margin-bottom: 70px;
  }
`;

const TvProgramCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CategoryWrap = styled.div`
  width: 400px;
  font-size: 30px;
  font-weight: 700;
  word-spacing: 100px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    width: 250px;
    font-size: 20px;
  }
`;
const CategoryBar = styled.div`
  width: 440px;
  height: 5px;
  background-color: #707070;
  margin-top: 30px;
  position: relative;
  @media screen and (max-width: 500px) {
    width: 270px;
    margin-bottom: -20px;
  }
`;

const ChoiceBar = styled.div`
  width: 20%;
  height: 5px;
  position: absolute;
  right: ${(props) => props.posi};
  background-color: ${mainStyle.mainColor};
`;

export const TvProgram = () => {
  const [tvpopular, setTvPopular] = useState();
  const [latest, setlatest] = useState();
  const [loading, setLoading] = useState(true);
  const [posi, setPosi] = useState();
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
                  <span
                    onClick={() => {
                      setPosi("80%");
                    }}
                  >
                    전체
                  </span>
                  <span
                    onClick={() => {
                      setPosi("40%");
                    }}
                  >
                    드라마
                  </span>
                  <span
                    onClick={() => {
                      setPosi("0");
                    }}
                  >
                    영화
                  </span>
                </CategoryWrap>
                <CategoryBar>
                  <ChoiceBar posi={posi} />
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

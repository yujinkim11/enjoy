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
  margin-bottom: 100px;
  @media screen and (max-width: 500px) {
    font-size: 40px;
    margin-bottom: 70px;
  }
`;

const MvProgramCategory = styled.div`
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
  background-color: ${mainStyle.mainColor};
  position: absolute;
  right: ${(props) => props.posi};
`;
export const MovieProgram = (red, title) => {
  // const [popular, setPopular] = useState();
  const [mvupcome, setMvUpcome] = useState();
  const [top, setTop] = useState();
  const [loading, setLoading] = useState(true);
  const [posi, setPosi] = useState();

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
              <MvProgramCategory>
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
                    국내
                  </span>
                  <span
                    onClick={() => {
                      setPosi("0");
                    }}
                  >
                    해외
                  </span>
                </CategoryWrap>
                <CategoryBar>
                  <ChoiceBar posi={posi} />
                </CategoryBar>
              </MvProgramCategory>
              <MvSlide mvdata={top} red="TOP" moviecate=" 인기 프로그램" />
              <MvSlide mvdata={mvupcome} moviecate="개봉 예정 영화" />
            </MvProgramWrap>
          )}
        </>
      )}
    </>
  );
};

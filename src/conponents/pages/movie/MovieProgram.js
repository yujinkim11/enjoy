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
`;
const MvProgramTitle = styled.h3`
  font-size: 60px;
  font-weight: 900;
  margin-bottom: 100px;
`;

const MvProgramCategory = styled.div``;

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
export const MovieProgram = (red, title) => {
  const [popular, setPopular] = useState();
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
          {popular && (
            <MvProgramWrap>
              <MvProgramTitle>
                <h3>영화</h3>
              </MvProgramTitle>
              <MvProgramCategory>
                <CategoryWrap>
                  <span>전체</span>
                  <span>드라마</span>
                  <span>예능</span>
                </CategoryWrap>
                <CategoryBar>
                  <ChoiceBar />
                </CategoryBar>
              </MvProgramCategory>
              <MvSlide mvdata={popular} red="TOP" moviecate=" 인기 프로그램" />
              <MvSlide mvdata={top} moviecate="개봉 예정 영화" />
            </MvProgramWrap>
          )}
        </>
      )}
    </>
  );
};

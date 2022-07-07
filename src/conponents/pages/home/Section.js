import styled from "styled-components";

import { mainStyle } from "../../../styles/globalstyle";
import { MainSlide } from "./MainSlide";
import { MainTitle } from "./MainTitle";

const SectionWrap = styled.div`
  margin-top: 200px;
  width: 100%;
  height: 80vh;
  padding: ${mainStyle.padding};
`;

export const Section = () => {
  return (
    <SectionWrap>
      <MainTitle main="시청중" content="인 콘텐츠" />
      <MainSlide />

      <MainTitle main="인기 " content="차트" />
      <MainSlide />

      <MainTitle main="새로 " content="올라온 영화" />
      <MainSlide />
      <MainTitle main="추천 " content="영화" />
      <MainSlide />
      <MainTitle main="새로 " content="올라온 드라마" />
      <MainSlide />
      <MainTitle main="추천 " content="드라마" />
      <MainSlide />
    </SectionWrap>
  );
};

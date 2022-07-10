import styled from "styled-components";
import { mainStyle } from "../../../styles/globalstyle";
import { RoundBox } from "./RoundBox";

const PlayWrap = styled.div`
  padding: ${mainStyle.padding};
`;
const MoviePlay = styled.div`
  width: 100%;
  height: 800px;
  background-color: antiquewhite;
`;
const PlayRound = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const TitleRound = styled.h3`
  font-size: 50px;
  font-weight: 900;
  margin-top: 20px;
  margin-bottom: 100px;
`;
const IconWrap = styled.div``;

const RoundInfo = styled.h3`
  padding: ${mainStyle.padding};
  font-size: 30px;
  font-weight: 500;
`;

export const BannerPlay = () => {
  return (
    <>
      <PlayWrap>
        <MoviePlay></MoviePlay>
        <PlayRound>
          <TitleRound>뿅뿅 지구오락실 2화</TitleRound>
          <IconWrap>아이콘두개</IconWrap>
        </PlayRound>
      </PlayWrap>
      <RoundInfo>회차 정보</RoundInfo>
      <RoundBox />
      <RoundBox />
      <RoundBox />
      <RoundBox />
    </>
  );
};

import styled from "styled-components";
import { mainStyle } from "../../../styles/globalstyle";

const BannerWrap = styled.div`
  width: 100%;
  height: 60vh;
  background-color: #292929;
  display: flex;
  align-items: flex-end;
  padding: ${mainStyle.padding};
  margin: 100px 0;
`;
const HotPoster = styled.div`
  width: 480px;
  height: 550px;
  background-color: antiquewhite;
  margin-right: 50px;
`;

const HotTitle = styled.h3`
  font-size: 60px;
  font-weight: 500;
  color: #ff3268;
  padding-bottom: 30px;
`;
const HotConWrap = styled.div`
  padding-bottom: 60px;
`;

const HotContent = styled.p`
  width: 850px;
  font-size: 25px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  line-height: 40px;
`;

export const HotBabnner = () => {
  return (
    <BannerWrap>
      <HotPoster></HotPoster>
      <HotConWrap>
        <HotTitle>지금 가장 HOT!한 콘텐츠</HotTitle>
        <HotContent>
          <p>
            블록버스터 영화부터 아트 영화, 인기 애니메이션, 드라마, 예능 등 모든
            작품을 감상하세요. 취향에 맞는 작품을 선별하여 추천해드릴게요 :)
          </p>
        </HotContent>
      </HotConWrap>
    </BannerWrap>
  );
};

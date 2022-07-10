import styled from "styled-components";

const BannerWrap = styled.div`
  width: 100%;
  height: 80vh;
`;

const HotTitlte = styled.h3`
  width: 480px;
  height: 550px;
  background-color: antiquewhite;
`;
const HotContent = styled.p``;
const HotPoster = styled.div``;

export const HotBabnner = () => {
  return (
    <BannerWrap>
      <HotPoster>이미지</HotPoster>
      <HotTitlte>지금 가장 HOT!한 콘텐츠</HotTitlte>
      <HotContent>
        <p>
          블록버스터 영화부터 아트 영화, 인기 애니메이션, 드라마, 예능 등 모든
          작품을 감상하세요. 취향에 맞는 작품을 선별하여 추천해드릴게요 :)
        </p>
      </HotContent>
    </BannerWrap>
  );
};

import styled from "styled-components";
import { imgUrl } from "../../../constants/constants";

import { mainStyle } from "../../../styles/globalstyle";

const BannerWrap = styled.div`
  width: 100%;
  height: 60vh;
  background-color: #707070;
  margin-top: 80px;
  display: flex;
  align-items: flex-end;
  padding: ${mainStyle.padding};
`;

const PosterWrap = styled.div``;

const HotPoster = styled.div`
  width: 500px;
  height: 500px;
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
const HotCategoryWrap = styled.div`
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HotCategory = styled.div`
  font-size: 30px;
  font-weight: 700;
  word-spacing: 100px;
`;
const CategoryBar = styled.div`
  width: 440px;
  height: 5px;
  background-color: #707070;
  margin-top: 30px;
  position: relative;
`;

const ChoiceBar = styled.div`
  width: 20%;
  height: 5px;
  position: absolute;
  right: ${(props) => props.right};
  background-color: ${mainStyle.mainColor};
`;

export const HotBabnner = ({ bndata }) => {
  const handleClick = () => {};
  // console.log("hotbanner", bndata);
  console.log(bndata);
  return (
    <>
      <BannerWrap>
        <PosterWrap>
          <HotPoster
            style={{
              background: `url(${
                bndata.backdrop_path
                  ? `${imgUrl}${bndata.backdrop_path}`
                  : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
              }) no-repeat center / cover`,
            }}
          />
        </PosterWrap>

        <HotConWrap>
          <HotTitle>지금 가장 HOT!한 콘텐츠</HotTitle>
          <HotContent>
            <p>
              블록버스터 영화부터 아트 영화, 인기 애니메이션, 드라마, 예능 등
              모든 작품을 감상하세요. 취향에 맞는 작품을 선별하여 추천해드릴게요
              :)
            </p>
          </HotContent>
        </HotConWrap>
      </BannerWrap>
      <HotCategoryWrap>
        <HotCategory>
          <span onClick={handleClick}>예능</span> <span>드라마</span>
          <span>영화</span>
        </HotCategory>
        <CategoryBar>
          <ChoiceBar posi={"right"} />
        </CategoryBar>
      </HotCategoryWrap>
    </>
  );
};

import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { imgUrl } from "../../../constants/constants";

import { mainStyle } from "../../../styles/globalstyle";

const BannerWrap = styled.div`
  width: 100vw;
  height: 60vh;
  background-color: #707070;
  margin-top: 80px;
  display: flex;
  align-items: flex-end;

  @media screen and (max-width: 500px) {
    padding: ${mainStyle.moPadding};
    width: 100%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    background-color: #1a1a1a;
  }
`;

const PosterWrap = styled.div`
  padding-left: 150px;
  @media screen and (max-width: 500px) {
    padding: -20px;
  }
`;

const HotPoster = styled.div`
  width: 500px;
  height: 500px;
  margin-right: 50px;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 120px;
  }
`;

const HotTitle = styled.h3`
  font-size: 60px;
  font-weight: 700;
  color: #ff3268;
  padding-bottom: 30px;
  @media screen and (max-width: 500px) {
    width: 90vw;
    font-size: 40px;
    font-weight: 700;
    margin-top: 50px;
  }
`;
const HotConWrap = styled.div`
  padding-bottom: 60px;

  @media screen and (max-width: 500px) {
  }
`;

const HotContent = styled.p`
  width: 850px;
  font-size: 25px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.7);
  line-height: 40px;
  @media screen and (max-width: 500px) {
    width: 80vw;
    font-size: 20px;
    line-height: 22px;
  }
`;
const HotCategoryWrap = styled.div`
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
  }
`;

const HotCategory = styled.div`
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

export const HotBabnner = ({ bndata }) => {
  const [posi, setPosi] = useState();

  // const handleClick = () => {
  //   setPosi("0");
  //   // console.log(handleClick);
  // };

  return (
    <>
      {bndata && (
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
                  블록버스터 영화부터 아트 영화, 인기 애니메이션, 드라마, 예능
                  등 모든 작품을 감상하세요. 취향에 맞는 작품을 선별하여
                  추천해드릴게요 :)
                </p>
              </HotContent>
            </HotConWrap>
          </BannerWrap>
          <HotCategoryWrap>
            <HotCategory>
              <span
                onClick={() => {
                  setPosi("80%");
                }}
              >
                전체
              </span>{" "}
              <Link to={"/hot_tv"}>
                <span
                  onClick={() => {
                    setPosi("40%");
                  }}
                >
                  TV프로그램
                </span>
              </Link>
              <Link to={"/hot_mv"}>
                <span
                  onClick={() => {
                    setPosi("0%");
                  }}
                >
                  영화
                </span>
              </Link>
            </HotCategory>
            <CategoryBar>
              <ChoiceBar posi={posi} />
            </CategoryBar>
          </HotCategoryWrap>
        </>
      )}
    </>
  );
};

import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import { Autoplay } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { imgUrl } from "../../../constants/constants";
import { mainStyle } from "../../../styles/globalstyle";

const MainbannerWrap = styled.div`
  height: 75vh;
  @media screen and (max-width: 500px) {
    height: 100vh;
  }
`;

const Title = styled.h3`
  font-size: 90px;
  font-weight: 700;
  margin-bottom: 40px;
  @media screen and (max-width: 500px) {
    font-size: 30px;
    padding: ${mainStyle.moPadding};
  }
`;

const ConWrap = styled.div`
  padding: 150px 150px;
`;

const BoxWrap = styled.div`
  display: flex;
`;

const Box1 = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  width: 80px;
  height: 30px;
  font-size: 20px;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const Box2 = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  width: 80px;
  height: 30px;
  font-size: 20px;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const Box3 = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  width: 80px;
  height: 30px;
  font-size: 20px;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Con = styled.p`
  width: 750px;
  font-size: 24px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  margin: 70px 0;
`;

const PlayBox = styled.div`
  width: 360px;
  height: 80px;
  border-radius: 10px;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  cursor: pointer;
  :hover {
    background-color: rgba(255, 255, 255, 0.2);
    transition: 1s;
  }
  p {
    margin-left: 10px;
  }
`;

export const Mainbanner = ({ tvPopular }) => {
  return (
    <MainbannerWrap>
      <Swiper
        modules={[Scrollbar, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide
          style={{
            background: `url(${imgUrl}${tvPopular[0].backdrop_path}) no-repeat center / cover`,
          }}
        >
          <ConWrap>
            <Title>'{tvPopular[0].name}'</Title>

            <BoxWrap>
              <Box1>15+</Box1>
              <Box2>드라마</Box2>
              <Box3>휴먼물</Box3>
            </BoxWrap>
            <Con>{tvPopular[0].overview.slice(0, 70) + "..."}</Con>
            <Link to={"/Banner"}>
              <PlayBox>
                <FontAwesomeIcon icon={faPlay} />
                <p>보러가기</p>
              </PlayBox>
            </Link>
          </ConWrap>
        </SwiperSlide>
        <SwiperSlide
          style={{
            background: `url(${imgUrl}${tvPopular[1].backdrop_path}) no-repeat center / cover`,
          }}
        >
          <ConWrap>
            <Title>'{tvPopular[1].name}'</Title>

            <BoxWrap>
              <Box1>15+</Box1>
              <Box2>드라마</Box2>
              <Box3>휴먼물</Box3>
            </BoxWrap>
            <Con>{tvPopular[1].overview.slice(0, 70) + "..."}</Con>
            <Link to={"/Banner"}>
              <PlayBox>
                <FontAwesomeIcon icon={faPlay} />
                <p>보러가기</p>
              </PlayBox>
            </Link>
          </ConWrap>
        </SwiperSlide>
        <SwiperSlide
          style={{
            background: `url(${imgUrl}${tvPopular[2].backdrop_path}) no-repeat center / cover`,
          }}
        >
          <ConWrap>
            <Title>'{tvPopular[2].name}'</Title>

            <BoxWrap>
              <Box1>15+</Box1>
              <Box2>드라마</Box2>
              <Box3>휴먼물</Box3>
            </BoxWrap>
            <Con>{tvPopular[2].overview.slice(0, 70) + "..."}</Con>
            <Link to={"/Banner"}>
              <PlayBox>
                <FontAwesomeIcon icon={faPlay} />
                <p>보러가기</p>
              </PlayBox>
            </Link>
          </ConWrap>
        </SwiperSlide>
      </Swiper>
    </MainbannerWrap>
  );
};

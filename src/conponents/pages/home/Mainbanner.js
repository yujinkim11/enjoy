import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MainbannerWrap = styled.div`
  height: 80vh;
  background-color: #7d7d7d;
`;

const Title = styled.h3`
  font-size: 90px;
  font-weight: 700;
  margin-bottom: 40px;
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
  font-size: 24px;
  font-weight: 500;
  margin: 70px 0;
`;

const PlayBox = styled.div`
  width: 260px;
  height: 64px;
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

export const Mainbanner = () => {
  return (
    <MainbannerWrap>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        style={{ height: "80vh" }}
      >
        <SwiperSlide
          style={{
            background: `url(https://image.ytn.co.kr/osen/2022/06/b53fbe66-01f8-445f-9b7c-dbba8014c140.jpg) no-repeat center / cover`,
            backgroundPositionY: "-500px",
          }}
        >
          <ConWrap>
            <Title>'이상한 변호사 우영우'</Title>
            <BoxWrap>
              <Box1>15+</Box1>
              <Box2>드라마</Box2>
              <Box3>휴먼물</Box3>
            </BoxWrap>

            <Con>
              천재적인 두뇌와 자폐 스펙트럼을 동시에 가진 신입변호사 '우영우'가
              <br />
              사건들을 해결하며 진정한 변호사로 성장하는 휴먼 법정물
            </Con>
            <Link to={"/BannerMain"}>
              <PlayBox>
                <FontAwesomeIcon icon={faPlay} />
                <p>보러가기</p>
              </PlayBox>
            </Link>
          </ConWrap>
        </SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
        <SwiperSlide>4</SwiperSlide>
      </Swiper>
    </MainbannerWrap>
  );
};

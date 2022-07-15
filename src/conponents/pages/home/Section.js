import styled from "styled-components";
import { mainStyle } from "../../../styles/globalstyle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SectionWrap = styled.div`
  margin-top: 200px;
  width: 100%;
  padding: ${mainStyle.padding};
`;
const ConImg = styled.div`
  width: 350px;
  height: 250px;
  background-color: #7d7d7d;
  margin-bottom: 50px;
`;

const Title = styled.h3`
  font-size: 30px;
  font-weight: 500;
  display: flex;
  span {
    color: ${mainStyle.color};
  }
  p {
    color: ${mainStyle.mainColor};
  }
  margin-bottom: 50px;
`;

export const Section = (props) => {
  return (
    <SectionWrap>
      <Title>
        <p>{props.red}</p>
        <span>{props.title}</span>
      </Title>

      <Swiper spaceBetween={65} slidesPerView={4}>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide>
          <ConImg />
        </SwiperSlide>
        <SwiperSlide>
          <ConImg />
        </SwiperSlide>
        <SwiperSlide>
          <ConImg />
        </SwiperSlide>
        <SwiperSlide>
          <ConImg />
        </SwiperSlide>

        <SwiperSlide>
          <ConImg />
        </SwiperSlide>
        <SwiperSlide>
          <ConImg />
        </SwiperSlide>
      </Swiper>
    </SectionWrap>
  );
};

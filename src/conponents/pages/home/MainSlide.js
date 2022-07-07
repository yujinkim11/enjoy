import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";

const ConImg = styled.div`
  width: 350px;
  height: 250px;
  background-color: #7d7d7d;
  margin-bottom: 200px;
`;

export const MainSlide = () => {
  return (
    <Swiper spaceBetween={65} slidesPerView={4}>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide>
        <ConImg></ConImg>
      </SwiperSlide>
      <SwiperSlide>
        <ConImg></ConImg>
      </SwiperSlide>
      <SwiperSlide>
        <ConImg></ConImg>
      </SwiperSlide>
      <SwiperSlide>
        <ConImg></ConImg>
      </SwiperSlide>

      <SwiperSlide>
        <ConImg></ConImg>
      </SwiperSlide>
      <SwiperSlide>
        <ConImg></ConImg>
      </SwiperSlide>
    </Swiper>
  );
};

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";
import { imgUrl } from "../../../constants/constants";
import { Navigation } from "swiper";
import { mainStyle } from "../../../styles/globalstyle";

const SlideWrap = styled.div`
  padding: ${mainStyle.padding};
  margin-top: 100px;
  width: 100%; ;
`;

const HotImgWrap = styled.div`
  position: relative;

  :hover {
    h3 {
      transition: 1s;
      opacity: 1;
    }
  }
  h3 {
    font-size: 40px;
    font-weight: 500;
    position: absolute;
    top: 200px;
    left: 10px;
    opacity: 0;
    color: rgba(255, 255, 255, 0.7);
  }
`;

const HotImg = styled.div`
  height: 450px;
  background-color: aquamarine;
  margin-top: 50px;
  :hover {
    transform: scale(1.05, 1.05);
    transition: 0.5s;
    opacity: 0.5;
  }
`;

export const HotSlide = ({ hotData }) => {
  // console.log("hot", hotData);
  return (
    <>
      <SlideWrap>
        <Swiper modules={[Navigation]} spaceBetween={20} slidesPerView={4}>
          {hotData.map((hot) => (
            <SwiperSlide>
              <HotImgWrap>
                <HotImg
                  style={{
                    background: `url(${
                      hot.backdrop_path
                        ? `${imgUrl}${hot.backdrop_path}`
                        : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
                    }) no-repeat center / cover`,
                  }}
                />
                <h3>
                  {hot.name}
                  {hot.title}
                </h3>
              </HotImgWrap>
            </SwiperSlide>
          ))}
        </Swiper>
      </SlideWrap>
    </>
  );
};

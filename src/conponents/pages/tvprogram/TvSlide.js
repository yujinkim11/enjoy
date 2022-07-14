import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";
import { imgUrl } from "../../../constants/constants";
import { Navigation } from "swiper";
import { mainStyle } from "../../../styles/globalstyle";

const SlideWrap = styled.div`
  margin-top: 100px;
  width: 100%;
`;

const TvImgWrap = styled.div`
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

const TvTitle = styled.h3`
  font-size: 30px;
  font-weight: 700;
  span {
    color: ${mainStyle.mainColor};
  }
`;

const TvImg = styled.div`
  height: 450px;
  margin-top: 50px;
  :hover {
    transform: scale(1.05, 1.05);
    transition: 0.5s;
    opacity: 0.5;
  }
`;

export const TvSlide = ({ data, red, title }) => {
  console.log(data);
  return (
    <SlideWrap>
      <TvTitle>
        <span>{red}</span>
        {title}
      </TvTitle>
      <Swiper modules={[Navigation]} spaceBetween={20} slidesPerView={4}>
        {data.map((tvdata) => (
          <SwiperSlide>
            <TvImgWrap>
              <TvImg
                style={{
                  background: `url(${
                    tvdata.backdrop_path
                      ? `${imgUrl}/${tvdata.poster_path}`
                      : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
                  }) no-repeat center / cover`,
                }}
              />
              <h3>{tvdata.name}</h3>
            </TvImgWrap>
          </SwiperSlide>
        ))}
      </Swiper>
    </SlideWrap>
  );
};

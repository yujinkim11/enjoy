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

const MvTitle = styled.h3`
  font-size: 30px;
  font-weight: 700;
  span {
    color: ${mainStyle.mainColor};
  }
`;

const TvImg = styled.div`
  height: 450px;
  margin-top: 50px;
`;

export const MvSlide = ({ mvdata, red, moviecate }) => {
  console.log(mvdata[1].backdrop_path);
  return (
    <SlideWrap>
      <MvTitle>
        <span>{red}</span>
        {moviecate}
      </MvTitle>
      <Swiper modules={[Navigation]} spaceBetween={20} slidesPerView={4}>
        {mvdata.map((moviedata) => (
          <SwiperSlide>
            <TvImg
              style={{
                background: `url(${
                  moviedata.backdrop_path
                    ? `${imgUrl}${moviedata.backdrop_path}`
                    : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
                }) no-repeat center / cover`,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </SlideWrap>
  );
};

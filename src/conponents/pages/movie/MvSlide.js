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

const MovieImgWrap = styled.div`
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

const MvTitle = styled.h3`
  font-size: 30px;
  font-weight: 700;
  span {
    color: ${mainStyle.mainColor};
  }
`;

const MvImg = styled.div`
  height: 450px;
  margin-top: 50px;
  :hover {
    transform: scale(1.05, 1.05);
    transition: 0.5s;
    opacity: 0.5;
  }
`;

export const MvSlide = ({ mvdata, red, moviecate }) => {
  // console.log(mvdata[1].backdrop_path);
  return (
    <SlideWrap>
      <MvTitle>
        <span>{red}</span>
        {moviecate}
      </MvTitle>
      <Swiper modules={[Navigation]} spaceBetween={20} slidesPerView={4}>
        {mvdata.map((moviedata) => (
          <SwiperSlide>
            <MovieImgWrap>
              <MvImg
                style={{
                  background: `url(${
                    moviedata.backdrop_path
                      ? `${imgUrl}${moviedata.backdrop_path}`
                      : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
                  }) no-repeat center / cover`,
                }}
              />
              <h3>{moviedata.title}</h3>
            </MovieImgWrap>
          </SwiperSlide>
        ))}
      </Swiper>
    </SlideWrap>
  );
};

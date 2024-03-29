import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";
import { imgUrl } from "../../../constants/constants";
import { Navigation } from "swiper";
import { mainStyle } from "../../../styles/globalstyle";
import { Link } from "react-router-dom";

const SlideWrap = styled.div`
  margin-top: 100px;
  width: 100%;
  @media screen and (max-width: 500px) {
    margin-top: 0;
  }
`;

const MovieImgWrap = styled.div`
  position: relative;
  .mvcontents {
    opacity: 0;
    transition: 1s;
  }
  :hover .mvcontents {
    opacity: 1;
  }
`;

const MvTitle = styled.h3`
  font-size: 30px;
  font-weight: 700;
  span {
    color: ${mainStyle.mainColor};
  }
`;

const MvCon = styled.div`
  position: absolute;
  top: 37%;
  left: 10px;
  @media screen and (max-width: 500px) {
    position: absolute;
    top: 30%;
    left: 5px;
    padding-right: 5px;
  }

  h1 {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 10px;
    @media screen and (max-width: 500px) {
      font-size: 30px;
      width: 150px;
    }
  }

  p {
    font-size: 20px;
    margin: 10px 0;
  }
  span {
    font-size: 20px;
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
  @media screen and (max-width: 500px) {
    margin: 30px 0;
  }
`;

const params = {
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
};

export const MvSlide = ({ mvdata, red, moviecate }) => {
  // console.log(mvdata[1].backdrop_path);
  return (
    <>
      {mvdata && (
        <SlideWrap>
          <MvTitle>
            <span>{red}</span>
            {moviecate}
          </MvTitle>
          <Swiper modules={[Navigation]} navigation {...params}>
            {mvdata.map((moviedata) => (
              <SwiperSlide>
                <MovieImgWrap>
                  <Link to={`/mv_detail/${moviedata.id}`}>
                    <MvImg
                      style={{
                        background: `url(${
                          moviedata.backdrop_path
                            ? `${imgUrl}${moviedata.backdrop_path}`
                            : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
                        }) no-repeat center / cover`,
                      }}
                    />

                    <MvCon className="mvcontents">
                      <h1>{moviedata.title}</h1>

                      <p>⭐ {moviedata.vote_average}점</p>

                      <span>{moviedata.adult ? "19+" : "전체이용가"}</span>
                    </MvCon>
                  </Link>
                </MovieImgWrap>
              </SwiperSlide>
            ))}
          </Swiper>
        </SlideWrap>
      )}
    </>
  );
};

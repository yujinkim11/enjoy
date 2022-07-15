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

  h1 {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 10px;
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
`;

const Genre = styled.ul`
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: 600;
  display: flex;
  li {
    list-style: none;
    margin-right: 10px;
  }
  margin: 0 0 20px 0px;
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
              <MvCon className="mvcontents">
                <h1>{moviedata.title}</h1>
                <Genre>
                  {moviedata.genre_ids.map((genreid) => (
                    <li key={genreid.id} className="genres">
                      {genreid.name}
                      {console.log(genreid)}
                    </li>
                  ))}
                </Genre>
                <p>{moviedata.vote_average}점</p>
                <span>{moviedata.adult ? "19+" : "Everybody"}</span>
              </MvCon>
            </MovieImgWrap>
          </SwiperSlide>
        ))}
      </Swiper>
    </SlideWrap>
  );
};

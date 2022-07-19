import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { imgUrl } from "../../../constants/constants";
import { Link } from "react-router-dom";
import "swiper/css/navigation";
import "swiper/css";
import { mainStyle } from "../../../styles/globalstyle";
import { Navigation } from "swiper";
import "swiper/css/navigation";

const MvWrap = styled.div`
  margin-top: 100px;
  @media screen and (max-width: 500px) {
    margin-top: 50px;
  }
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 900;
  span {
    color: ${mainStyle.mainColor};
  }
`;

const MvImgWrap = styled.div`
  position: relative;
  .mvcontents {
    opacity: 0;
    transition: 1s;
  }
  :hover .mvcontents {
    opacity: 1;
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
    @media screen and (max-width: 500px) {
      font-size: 16px;
    }
  }
  span {
    font-size: 20px;
    @media screen and (max-width: 500px) {
      font-size: 16px;
    }
  }
`;

const MvImg = styled.div`
  height: 450px;
  margin-top: 50px;
  :hover {
    transform: scale(105%);
    opacity: 0.5;
    transition: 0.5s;
  }
`;

const Genre = styled.ul`
  display: flex;
  font-size: 20px;
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

export const MovieList = ({ movie, red, title }) => {
  return (
    <>
      {movie && (
        <>
          <MvWrap>
            <Title>
              <span>{red}</span> {title}
            </Title>
            <Swiper modules={[Navigation]} navigation {...params}>
              {movie.map((play) => (
                <SwiperSlide key={play.id}>
                  <Link to={`/mv_detail/${play.id}`}>
                    <MvImgWrap>
                      <MvImg
                        style={{
                          background: `url(${
                            play.backdrop_path
                              ? `${imgUrl}${play.backdrop_path}`
                              : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
                          }) no-repeat center / cover`,
                        }}
                      />
                      <MvCon className="mvcontents">
                        <h1>{play.title}</h1>
                        <Genre>
                          {play &&
                            play.genres.map((mvgenre) => (
                              <li key={mvgenre.id}>▷ {mvgenre.name}</li>
                            ))}
                        </Genre>
                        <p>⭐ {play.vote_average}점</p>
                        <span>{play.adult ? "19+" : "전체이용가"}</span>
                      </MvCon>
                    </MvImgWrap>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </MvWrap>
        </>
      )}
    </>
  );
};

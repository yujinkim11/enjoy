import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { imgUrl } from "../../../constants/constants";
import { Link } from "react-router-dom";
import "swiper/css/navigation";
import "swiper/css";
import { mainStyle } from "../../../styles/globalstyle";
import { Navigation } from "swiper";
import "swiper/css/navigation";

const TvWrap = styled.div`
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

const TvImgWrap = styled.div`
  position: relative;
  .tvcontents {
    opacity: 0;
    transition: 1s;
  }
  :hover .tvcontents {
    opacity: 1;
  }
`;

const TvCon = styled.div`
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

const TvImg = styled.div`
  height: 450px;
  margin-top: 50px;
  :hover {
    transform: scale(105%);
    opacity: 0.5;
    transition: 0.5s;
  }
`;

const Genre = styled.div`
  display: flex;
  font-size: 20px;
  .genres {
    width: 15%;
    height: 100%;
    background-color: ${mainStyle.mainColor};
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

export const TvList = ({ tv, red, title }) => {
  return (
    <TvWrap>
      <Title>
        <span>{red}</span> {title}
      </Title>
      <Swiper modules={[Navigation]} navigation {...params}>
        {tv.map((play) => (
          <SwiperSlide key={play.id}>
            <Link to={`/tv_detail/${play.id}`}>
              <TvImgWrap>
                <TvImg
                  style={{
                    background: `url(${imgUrl}${play.backdrop_path}) no-repeat center/cover`,
                  }}
                />
                <TvCon className="tvcontents">
                  <h1>{play.name}</h1>
                  <Genre>
                    <div>장르</div>
                  </Genre>
                  <p>{play.vote_average}점</p>
                  <span>{play.adult ? "19+" : "Everybody"}</span>
                </TvCon>
              </TvImgWrap>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </TvWrap>
  );
};

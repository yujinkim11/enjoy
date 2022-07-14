import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { imgUrl } from "../../../constants/constants";
import { Link } from "react-router-dom";
import "swiper/css/navigation";
import "swiper/css";
import { mainStyle } from "../../../styles/globalstyle";

const MvWrap = styled.div`
  margin-top: 100px;
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

  :hover {
    h3 {
      transition: 1s;
      opacity: 1;
    }
  }
  h3 {
    font-size: 40px;
    font-weight: 900;
    position: absolute;
    top: 200px;
    left: 10px;
    opacity: 0;
    color: rgba(255, 255, 255, 0.7);
  }
`;

const MvImg = styled.div`
  height: 450px;
  margin-top: 50px;
  :hover {
    opacity: 0.5;
    transition: 0.5s;
  }
`;

export const MovieList = ({ movie, red, title }) => {
  return (
    <MvWrap>
      <Title>
        <span>{red}</span> {title}
      </Title>
      <Swiper spaceBetween={30} slidesPerView={4}>
        {movie.map((play) => (
          <SwiperSlide key={play.id}>
            <Link to={`/mvdetail/${play.id}`}>
              <MvImgWrap>
                <MvImg
                  style={{
                    background: `url(${imgUrl}${play.backdrop_path}) no-repeat center/cover`,
                  }}
                />
                <h3>{play.title}</h3>
              </MvImgWrap>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </MvWrap>
  );
};

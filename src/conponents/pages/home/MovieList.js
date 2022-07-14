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
  font-size: 30px;
  font-weight: 900;
  span {
    color: ${mainStyle.mainColor};
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
            <Link to={`/movie_detail/${play.id}`}>
              <MvImg
                style={{
                  background: `url(${imgUrl}${play.backdrop_path}) no-repeat center/cover`,
                }}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </MvWrap>
  );
};

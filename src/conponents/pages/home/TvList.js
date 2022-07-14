import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { imgUrl } from "../../../constants/constants";
import { Link } from "react-router-dom";
import "swiper/css/navigation";
import "swiper/css";
import { mainStyle } from "../../../styles/globalstyle";

const TvWrap = styled.div`
  margin-top: 100px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 900;
  span {
    color: ${mainStyle.mainColor};
  }
`;
const TvImg = styled.div`
  height: 450px;
  margin-top: 50px;
  :hover {
    opacity: 0.5;
    transition: 0.5s;
  }
  position: relative;
`;

const TvTitle = styled.h3`
  font-size: 50px;
  position: absolute;
  top: 45%;
  left: 20%;
  opacity: 0;
  :hover {
    opacity: 1;
  }
`;

export const TvList = ({ tv, red, title }) => {
  return (
    <TvWrap>
      <Title>
        <span>{red}</span> {title}
      </Title>
      <Swiper spaceBetween={30} slidesPerView={4}>
        {tv.map((play) => (
          <SwiperSlide key={play.id}>
            <Link to={`/tv_detail/${play.id}`}>
              <TvImg
                style={{
                  background: `url(${imgUrl}${play.backdrop_path}) no-repeat center/cover`,
                }}
              />
              <TvTitle>{play.name}</TvTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </TvWrap>
  );
};

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

const TvImgWrap = styled.div`
  position: relative;
  :hover {
    h3 {
      transition: 1s;
      opacity: 1;
    }
  }
  h3 {
    font-size: 50px;
    font-weight: 900;
    position: absolute;
    top: 200px;
    left: 10px;
    opacity: 0;
    color: rgba(255, 255, 255, 0.7);
  }
`;

const TvImg = styled.div`
  height: 450px;
  margin-top: 50px;
  :hover {
    opacity: 0.5;
    transition: 0.5s;
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
              <TvImgWrap>
                <TvImg
                  style={{
                    background: `url(${imgUrl}${play.backdrop_path}) no-repeat center/cover`,
                  }}
                />
                <h3>{play.name}</h3>
              </TvImgWrap>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </TvWrap>
  );
};

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

const TvImg = styled.div`
  height: 450px;
  margin-top: 50px;
  :hover {
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

export const TvList = ({ tv, red, title }) => {
  return (
    <TvWrap>
      <Title>
        <span>{red}</span> {title}
      </Title>
      <Swiper spaceBetween={30} slidesPerView={4}>
        {tv.map((play) => (
          <SwiperSlide key={play.id}>
            <Link to={`/tvdetail/${play.id}`}>
              <TvImgWrap>
                <TvImg
                  style={{
                    background: `url(${imgUrl}${play.backdrop_path}) no-repeat center/cover`,
                  }}
                />
                <TvCon className="tvcontents">
                  <h1>{play.title}</h1>
                  <Genre>
                    {play.genre_ids.map((genreid) => (
                      <div className="genres">{genreid}</div>
                    ))}
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

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

export const MovieList = ({ movie, red, title }) => {
  return (
    <MvWrap>
      <Title>
        <span>{red}</span> {title}
      </Title>
      <Swiper spaceBetween={30} slidesPerView={4}>
        {movie.map((play) => (
          <SwiperSlide key={play.id}>
            <Link to={`/detail/${play.id}`}>
              <MvImgWrap>
                <MvImg
                  style={{
                    background: `url(${imgUrl}${play.backdrop_path}) no-repeat center/cover`,
                  }}
                />
                <MvCon className="mvcontents">
                  <h1>{play.title}</h1>
                  <Genre>
                    {play.genre_ids.map((genreid) => (
                      <div className="genres">{genreid}</div>
                    ))}
                  </Genre>
                  <p>{play.vote_average}점</p>
                  <span>{play.adult ? "19+" : "Everybody"}</span>
                </MvCon>
              </MvImgWrap>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </MvWrap>
  );
};

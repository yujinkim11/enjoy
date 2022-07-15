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

const TvTitle = styled.h3`
  font-size: 30px;
  font-weight: 700;
  span {
    color: ${mainStyle.mainColor};
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
    transform: scale(1.05, 1.05);
    transition: 0.5s;
    opacity: 0.5;
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

export const TvSlide = ({ data, red, title }) => {
  console.log(data);
  return (
    <SlideWrap>
      <TvTitle>
        <span>{red}</span>
        {title}
      </TvTitle>
      <Swiper modules={[Navigation]} spaceBetween={20} slidesPerView={4}>
        {data.map((tvdata) => (
          <SwiperSlide>
            <TvImgWrap>
              <TvImg
                style={{
                  background: `url(${
                    tvdata.backdrop_path
                      ? `${imgUrl}/${tvdata.poster_path}`
                      : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
                  }) no-repeat center / cover`,
                }}
              />
              <TvCon className="tvcontents">
                <h1>{tvdata.name}</h1>
                <Genre>
                  {tvdata.genre_ids.map((genreid) => (
                    <div className="genres">{genreid}</div>
                  ))}
                </Genre>
                <p>{tvdata.vote_average}점</p>
                <span>{tvdata.adult ? "19+" : "Everybody"}</span>
              </TvCon>
            </TvImgWrap>
          </SwiperSlide>
        ))}
      </Swiper>
    </SlideWrap>
  );
};

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";
import { imgUrl } from "../../../constants/constants";
import { Navigation } from "swiper";
import { mainStyle } from "../../../styles/globalstyle";
import { Link } from "react-router-dom";
import { Loading } from "../../Loading";

const SlideWrap = styled.div`
  margin-top: 100px;
  width: 100%;
  @media screen and (max-width: 500px) {
    margin-top: 0;
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
    transform: scale(1.05, 1.05);
    transition: 0.5s;
    opacity: 0.5;
  }
  @media screen and (max-width: 500px) {
    margin: 30px 0;
  }
`;

const Gen = styled.p``;

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

export const TvSlide = ({ data, red, title }) => {
  return (
    <>
      {/* {data && ( */}
      <SlideWrap>
        <TvTitle>
          <span>{red}</span>
          {title}
        </TvTitle>
        <Swiper modules={[Navigation]} navigation {...params}>
          {data &&
            data.map((tvdata) => (
              <SwiperSlide>
                <TvImgWrap>
                  <Link to={`/tv_detail/${tvdata.id}`}>
                    <TvImg
                      style={{
                        background: `url(${
                          tvdata.backdrop_path
                            ? `${imgUrl}/${tvdata.poster_path}`
                            : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
                        }) no-repeat center / cover`,
                      }}
                    />{" "}
                    <TvCon className="tvcontents">
                      <h1>{tvdata.name}</h1>
                      <Genre>
                        {/* {tvdata &&
                          tvdata.genres.map((tvgenre) => (
                            <Gen key={tvgenre.id}>▷ {tvgenre.name}</Gen>
                          ))} */}
                      </Genre>
                      <p>{tvdata.vote_average}점</p>
                      <span>{tvdata.adult ? "19+" : "Everybody"}</span>
                    </TvCon>
                  </Link>
                </TvImgWrap>
              </SwiperSlide>
            ))}
        </Swiper>
      </SlideWrap>
      {/* )} */}
    </>
  );
};

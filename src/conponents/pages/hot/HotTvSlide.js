import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";
import { imgUrl } from "../../../constants/constants";
import { Navigation } from "swiper";
import { mainStyle } from "../../../styles/globalstyle";
import { Link } from "react-router-dom";

const SlideWrap = styled.div`
  padding: ${mainStyle.padding};
  width: 100%;
  @media screen and (max-width: 500px) {
    padding: ${mainStyle.moPadding};
  }
`;

const HotImgWrap = styled.div`
  position: relative;
  .hotcontents {
    opacity: 0;
    transition: 1s;
  }
  :hover .hotcontents {
    opacity: 1;
  }
`;

const HotCon = styled.div`
  position: absolute;
  top: 37%;
  left: 10px;

  h1 {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 10px;
    @media screen and (max-width: 500px) {
      font-size: 30px;
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

const HotImg = styled.div`
  height: 450px;
  background-color: aquamarine;
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

export const HotTvSlide = ({ hottvData }) => {
  // console.log("hot", hotData);
  return (
    <>
      <SlideWrap>
        <Swiper modules={[Navigation]} navigation {...params}>
          {hottvData.map((hottv) => (
            <SwiperSlide>
              <HotImgWrap>
                <Link to={`/tv_detail/${hottv.id}`}>
                  <HotImg
                    style={{
                      background: `url(${
                        hottv.backdrop_path
                          ? `${imgUrl}${hottv.backdrop_path}`
                          : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
                      }) no-repeat center / cover`,
                    }}
                  />
                  <HotCon className="hotcontents">
                    <h1>
                      {hottv.title}
                      {hottv.name}
                    </h1>
                    <Genre></Genre>
                    <p>{hottv.vote_average}점</p>
                    <span>{hottv.adult ? "19+" : "Everybody"}</span>
                  </HotCon>
                </Link>
              </HotImgWrap>
            </SwiperSlide>
          ))}
        </Swiper>
      </SlideWrap>
    </>
  );
};
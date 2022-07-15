import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";
import { imgUrl } from "../../../constants/constants";
import { Navigation } from "swiper";
import { mainStyle } from "../../../styles/globalstyle";

const SlideWrap = styled.div`
  padding: ${mainStyle.padding};
  margin-top: 100px;
  width: 100%; ;
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

const MvTitle = styled.h3`
  font-size: 30px;
  font-weight: 700;
  span {
    color: ${mainStyle.mainColor};
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
  }

  p {
    font-size: 20px;
    margin: 10px 0;
  }
  span {
    font-size: 20px;
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

export const HotSlide = ({ hotData }) => {
  // console.log("hot", hotData);
  return (
    <>
      <SlideWrap>
        <Swiper modules={[Navigation]} spaceBetween={20} slidesPerView={4}>
          {hotData.map((hot) => (
            <SwiperSlide>
              <HotImgWrap>
                <HotImg
                  style={{
                    background: `url(${
                      hot.backdrop_path
                        ? `${imgUrl}${hot.backdrop_path}`
                        : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
                    }) no-repeat center / cover`,
                  }}
                />
                <HotCon className="hotcontents">
                  <h1>
                    {hot.title}
                    {hot.name}
                  </h1>
                  <Genre>
                    {hot.genre_ids.map((genreid) => (
                      <div className="genres">{genreid}</div>
                    ))}
                  </Genre>
                  <p>{hot.vote_average}점</p>
                  <span>{hot.adult ? "19+" : "Everybody"}</span>
                </HotCon>
              </HotImgWrap>
            </SwiperSlide>
          ))}
        </Swiper>
      </SlideWrap>
    </>
  );
};

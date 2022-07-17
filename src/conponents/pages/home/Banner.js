import { faBookmark, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { tvApi } from "../../../api";
import { mainStyle } from "../../../styles/globalstyle";
import { RoundBox } from "./RoundBox";
import { Loading } from "../../Loading";
import { imgUrl } from "../../../constants/constants";

const SubMainWrap = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
`;

const BgPoster = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
  filter: blur(5px);
`;

const ConWrap = styled.div`
  padding: ${mainStyle.padding};
`;
const Title = styled.div`
  font-size: 80px;
  font-weight: 900;
`;
const Info = styled.div`
  font-size: 20px;
  margin: 40px 0;
`;
const Poster = styled.div`
  width: 450px;
  height: 500px;
  position: absolute;
  right: 150px;
`;

const Content = styled.p`
  width: 600px;
  font-size: 25px;
  margin-bottom: 100px;
`;

const PlayBox = styled.div`
  width: 360px;
  height: 80px;
  border: 2px solid white;
  border-radius: 10px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const RoundWrap = styled.div`
  padding: ${mainStyle.padding};
`;
const RoundTitle = styled.h3`
  width: 600px;
  display: flex;
  font-size: 40px;
  font-weight: 700;
  margin: 30px 0 50px 0;
  h3 {
    margin-right: 120px;
  }
  p {
    margin-right: 20px;
  }
`;

const Heart = styled.p`
  color: ${(props) => props.color};
`;

const Bookmark = styled.p`
  color: ${(props) => props.bookcolor};
`;

const RoundContent = styled.p`
  width: 600px;
  line-height: 40px;
  font-size: 25px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 200px;
`;

const RoundInfo = styled.p`
  font-size: 30px;
  font-weight: 500;
`;

export const Banner = () => {
  const [popular, setPopular] = useState();
  const [color, setColor] = useState();
  const [bookcolor, setBookColor] = useState();
  const [loading, setLoading] = useState(true);

  const handleHeart = () => {
    if (color !== "red") {
      setColor("red");
    } else {
      setColor("white");
    }
  };

  const handleBook = () => {
    if (bookcolor !== "yellow") {
      setBookColor("yellow");
    } else {
      setBookColor("white");
    }
  };

  useEffect(() => {
    const bannerData = async () => {
      try {
        const {
          data: { results: popularData },
        } = await tvApi.popular();
        setPopular(popularData);

        setLoading(false);
      } catch (error) {}
    };

    bannerData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {popular && (
            <>
              <SubMainWrap>
                <BgPoster
                  style={{
                    background: `url(${imgUrl}${popular[0].backdrop_path}) no-repeat center / cover`,
                  }}
                />
                <ConWrap>
                  <Title>{popular[0].name}</Title>
                  <Info>
                    <p>
                      {popular.adult ? "19+" : "Everybody"} |<span></span>|{" "}
                      {popular[0].first_air_date}
                    </p>
                  </Info>
                  <Content>
                    <p>{popular[0].overview.slice(0, 80) + "..."}</p>
                  </Content>
                  <Link to={"/BannerPlay"}>
                    <PlayBox>바로 재생</PlayBox>
                  </Link>
                </ConWrap>
                <Poster
                  style={{
                    background: `url(${imgUrl}${popular[0].backdrop_path}) no-repeat center / cover`,
                  }}
                />
              </SubMainWrap>
              <RoundWrap>
                <RoundTitle>
                  <h3>{popular[0].name}</h3>
                  <Heart color={color} onClick={handleHeart}>
                    <FontAwesomeIcon icon={faHeart} />
                  </Heart>
                  <Bookmark bookcolor={bookcolor} onClick={handleBook}>
                    <FontAwesomeIcon icon={faBookmark} />
                  </Bookmark>
                </RoundTitle>
                <RoundContent>
                  <p>{popular[0].overview + "..."}</p>
                </RoundContent>
                <RoundInfo>회차 정보</RoundInfo>
              </RoundWrap>

              <RoundBox />
              <RoundBox />
              <RoundBox />
              <RoundBox />
            </>
          )}
        </>
      )}
    </>
  );
};

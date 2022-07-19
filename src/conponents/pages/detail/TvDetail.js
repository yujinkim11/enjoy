import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { tvApi } from "../../../api";
import { Container } from "../../Container";
import { Loading } from "../../Loading";
import { imgUrl } from "../../../constants/constants";
import { ScrollTop } from "../../../ScrollTop";

const TvdetailWrap = styled.div`
  padding-top: 220px;
  font-size: 25px;
  position: relative;
  @media screen and (max-width: 500px) {
    height: 100vh;
    padding-top: 120px;
  }
`;

const TvPoster = styled.div`
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 500px) {
    height: 100vh;
  }
`;

const BlackBox = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const TvScore = styled.div`
  margin-bottom: 20px;
  @media screen and (max-width: 500px) {
    font-size: 20px;
    height: 100vh;
  }
`;
const TvTitle = styled.div`
  font-size: 100px;
  font-weight: 900;
  margin-bottom: 30px;
  @media screen and (max-width: 500px) {
    font-size: 60px;
  }
`;
const TvGenre = styled.ul`
  list-style: none;
  display: flex;
  margin-bottom: 20px;
  li {
    width: 200px;
    height: 200px;
  }
  @media screen and (max-width: 500px) {
    font-size: 20px;
    li {
    }
  }
`;

const Gen = styled.p`
  margin-right: 10px;
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

const TvCon = styled.p`
  width: 600px;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 50px;
  @media screen and (max-width: 500px) {
    width: 250px;
    font-size: 18px;
    margin-top: -720px;
  }
`;

const MenuWrap = styled.ul`
  margin-top: 115px;
  @media screen and (max-width: 500px) {
  }
`;

const Play = styled.div`
  width: 360px;
  height: 80px;
  border-radius: 10px;
  border: 1px solid white;
  color: white;
  font-size: 30px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  p {
    margin-left: 10px;
  }
  @media screen and (max-width: 500px) {
    width: 250px;
    height: 60px;
    margin-top: -20px;
    font-size: 24px;
  }
`;

const IFrame = styled.iframe`
  width: 100%;
  height: 650px;
  margin-top: 120px;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 80vh;
    margin-top: 100px;
  }
`;

export const TvDetail = () => {
  const [tvdetail, setTvDetail] = useState();
  const [tvvideo, setTvVideo] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const tvdetailData = async () => {
      const {
        data: { results },
      } = await tvApi.tvVideo(id);

      try {
        const { data: detail } = await tvApi.tvDetail(id);
        setTvDetail(detail);

        setTvVideo(results.length === 0 ? null : results[0].key);

        setLoading(false);
      } catch (error) {}
    };
    tvdetailData();
  }, [id]);

  const handleClick = () => {
    window.scrollTo({
      top: 900,
    });
  };

  return (
    <>
      <ScrollTop />
      {loading ? (
        <Loading />
      ) : (
        <>
          <TvPoster
            style={{
              background: `url(${
                tvdetail.backdrop_path
                  ? `${imgUrl}${tvdetail.backdrop_path}`
                  : "https://mapandan.gov.ph/wp-content/uploads/2018/03/no_image.jpg"
              }) no-repeat center / cover`,
            }}
          >
            <BlackBox>
              <Container>
                {tvdetail && (
                  <TvdetailWrap>
                    <TvTitle>{tvdetail.name}</TvTitle>
                    <TvGenre>
                      {tvdetail.genres.map((tvgenre) => (
                        <Gen key={tvgenre.id}>▷ {tvgenre.name}</Gen>
                      ))}
                    </TvGenre>
                    <TvScore>{tvdetail.vote_average}점</TvScore>
                    <TvCon>{tvdetail.overview.slice(0, 150) + "..."}</TvCon>
                    <MenuWrap>
                      <Play onClick={handleClick}>
                        <i class="fa-solid fa-play"></i>
                        <p>예고편 보기</p>
                      </Play>
                    </MenuWrap>
                  </TvdetailWrap>
                )}
              </Container>
            </BlackBox>
          </TvPoster>

          <Container>
            {tvvideo ? (
              <IFrame
                src={`https://www.youtube.com/embed/${tvvideo}`}
                allowfullscreen
              ></IFrame>
            ) : null}
          </Container>
        </>
      )}
    </>
  );
};

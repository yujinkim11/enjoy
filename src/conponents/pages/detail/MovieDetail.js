import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { mvApi } from "../../../api";
import { Container } from "../../Container";
import { Loading } from "../../Loading";
import { imgUrl } from "../../../constants/constants";
import { ScrollTop } from "../../../ScrollTop";

const MvdetailWrap = styled.div`
  padding-top: 220px;
  font-size: 25px;
  position: relative;
  @media screen and (max-width: 500px) {
    height: 100vh;
    padding-top: 120px;
  }
`;

const MvPoster = styled.div`
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

const MvScore = styled.div`
  margin-bottom: 20px;
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;
const MvTitle = styled.div`
  font-size: 100px;
  font-weight: 900;
  margin-bottom: 30px;
  @media screen and (max-width: 500px) {
    font-size: 60px;
  }
`;
const MvGenre = styled.ul`
  list-style: none;
  display: flex;
  margin-bottom: 20px;
  li {
    width: 200px;
    height: 200px;
    background-color: aliceblue;
  }
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

const MvTime = styled.div`
  display: flex;
  margin-bottom: 20px;
  p {
    margin-right: 10px;
  }
  span {
    margin-left: 10px;
  }
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;
const MvCon = styled.p`
  width: 600px;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 50px;
  @media screen and (max-width: 500px) {
    width: 250px;
    font-size: 18px;
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
    margin-top: -80px;
    font-size: 24px;
    padding-left: 0;
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

const Gen = styled.p``;

export const MovieDetail = () => {
  const [mvdetail, setMvDetail] = useState();
  const [mvvideo, setMvVideo] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const mvdetailData = async () => {
      const {
        data: { results },
      } = await mvApi.movieVideo(id);

      try {
        const { data: detail } = await mvApi.movieDetail(id);
        setMvDetail(detail);
        console.log(mvdetail);

        setMvVideo(results.length === 0 ? null : results[0].key);

        setLoading(false);
      } catch (error) {}
    };
    mvdetailData();
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
          <MvPoster
            style={{
              background: `url(${
                mvdetail.backdrop_path
                  ? `${imgUrl}${mvdetail.backdrop_path}`
                  : "https://mapandan.gov.ph/wp-content/uploads/2018/03/no_image.jpg"
              }) no-repeat center / cover`,
            }}
          >
            <BlackBox>
              <Container>
                {mvdetail && (
                  <MvdetailWrap>
                    <MvTitle>{mvdetail.title}</MvTitle>
                    <MvGenre>
                      {mvdetail.genres.map((mvgenre) => (
                        <Gen key={mvgenre.id}>▷ {mvgenre.name}</Gen>
                      ))}
                    </MvGenre>
                    <MvTime>
                      <p>{mvdetail.release_date}</p> |{" "}
                      <span>{mvdetail.runtime}분</span>
                    </MvTime>
                    <MvScore>{mvdetail.vote_average}점</MvScore>
                    <MvCon>{mvdetail.overview.slice(0, 150) + "..."}</MvCon>
                    <MenuWrap>
                      <Play onClick={handleClick}>
                        <i class="fa-solid fa-play"></i>
                        <p>예고편 보기</p>
                      </Play>
                    </MenuWrap>
                  </MvdetailWrap>
                )}
              </Container>
            </BlackBox>
          </MvPoster>

          <Container>
            {mvvideo ? (
              <IFrame
                src={`https://www.youtube.com/embed/${mvvideo}`}
                allowfullscreen
              ></IFrame>
            ) : null}
          </Container>
        </>
      )}
    </>
  );
};

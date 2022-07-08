import { faBookmark, faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { mainStyle } from "../../../styles/globalstyle";
import { RoundBox } from "./RoundBox";
import { RoundCon } from "./RoundCon";

const SubMainWrap = styled.div`
  padding: ${mainStyle.padding};
  width: 100%;
  height: 75vh;
  background-color: rgba(100, 100, 100, 0.5);
  display: flex;
  align-items: center;
  position: relative;
`;

const ConWrap = styled.div``;
const Title = styled.div`
  font-size: 80px;
  font-weight: 900;
`;
const Info = styled.div`
  font-size: 20px;
  margin: 40px 0;
`;
const Poster = styled.div`
  width: 350px;
  height: 500px;
  background-color: antiquewhite;
  position: absolute;
  right: 150px;
  background: url(https://image.tving.com/upload/cms/caip/CAIP0900/P001615344.jpeg/dims/resize/F_webp,480)
    no-repeat center / cover;
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
const RoundContent = styled.p`
  width: 600px;
  line-height: 40px;
  font-size: 25px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.7);
`;

export const BannerMain = () => {
  return (
    <>
      <SubMainWrap>
        <ConWrap>
          <Title>뿅뿅 지구오락실 </Title>
          <Info>
            <p>15+ | 예능 | 2022-07-08</p>
          </Info>
          <Content>
            <p>
              지구로 도망간 달나라 토끼를 잡기위해 뭉친 4명의 용사들! 시공간을
              넘나들며 펼쳐지는 신개념 하이브리드 멀티버스 액션 어드벤쳐
              버라이어티가 시작된다!
            </p>
          </Content>
          <PlayBox>바로 재생</PlayBox>
        </ConWrap>
        <Poster></Poster>
      </SubMainWrap>
      <RoundWrap>
        <RoundTitle>
          <h3>2. 뿅뿅 지구오락실 2화</h3>
          <p>
            <FontAwesomeIcon icon={faHeartbeat} />
          </p>
          <p>
            <FontAwesomeIcon icon={faBookmark} />
          </p>
        </RoundTitle>
        <RoundContent>
          <p>
            맥주를 부르는 밤 Feat. 테라스 방콕의 밤을 시원~하게 적실 현지
            맥주&얼음, 각종 안주까지 풀세팅 BUT, 지락실 사전에 공짜는 없다!
          </p>
        </RoundContent>
      </RoundWrap>
      <RoundBox />
    </>
  );
};

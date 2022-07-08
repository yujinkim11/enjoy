import styled from "styled-components";
import { mainStyle } from "../../../styles/globalstyle";

const SubMainWrap = styled.div`
  padding: ${mainStyle.padding};
  width: 100%;
  height: 80vh;
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

export const BannerMain = () => {
  return (
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
  );
};

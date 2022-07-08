import styled from "styled-components";
import { mainStyle } from "../../../styles/globalstyle";

const RoundBoxWrap = styled.div`
  margin-top: 100px;
  padding: ${mainStyle.padding};
`;

const AllWrap = styled.div`
  display: flex;
`;

const Title = styled.div`
  font-size: 30px;
  margin-bottom: 50px;
`;
const BoxWrap = styled.div`
  display: flex;
`;
const Box = styled.div`
  width: 350px;
  height: 250px;
  background-color: #7d7d7d;
`;

const ConWrap = styled.div`
  width: 50%;
  margin-left: 15px;
`;
const Round = styled.h3`
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 20px;
`;
const Content = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
`;

export const RoundBox = () => {
  return (
    <RoundBoxWrap>
      <Title>회차 정보</Title>
      <AllWrap>
        <BoxWrap>
          <Box></Box>
          <ConWrap>
            <Round>1화</Round>
            <Content>
              <p>
                '탐'나는 소녀시대의 '탐'나는 예능 정복기! 출격 준비 완료! 15주년
                기념 파티 OPEN! 전 세대 떼창 가능한 '소녀시대 히트곡 2022년
                버전'은?! 소시 앞에 나타난 신비로운 문!
              </p>
            </Content>
          </ConWrap>
        </BoxWrap>

        <BoxWrap>
          <Box></Box>
          <ConWrap>
            <Round>1화</Round>
            <Content>
              <p>
                '탐'나는 소녀시대의 '탐'나는 예능 정복기! 출격 준비 완료! 15주년
                기념 파티 OPEN! 전 세대 떼창 가능한 '소녀시대 히트곡 2022년
                버전'은?! 소시 앞에 나타난 신비로운 문!
              </p>
            </Content>
          </ConWrap>
        </BoxWrap>
      </AllWrap>
    </RoundBoxWrap>
  );
};

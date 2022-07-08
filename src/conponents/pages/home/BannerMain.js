import styled from "styled-components";

const SubMainWrap = styled.div`
  width: 100%;
  height: 80vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ConWrap = styled.div``;
const Title = styled.div`
  font-size: 80px;
  font-weight: 900;
`;
const Info = styled.div``;
const Poster = styled.div``;
const PlayBox = styled.div``;

export const BannerMain = () => {
  return (
    <SubMainWrap>
      <ConWrap>
        <Title>뿅뿅 지구오락실 </Title>
        <Info>
          <p>15+ | 예능 | 2022-07-08</p>
        </Info>
      </ConWrap>
      <Poster></Poster>
      <PlayBox>바로 재생</PlayBox>
    </SubMainWrap>
  );
};

import styled from "styled-components";
import { mainStyle } from "../../../styles/globalstyle";

const DetailWrap = styled.div`
  padding: ${mainStyle.padding};
  margin-top: 100px;
  height: 75vh;
  display: flex;
  align-items: center;
  position: relative;
`;
const DetailConWrap = styled.div``;
const DetailTitle = styled.h3`
  width: 1000px;
  display: flex;
  font-size: 80px;
  font-weight: 700;
  margin: 30px 0 50px 0;
  h3 {
    margin-right: 120px;
  }
`;

const DetailInfo = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 40px 0;
  word-spacing: 30px;
`;
const DetailContent = styled.p`
  width: 600px;
  line-height: 30px;
  font-size: 20px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 200px;
`;
const DetailImg = styled.div`
  width: 350px;
  height: 500px;
  background: url(https://image.tving.com/upload/cms/caim/CAIM2100/M000367811.jpg/dims/resize/F_webp,480)
    no-repeat center / cover;
  position: absolute;
  right: 150px;
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

const PreviewWrap = styled.div`
  padding: ${mainStyle.padding};
  margin-top: 100px;
  width: 100%;
  height: 80vh;
  background-color: #707070;
`;

export const Details = () => {
  const handleDetail = () => {
    window.scrollTo({
      top: 800,
    });
  };

  return (
    <>
      <DetailWrap>
        <DetailConWrap>
          <DetailTitle>
            <h3>로미오와 줄리엣</h3>
          </DetailTitle>
          <DetailInfo>
            <p>15+ | 로맨스 | 1978</p>
          </DetailInfo>
          <DetailContent>
            <p>
              정열의 도시 베로나, 태양의 열기가 가득한 이 도시에서 두 가문
              몬태규가와 캐플릿가는 끝없이 혈투를 벌인다. 어느 날 캐플릿가의
              파티에 몰래 참석한 몬태규가의 로미오는, 아름다운 줄리엣을 만나
              첫눈에 사랑에 빠진다. 로미오와 줄리엣은 부모 몰래 결혼식을 올리고,
              이 결혼이 두 가문의 화해를 가져다 줄 거라 믿은 신부는 그들을
              축복한다. 그러나 싸움에 휘말려 줄리엣의 사촌 티볼트를 죽이게 된
              로미오가 베로나에서 추방당하게 되고, 줄리엣은 그녀를 좋은 가문에
              강제로 결혼시키려는 부모를 피해 수면제를 먹고 죽은 것처럼
              가장하는데..
            </p>
          </DetailContent>
          <PlayBox onClick={handleDetail}>예고편 보기</PlayBox>
        </DetailConWrap>
        <DetailImg />
      </DetailWrap>
      <PreviewWrap></PreviewWrap>
    </>
  );
};

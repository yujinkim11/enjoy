import styled from "styled-components";
import { mainStyle } from "../../../styles/globalstyle";
import { TvListBox } from "./TvListBox";

const TvProgramWrap = styled.div`
  padding: ${mainStyle.padding};
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TvProgramTitle = styled.h3`
  font-size: 60px;
  font-weight: 900;
  margin-bottom: 100px;
`;

const TvProgramCategory = styled.div``;

const CategoryWrap = styled.div`
  width: 440px;
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  font-weight: 700;
`;
const CategoryBar = styled.div`
  width: 440px;
  height: 5px;
  background-color: #707070;
  margin-top: 30px;
`;

const ChoiceBar = styled.div`
  width: 20%;
  height: 5px;
  background-color: ${mainStyle.mainColor};
`;

export const TvProgram = () => {
  return (
    <TvProgramWrap>
      <TvProgramTitle>
        <h3>TV프로그램</h3>
      </TvProgramTitle>
      <TvProgramCategory>
        <CategoryWrap>
          <span>전체</span>
          <span>드라마</span>
          <span>예능</span>
        </CategoryWrap>
        <CategoryBar>
          <ChoiceBar />
        </CategoryBar>
      </TvProgramCategory>
      <TvListBox popular="TOP " tvcate="인기 TV프로그램" />
      <TvListBox tvcate="새로 시작한 프로그램" />
      <TvListBox tvcate="한국 드라마" />
      <TvListBox tvcate="의학 드라마" />
      <TvListBox tvcate="로맨스 드라마" />
    </TvProgramWrap>
  );
};

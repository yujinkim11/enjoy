import styled from "styled-components";
import { mainStyle } from "../../../styles/globalstyle";
import { HotListBox } from "./HotListBox";

const HotListWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;
const HotCategoryWrap = styled.div`
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HotCategory = styled.div`
  font-size: 30px;
  font-weight: 700;
  word-spacing: 100px;
`;
const HotBar = styled.div`
  width: 440px;
  height: 5px;
  background-color: #707070;
  margin-top: -30px;
`;

const HotChoiceBar = styled.div`
  width: 20%;
  height: 5px;
  background-color: ${mainStyle.mainColor};
`;

export const HotList = () => {
  return (
    <>
      <HotListWrap>
        <HotCategoryWrap>
          <HotCategory>
            <span>예능</span> <span>드라마</span> <span>영화</span>
          </HotCategory>
        </HotCategoryWrap>
        <HotBar>
          <HotChoiceBar />
        </HotBar>
      </HotListWrap>
      <HotListBox />
    </>
  );
};

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const AllWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Bomb = styled.div`
  font-size: 200px;
  margin: 200px 0 50px 0;
`;

const Text = styled.p`
  font-size: 40px;
  font-weight: 500;
  margin: 0 0;
`;
export const NotFound = () => {
  return (
    <AllWrap>
      <Bomb>
        <FontAwesomeIcon icon={faBomb} />
      </Bomb>
      <Text>
        <p>찾으시는 페이지가 없거나 오류가 발생하였습니다.</p>
        <br />
        <p>입력하신 주소가 정확한지 다시한번 확인해 주세요.</p>
      </Text>
    </AllWrap>
  );
};

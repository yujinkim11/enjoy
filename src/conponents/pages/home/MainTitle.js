import styled from "styled-components";
import { mainStyle } from "../../../styles/globalstyle";

const Title = styled.h3`
  font-size: 30px;
  span {
    color: ${mainStyle.color};
    &:nth-child(1) {
      color: ${mainStyle.mainColor};
    }
  }
  margin-bottom: 50px;
`;

export const MainTitle = (props) => {
  return (
    <Title>
      <span>{props.main}</span>
      <span>{props.content}</span>
    </Title>
  );
};

import { SpinnerDotted } from "spinners-react";
import styled from "styled-components";
import { mainStyle } from "../styles/globalstyle";

const Wrap = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <Wrap>
      <SpinnerDotted size={100} color={mainStyle.mainColor} />
    </Wrap>
  );
};

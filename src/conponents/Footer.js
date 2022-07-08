import styled from "styled-components";

const FooterWrap = styled.footer`
  width: 100%;
  height: 150px;
  padding: 75px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-top: 1px solid #555;
  margin-top: 150px;
  position: relative;
`;

const FooterCon = styled.p`
  position: absolute;
  bottom: 0;
  line-height: 150px;
`;

export const Footer = () => {
  return (
    <FooterWrap>
      <FooterCon>
        <span>&copy; yujin {new Date().getFullYear()} copyright</span>
      </FooterCon>
    </FooterWrap>
  );
};

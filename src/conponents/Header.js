import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../styles/globalstyle";

const HeaderWrap = styled.div`
  height: 80px;
  padding: ${mainStyle.padding};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 35px;
  font-weight: 900;
`;

const MenuWrap = styled.div`
  display: flex;
`;

const Menu = styled.div``;

export const Header = () => {
  return (
    <HeaderWrap>
      <Logo>
        <Link to={"/"}>Enjoy</Link>
      </Logo>
      <MenuWrap>
        <Menu>
          <Link to={"/tvprogram"}>TV프로그램</Link>
        </Menu>
        <Menu>
          <Link to={"/movie"}>영화</Link>
        </Menu>
        <Menu>
          <Link to={"/hot"}>HOT</Link>
        </Menu>
      </MenuWrap>
    </HeaderWrap>
  );
};

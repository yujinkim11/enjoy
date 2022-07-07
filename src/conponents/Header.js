import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  font-size: 30px;
  font-weight: 900;
`;

const MenuWrap = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  i {
    color: white;
  }
`;

const Menu = styled.div`
  margin-right: 100px;
  font-size: 18px;
  font-weight: 300;
  &:nth-child(3) {
    margin-right: 900px;
  }
`;

const Search = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  input {
    margin-right: 20px;
    border: 0;
    height: 25px;
  }
`;

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
        <Search>
          <input type="text"></input>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Search>
      </MenuWrap>
    </HeaderWrap>
  );
};

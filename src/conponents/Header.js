import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../styles/globalstyle";

const HeaderWrap = styled.div`
  width: 100%;
  max-width: 100%;
  height: 80px;
  padding: ${mainStyle.padding};
  display: flex;
  justify-content: left;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  background-color: ${(props) => props.headerbg};
  @media screen and (max-width: 500px) {
    padding: ${mainStyle.moPadding};
  }
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: 900;
  @media screen and (max-width: 500px) {
    font-size: 24px;
  }
`;

const MenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  i {
    color: white;
  }
  @media screen and (max-width: 500px) {
    margin-left: -30px;
  }
`;

const Menu = styled.div`
  margin-left: 100px;
  font-size: 18px;
  font-weight: 500;

  @media screen and (max-width: 500px) {
    margin-left: 50px;
    font-size: 16px;
  }
`;

const Search = styled.div`
  position: absolute;
  right: 150px;
  @media screen and (max-width: 500px) {
    right: 20px;
  }
`;

export const Header = () => {
  const [bg, setBg] = useState();

  const handelScroll = () => {
    const sct = window.pageYOffset;
    // console.log(sct);
    // => 내가 내린 스크롤값 얻어오기, var로 지정하여 사용하기

    if (sct > 400) {
      setBg("#1a1a1a");
    } else {
      setBg("transparent");
    }
  };

  window.addEventListener("scroll", handelScroll);
  return (
    <HeaderWrap headerbg={bg}>
      <Logo>
        <Link to={"/"}>Enjoy</Link>
      </Logo>
      <MenuWrap>
        <Menu>
          <Link to={"/tvprogram"}>TV프로그램</Link>
        </Menu>
        <Menu>
          <Link to={"/movieprogram"}>영화</Link>
        </Menu>
        <Menu>
          <Link to={"/hot"}>HOT</Link>
        </Menu>
        <Search>
          <Link to={"/search"}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
        </Search>
      </MenuWrap>
    </HeaderWrap>
  );
};

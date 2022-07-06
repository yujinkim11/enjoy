import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  bgColor: "#1a1a1a",
  color: "white",
  mainColor: "#FF1F5A",
  padding: "0 150px",
  // moPadding: "0 20px",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }


    
    body{
        font-family: 'Noto Sans KR', sans-serif;
        background-color: ${mainStyle.bgColor};
        color: ${mainStyle.color};
        letter-spacing: -1px;
        word-break: keep-all;
    }

    a{
        text-decoration: none;
        color: ${mainStyle.color}
    }
`;

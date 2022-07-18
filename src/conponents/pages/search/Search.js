import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { mvApi, tvApi } from "../../../api";
import { Container } from "../../Container";
import { Loading } from "../../Loading";
import { PageTitle } from "../../PageTitle";
import { imgUrl } from "../../../constants/constants";
import { Link } from "react-router-dom";
import { mainStyle } from "../../../styles/globalstyle";

const SearchWrap = styled.div`
  margin-top: 150px;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  border: 1px solid #555;
  padding: 20px;
  box-sizing: border-box;
  font-size: 20px;

  &::placeholder {
    font-size: 20px;
    color: ${mainStyle.mainColor};
    opacity: 0.7;
  }
`;

const ConWrap = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 30px;
  row-gap: 50px;
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
    row-gap: 50px;
  }
`;

const Con = styled.div``;
const Title = styled.h3`
  font-size: 20px;
  margin-top: 10px;
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;
const Bg = styled.div`
  height: 300px;
`;

const SearchMessage = styled.p`
  margin-top: 20px;
  margin-left: 10px;
  font-size: 20px;
`;

export const Search = () => {
  const [searchResult, setSearchResult] = useState();
  const [tvResult, setTvResult] = useState();

  const [loading, setLoadig] = useState();

  const {
    register,
    handleSubmit,
    getValues,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const searchMovie = async () => {
    const { search: term } = getValues();

    setLoadig(true);
    try {
      const {
        data: { results: mv },
      } = await mvApi.mvsearch(term);
      setSearchResult(mv);

      if (mv.length <= 0) {
        setError("result", {
          message: "검색한 영화 정보가 없습니다",
        });
      } else {
        setSearchResult(mv);
      }

      const {
        data: { results: tv },
      } = await tvApi.tvsearch(term);
      setTvResult(tv);

      if (tv.length <= 0) {
        setError("result", {
          message: "검색한 TV 프로그램 정보가 없습니다",
        });
      } else {
        setTvResult(tv);
      }

      setLoadig(false);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(searchResult);
  console.log(errors);

  return (
    <div>
      <PageTitle title={"Search"} />

      <Container>
        <SearchWrap>
          <form onSubmit={handleSubmit(searchMovie)}>
            <Input
              {...register("search", {
                required: "내용은 필수 입력사항입니다",
                onChange() {
                  clearErrors("result");
                },
              })}
              type="text"
              placeholder="검색어 입력"
            ></Input>

            <SearchMessage>{errors?.search?.message}</SearchMessage>
            <SearchMessage>{errors?.result?.message}</SearchMessage>
          </form>
        </SearchWrap>

        {loading ? (
          <Loading />
        ) : (
          <>
            {searchResult && (
              <ConWrap>
                {searchResult.map((term) => (
                  <Con key={term.id}>
                    <Link to={`/mv_detail/${term.id}`}>
                      <Bg
                        style={{
                          background: `url(${imgUrl}${term.backdrop_path}) no-repeat center / cover`,
                        }}
                      ></Bg>
                      <Title>{term.title}</Title>
                    </Link>
                  </Con>
                ))}
              </ConWrap>
            )}
          </>
        )}
        {loading ? (
          <Loading />
        ) : (
          <>
            {tvResult && (
              <ConWrap>
                {tvResult.map((term) => (
                  <Con key={term.id}>
                    <Link to={`/tv_detail/${term.id}`}>
                      <Bg
                        style={{
                          background: `url(${imgUrl}${term.backdrop_path}) no-repeat center / cover`,
                        }}
                      ></Bg>
                      <Title>{term.name}</Title>
                    </Link>
                  </Con>
                ))}
              </ConWrap>
            )}
          </>
        )}
      </Container>
    </div>
  );
};

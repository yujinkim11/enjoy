import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyled } from "./styles/globalstyle";
import { Home } from "./conponents/pages/home/Home";
import { TvProgram } from "./conponents/pages/tvprogram/TvProgram";
import { MovieProgram } from "./conponents/pages/movie/MovieProgram";
import { Hot } from "./conponents/pages/hot/Hot";
import { NotFound } from "./conponents/pages/NotFound";
import { Header } from "./conponents/Header";
import { Footer } from "./conponents/Footer";
import { Search } from "./conponents/pages/search/Search";
import { MovieDetail } from "./conponents/pages/detail/MovieDetail";
import { TvDetail } from "./conponents/pages/detail/TvDetail";
import { HotMv } from "./conponents/pages/hot/HotMv";
import { HotTv } from "./conponents/pages/hot/HotTv";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <GlobalStyled />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvprogram" element={<TvProgram />} />
          <Route path="/movieprogram" element={<MovieProgram />} />
          <Route path="/hot" element={<Hot />} />
          <Route path="/search" element={<Search />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/tv_detail/:id" element={<TvDetail />} />
          <Route path="/mv_detail/:id" element={<MovieDetail />} />
          <Route path="/hot_tv" element={<HotTv />} />
          <Route path="/hot_mv" element={<HotMv />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;

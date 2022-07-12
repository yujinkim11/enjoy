import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyled } from "./styles/globalstyle";
import { Home } from "./conponents/pages/home/Home";
import { TvProgram } from "./conponents/pages/tvprogram/TvProgram";
import { Movie } from "./conponents/pages/movie/Movie";
import { Hot } from "./conponents/pages/hot/Hot";
import { NotFound } from "./conponents/pages/NotFound";
import { Header } from "./conponents/Header";
import { Footer } from "./conponents/Footer";
import { BannerMain } from "./conponents/pages/home/BannerMain";
import { BannerPlay } from "./conponents/pages/home/BannerPlay";
import { Search } from "./conponents/pages/search/Search";
import { Detail } from "./conponents/pages/detail/Detail";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <GlobalStyled />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvprogram" element={<TvProgram />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/hot" element={<Hot />} />
          <Route path="/search" element={<Search />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/bannermain" element={<BannerMain />} />
          <Route path="/bannerplay" element={<BannerPlay />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;

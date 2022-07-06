import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyled } from "./styles/globalstyle";
import { Home } from "./conponents/pages/home/Home";
import { TvProgram } from "./conponents/pages/tvprogram/TvProgram";
import { Movie } from "./conponents/pages/movie/Movie";
import { Hot } from "./conponents/pages/hot/Hot";
import { NotFound } from "./conponents/pages/NotFound";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <GlobalStyled />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvprogram" element={<TvProgram />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/hot" element={<Hot />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;

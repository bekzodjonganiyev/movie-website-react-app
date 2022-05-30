import { Route, Routes } from 'react-router-dom';
import "./assets/main.css"

import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Popular from './pages/Popular/Popular';
import TopRated from './pages/TopRated/TopRated';
import SingleMovie from './pages/SingleMovie/SingleMovie';
import Person from "./pages/Person/Person"

import SearchPage from './pages/SearchPage/SearchPage';

function App() {
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<Popular />} />
      <Route path="/top-rated" element={<TopRated />} />
      <Route path="/movie/:id" element={<SingleMovie />} />
      <Route path="/person/:id" element={<Person />} />
      <Route path="/search/:searchQuery" element={<SearchPage />} />
    </Routes>
    </>
  );
}

export default App;

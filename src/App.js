import { Route, Routes } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Popular from './pages/Popular/Popular';
import TopRated from './pages/TopRated/TopRated';
import SingleMovie from './pages/SingleMovie/SingleMovie';
import Person from "./pages/Person/Person"

import "./assets/main.css"

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
    </Routes>
    </>
  );
}

export default App;

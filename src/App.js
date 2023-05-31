import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/Aboutview";
import { Routes, Route } from "react-router-dom";
import SearchView from "./components/SearchView";
import MovieView from "./components/MovieView";
import { useState, useEffect } from "react";
import PageNotFound from "./components/page404";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=5d7bf9b65b7c48716189b9c38f70c124&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
        .then((respond) => respond.json())
        .then((data) => {
          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route
          path="/search"
          element={
            <SearchView keyword={searchText} searchResults={searchResults} />
          }
        />
        <Route path="/movies/:id" element={<MovieView />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;

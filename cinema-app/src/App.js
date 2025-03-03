import React, { useState } from 'react';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';
import MovieForm from './Components/MovieForm';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MovieCard from './Components/MovieCard';
import MovieDescription from './Components/MovieDescription';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState({ title: '', rating: '' });

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filterMovies = () => {
    return movies.filter((movie) => {
      const titleMatch = movie.title.toLowerCase().includes(filters.title.toLowerCase());
      const ratingMatch = filters.rating ? movie.rating >= filters.rating : true;
      return titleMatch && ratingMatch;
    });
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <h1>Ma Liste de Films</h1>
        <MovieForm onAddMovie={addMovie} />
        <Filter onFilterChange={handleFilterChange} />
        <MovieList movies={filterMovies()} />

       
        <Routes>
          <Route path="/" element={<MovieCard />} />
          <Route path="/movie/:id" element={<MovieDescription />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;


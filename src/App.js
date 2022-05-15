import React, { useState, useEffect } from 'react';
import './App.css';
import requests from './requests';
import Nav from './Nav';
import Row from './Row';

function App() {
  const [genre, setGenre] = useState(requests.fetchNetflixOriginals);
  const [genreTitle, setTitle] = useState('Netflix Originals');
  const [searchParam, setParam] = useState('');
  useEffect(() => {
    if (searchParam) {
      setTitle(searchParam);
      setGenre(requests.searchMovie+'&query='+searchParam);
    }
  }, [searchParam]);
  return (
    <div className="App">
    <Nav searchParam={searchParam} setParam={setParam} />
    <div className="movieContainer">
      <div style={{width: '40vw', color: 'white', marginTop: '15%'}}>
        <div className={`${genreTitle === 'Netflix Originals' ? 'active' : 'not-active'} commonGenre`} onClick={() => {setTitle('Netflix Originals'); setGenre(requests.fetchNetflixOriginals)}}>Netflix Originals</div>
        <div className={`${genreTitle === 'Top Rated' ? 'active' : 'not-active'} commonGenre`} onClick={() => {setTitle('Top Rated'); setGenre(requests.fetchTopRated)}}>Top Rated</div>
        <div className={`${genreTitle === 'Horror Movies' ? 'active' : 'not-active'} commonGenre`} onClick={() => {setTitle('Horror Movies'); setGenre(requests.fetchHorrorMovies)}}>Horror</div>
        <div className={`${genreTitle === 'Romance Movies' ? 'active' : 'not-active'} commonGenre`} onClick={() => {setTitle('Romance Movies'); setGenre(requests.fetchRomanceMovies)}}>Romance</div>
        <div className={`${genreTitle === 'Documentries' ? 'active' : 'not-active'} commonGenre`} onClick={() => {setTitle('Documentries'); setGenre(requests.fetchDocumentaries)}}>Documentries</div>
        <div className={`${genreTitle === 'Comedy Movies' ? 'active' : 'not-active'} commonGenre`} onClick={() => {setTitle('Comedy Movies'); setGenre(requests.fetchComedyMovies)}}>Comedy</div>
        <div className={`${genreTitle === 'Action Movies' ? 'active' : 'not-active'} commonGenre`} onClick={() => {setTitle('Action Movies'); setGenre(requests.fetchActionMovies)}}>Action</div>
      </div>
      <Row title={genreTitle} fetchUrl={genre} isLarge/>
    </div>
    </div>
  );
}

export default App;

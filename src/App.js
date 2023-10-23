import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon  from './logo.svg'
import MovieCard from './MovieCard';

// fdc62e3f 
const api = 'http://omdbapi.com?apikey=fdc62e3f ';
const movie1 = {
  
    "Title": "Spiderman the Verse",
    "Year": "2019–",
    "imdbID": "tt12122034",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjA2NmZhOGEtZTQ5OS00MDI0LTg4N2UtYTRmOTllM2I2NDlhXkEyXkFqcGdeQXVyNTU4OTE5Nzc@._V1_SX300.jpg"
  }


const App = () => {
   const [movies,setMovies] = useState([])
  const searchMovies =  async (title) =>{
    const response = await fetch(`${api}&s=${title}`) ;
    const data = await response.json();

    setMovies(data.search);

  }

  useEffect(()=> {
  searchMovies('Spiderman')
  },[]);

  return(
    <div className='app'>
    <h1>MovieCore</h1>
    <div className='search'>
      <input type='text' placeholder='Search for a movie' value='spiderman'
      onChange={()=> {}
    }
      />
      <img
      src={SearchIcon}
      onClick={()=>{}
    }
      />
    </div>

    {
      movies?.length > 0 
      ? (
        <div className='container'>
       {movies.map((movie)=>(
        <MovieCard movie = {movie} />
       ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>No Movies Found</h2>
          </div>
      )
    }
   
    </div>
  );
  
}

export default App;

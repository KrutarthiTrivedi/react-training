import { useParams } from "react-router-dom";

export const MovieDetails =()=>{
    const movieId = useParams();
    console.log(movieId);
  return <h1>Movie Details {movieId.movieId}</h1>
}; 

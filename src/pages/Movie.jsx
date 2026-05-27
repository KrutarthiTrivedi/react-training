import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../Components/Card";
import { getMovie } from "../services/GetService";
export const Movie = () => {
    const [data, setData] = useState([]);
    // const API="https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1";
    const getMovieData = async () => {
        try {
            const res =await getMovie(); 
            console.log(res.data.Search);  
            setData(res.data.Search);
        } catch (error) {
            console.error("Error fetching movie data:", error);
        }
    };
    useEffect(()=>{
        getMovieData();
    }, []);

    return (
    <ul className="container grid grid-four-col">
        {
            data.map((movie)=>{
                return <Card key={movie.imdbID} movieData={movie}/>
            })
        }
    </ul>
  )
}
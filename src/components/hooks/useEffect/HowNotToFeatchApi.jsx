import { useEffect, useState } from "react";
import "./Pokemon.css";

export const HowNotToFetchApi = () => {
    const [apiData, setApiData] = useState(null);
    const [loading,setLoding] = useState(true);
    const [error,setError] = useState("");
    const API = "https://pokeapi.co/api/v2/pokemon/pikachu";
    // const featchApidata = () => {
    //     fetch(API)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setApiData(data);
    //             setLoding(false);
    //         })
    //         .catch(((error) => {console.log(error);setLoding(false);setError(error)}))
    // }
    const featchPokemonData = async () => {
        try {
            const res = await fetch(API); 
            const data=await res.json();
            setApiData(data);
            setLoding(false);
        } catch (error) {
            console.log(error);
            setLoding(false);
            setError(error);
        }   
    } 
    useEffect(() => {
        featchPokemonData();
    }, [])
    console.log(apiData);
    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error.message}</h1>
    }
    // if (apiData) {
        return (
            <section className="container">
                <header>
                    Let`s catch Pokemon`
                </header>
                <ul className="card-demo">
                    <li className="pokemon-card">
                        <figure>
                            <img src={apiData.sprites.other.dream_world.front_default} alt={apiData.name} 
                            className="pokemon-image"
                            />
                        </figure>
                        <h1>{apiData.name}</h1>
                        <div className="grid-three-cols">
                            <p className="pokemon-info">
                                Height: {apiData.height}
                            </p>
                            <p className="pokemon-info">
                                Weight: {apiData.weight}
                            </p>
                            <p className="pokemon-info">
                                Speed: {apiData.stats[0].base_stat}
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
        );
    // }
};
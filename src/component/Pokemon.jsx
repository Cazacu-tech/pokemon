import {useState ,useEffect } from 'react';
import React from 'react';
import {  axios } from 'axios';

const dresseurPokemon = axios.create({
        baseUrl:"https://pokeapi.co/api/v2/berry/",
    })
 function Pokemon() {
    const [pokemons, setPokemons]= useState([]);

    useEffect(()=>{
        const getPokemons = () => {
            dresseurPokemon
            .get(`/pokemon`)
            .them((r) => setPokemons(r?.data))
            .catch ((err) => console.log(err))
        }
        getPokemons();
    })
    return <>
                <div>
                    {pokemons?.map((p) => (
                       <p> {p.name} </p>
                    ))}
                </div>
            </>
}
export default Pokemon;

import React, {useContext} from 'react'
import Movie from './Movie'
import {MovieContext} from '../store'
export default function List() {
const [movies, setMovies] = useContext(MovieContext);
const set = () => {
    setMovies(prevs => [...prevs, 
        {
            name : "İncir Reçeli",
            price: "$10",
            id: 4
        }
    ])
}
    return (
        <div>
            {
                movies.map(movie => (
                    <Movie key={movie.id} name={movie.name} price={movie.price} />
                ))
            }
            <button onClick={set}>Set</button>
        </div>
    )
}

import React, {useState, createContext} from 'react'
export const MovieContext = createContext(); 

export const Store = props => {
    const [list, setList] = useState([
        {
            name : "Harry Poter",
            price: "$10",
            id: 1
        },
        {
            name : "Game of Thrones",
            price: "$10",
            id: 2
        },
        {
            name : "Inception",
            price: "$10",
            id: 3
        }
    ]);
    return (
        <MovieContext.Provider value={[list, setList]}>
            {props.children}
        </MovieContext.Provider>
    )
}

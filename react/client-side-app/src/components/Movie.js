import React from 'react'

export default function Movie({name, price, id}) {
    return (
        <div>
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    )
}

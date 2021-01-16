<br />
<p align="center">
<h3 align="center">Client Side React App with Context API</h3>
</p>
<br />

```javascript
// Fisrtsly create a file name is Store.js

import React, { useState, createContext } from "react";
export const MovieContext = createContext();

export const Store = (props) => {
  const [list, setList] = useState([
    {
      name: "Harry Poter",
      price: "$10",
      id: 1,
    },
    {
      name: "Game of Thrones",
      price: "$10",
      id: 2,
    },
    {
      name: "Inception",
      price: "$10",
      id: 3,
    },
  ]);
  return (
    <MovieContext.Provider value={[list, setList]}>
      {props.children}
    </MovieContext.Provider>
  );
};

// This component is another component Provider
// Trick: MovieContext constant is a value carrier
// Value props react instance inside to special define, we use useState parameters pass another components
```

<hr/>

```javascript
// After that App.js

import React from "react";
import List from "./components/List";
import { Store } from "./store";
function App() {
  return (
    <Store>
      <div className="App">
        <List />
      </div>
    </Store>
  );
}

export default App;

// import to Store Provider
// Then using in return
```

<hr/>

```javascript
// And List.js file

import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "../store";
export default function List() {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.id} name={movie.name} price={movie.price} />
      ))}
    </div>
  );
}

// We using to data in Store, this like inside function.
// import MovieContext to pass React.useContext(MovieContext)
// Trick: After that define for using [movies, setMovies]
```

<hr />

```javascript
// Finally List.js file to set process

import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "../store";
export default function List() {
  const [movies, setMovies] = useContext(MovieContext);
  const set = () => {
    setMovies((prevs) => [
      ...prevs,
      {
        name: "İncir Reçeli",
        price: "$10",
        id: 4,
      },
    ]);
  };
  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.id} name={movie.name} price={movie.price} />
      ))}
      <button onClick={set}>Set</button>
    </div>
  );
}

// Create set function.
// setMovies arguments is previous state. ( prevs )
// [ ...prevs(there are state), new Object ]
```

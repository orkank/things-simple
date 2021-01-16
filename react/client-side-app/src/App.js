import React from 'react';
import List from './components/List'
import {Store} from './store'
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

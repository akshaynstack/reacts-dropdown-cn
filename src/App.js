import React from 'react';
import Dropdown from './Dropdown';

const App = () => {
  const items = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div className="App card">
      <h1>Should you use a dropdown?</h1>
      <Dropdown items={items} />
    </div>
  );
};

export default App;
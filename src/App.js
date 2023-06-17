import React from 'react';
import Dropdown from './Dropdown';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    document.title = 'Dropdown'; // Set your desired title here
  }, []);

  const items = ['Yes', 'Probably not'];

  return (
    <div className="App card">
      <h1 className='card__title'>Should you use a dropdown?</h1>
      <Dropdown items={items} />
    </div>
    
  );
};

export default App;
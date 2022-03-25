import React from 'react'
import { Box } from './components/descriptionBox/Box';
import { Title } from './components/title/Title';

function App() {
  return (
    <>
      <div className="box-back">
        <Title 
        title="React App Architecture"
        para="For Large Commecial Projects"
        />
        <Box />
      </div>
    </>
  );
}

export default App;

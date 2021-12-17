import React from 'react';
import Bords from './Components/Bords';

import './Components/styles/root.scss'

const App = () => {
  return (
    <div className='app' >
      <h1>Tic Toc Toe</h1>
      <Bords />
    </div>
  )
}

export default App


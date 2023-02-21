import React from 'react';
import './App.css';
import { HeaderComponent } from './Component/HeaderComponent';
import { MainContainer } from './Component/MainContainer';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <MainContainer/>
    </div>
  );
}

export default App;

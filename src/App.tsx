import React from 'react';
import './App.css';
import { HeaderComponent } from './Component/HeaderComponent';
import { MainContainer } from './Component/MainContainer';
import { WebRoutes } from './WebRoutes';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <WebRoutes/>
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import Menu from './components/Menu/Menu';
import CallsContainer from './components/Calls/CallsContainer';


function App() {
  return (
    <div className="App">
      <Menu/>
      <CallsContainer/>
    </div>
  );
}

export default App;

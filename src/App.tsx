import React from 'react';
import './App.css';
import { Buttons } from './components/JoinNow/Button';
import { JoinNow } from './components/JoinNow/JoinNow';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div >
      <Navbar />
      <JoinNow />

    </div>
  );
}

export default App;

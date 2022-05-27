import React from 'react';
import './App.css';
import MainArea from './components/MainArea';
import Sidebar from './components/Sidebar';
import MenuContext from './contexts/MenuContext';

function App() {
  return (
    
    <div className='App'>
      <MenuContext>
        <Sidebar />
        <MainArea />
      </MenuContext>
    </div>
  );
}

export default App;

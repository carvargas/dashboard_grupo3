import './App.css';
import MainArea from '../components/MainArea';
import Sidebar from '../components/Sidebar';
import AppContext from '../contexts/AppContext';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <AppContext>
          <Sidebar />
          <MainArea />
        </AppContext>
      </div>
    </BrowserRouter>
  );
}

export default App;

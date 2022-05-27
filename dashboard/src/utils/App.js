
import './App.css';
import MainArea from '../components/MainArea';
import Sidebar from '../components/Sidebar';
import MenuContext from '../contexts/MenuContext';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
        <div className='App'>
        <MenuContext>
            <Sidebar />
            <MainArea />
        </MenuContext>
        </div>
    </BrowserRouter>
  );
}

export default App;

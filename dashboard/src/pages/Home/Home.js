import HomeContainer from './HomeContainer'
import {HomeHeader, Saludo} from './HomeHeader';
import './Home.css';

const Home = () => {

  return (
    <HomeContainer>
        <HomeHeader>
            <Saludo>¡Hola Olivia!</Saludo>
        </HomeHeader>

    </HomeContainer>
  )
}

export default Home;
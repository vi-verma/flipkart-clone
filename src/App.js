
import './App.module.css';
import MainNavigaton from './navigation/MainNavigation';
import HeaderNavigation from './navigation/HeaderNavigation';
import Carousel from './component/Carousel';

function App() {
  return (
    <div className="App">
      <nav>
        < MainNavigaton/>
        <HeaderNavigation/>
      </nav>
      <Carousel/>
    <header> 
      </header>
    </div>
  );
}

export default App;

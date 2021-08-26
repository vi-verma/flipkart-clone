
import './App.module.css';
import MainNavigaton from './navigation/MainNavigation';
import HeaderNavigation from './navigation/HeaderNavigation';
// import Carousel from './component/Carousel';
import Carousel1 from './component/Carousel1';
import MultiItemCarousel from './ItemsTemplet/MultiItemCarousel';

function App() {
  return (
    <div className="App">
      <nav>
        < MainNavigaton/>
        <HeaderNavigation/>
      </nav>
    <header> 
      {/* <Carousel/> */}
      <Carousel1/>
      </header>
      <MultiItemCarousel/>
    </div>
  );
}

export default App;


import './App.module.css';
import MainNavigaton from './component/navigation/MainNavigation';
import HeaderNavigation from './component/navigation/HeaderNavigation';
// import Carousel from './component/Carousel';
import Carousel1 from './component/Carousel1';
import MultiItemCarousel from './component/ItemsCarousel/MultiItemCarousel';
import AboutUs from './component/footer/AboutUs';
import MIC2 from './component/ItemsCarousel/MIC2';
import PlusMember from './component/PlusMember';
import MIC3 from './component/ItemsCarousel/MIC3';

import { Route, Switch } from 'react-router-dom';
import Login from './component/login-signup/Login';
import Cart from './component/navigation/Cart';
import DeatiledItemCard from './component/ItemsCarousel/itemDetails/DetailedItemCard';
import { useState } from 'react';
import CartProvider from './component/store/CartProvider';
import Model from './component/model-overlay/Model';


function App() {
  const [viewItem, setViewItem] = useState({});



  return (
    <div className="App">
      <CartProvider>
        
        < MainNavigaton/>
        <HeaderNavigation/>
      <Switch>
        <Route path='/login'>
          <Model>
          <Login/>
          </Model>
        </Route>

        <Route path='/home' exact>
        {/* <Carousel/> */}
          <Carousel1/>
            <MIC3 setViewItem={setViewItem}/>
            <MultiItemCarousel/>
            <MIC2/>
        </Route>
        
        <Route path='/item'>
          <DeatiledItemCard viewItem={viewItem}/>
        </Route>

        <Route path='/cart' exact>
          <Cart/>
        </Route>

        <Route path='/home/:itemName'>
          <DeatiledItemCard/>
        </Route>

        <Route path='/plus-membership' exact>
          <PlusMember/>
        </Route>
        <Route path='*'>
          <MIC3 setViewItem={setViewItem}/>
          <MultiItemCarousel/>
          <MIC2/>
        </Route>
      </Switch>
        <AboutUs/>

        </CartProvider>
    </div>
  );
}

export default App;

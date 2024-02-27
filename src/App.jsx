import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory   from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from  './Pages/Login';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';

const App=()=> {
 
return(
    
<>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Shop/>}></Route>
  <Route path='/Men' element={<ShopCategory  banner={men_banner}category='men'/>}></Route>
  <Route path='/Women' element={<ShopCategory banner={women_banner}category='women'/>}></Route>
  <Route path='/Kids' element={<ShopCategory  banner={kid_banner} category='kid'/>}></Route>
  <Route path='/Product' element={<Product/>}></Route>
  <Route path='/product/:productId' element={<Product/>}></Route>
  <Route path='/Cart' element={<Cart/>}></Route>
  <Route path='/Login' element={<Login/>}></Route>
 
</Routes>
 <Footer/>

</BrowserRouter>

</>
)
}

export default App

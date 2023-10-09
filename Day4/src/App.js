import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App';
import './App.css';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { ShopContextProvider } from './context/shop-context';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import FAQ from './pages/Faq';
function App() {
  return (
    <>
      <ShopContextProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={< Login />} />
            <Route path='/Login' index element={< Login />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/Privacy' element={<Privacy />} />
            <Route path='/Terms' element={<Terms />} />
            <Route path='/Faq' element={<FAQ />} />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </>
  );
}
export default App;

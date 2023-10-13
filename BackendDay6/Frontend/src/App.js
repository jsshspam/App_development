import Login from "./Pages/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductForm from "./Pages/AddProducts";
import AdminAllproducts from "./Pages/AllProducts";
import EditProductForm from "./Pages/EditProducts";
import { Home } from './apages/Home';
import { Dashboard } from './apages/Dashboard';
import { Shop } from './apages/shop/shop';
import { Cart } from './apages/cart/cart';
import {PaymentPage } from './apages/Payment';
import Form  from './apages/Form';
import { ShopContextProvider } from './context/shop-context';
import Privacy from './apages/Privacy';
import Terms from './apages/Terms';
import FAQ from './apages/Faq';
function App() {
  return (
    <>
      <ShopContextProvider>
          <Routes>
            <Route index element={< Login />} />
            <Route path="/login" index element={<Login />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Form' element={<Form />} />
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/Privacy' element={<Privacy />} />
            <Route path='/PaymentPage' element={<PaymentPage />} />
            <Route path='/Terms' element={<Terms />} />
            <Route path='/Faq' element={<FAQ />} />
            <Route path="/AdminDashBoard" element={<Dashboard />} />
            <Route path="/AddProduct" element={<ProductForm />} />
            <Route path="/AllProduct" element={<AdminAllproducts />} />
            <Route path="/EditProduct" element={<EditProductForm />} />
          </Routes>
      </ShopContextProvider>
    </>
  );
}

export default App;

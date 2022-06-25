import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './routes/home/home.route';
import NavBar from './components/nav-bar/nav-bar.component';
import LoginPage from './routes/login/login.route';
import ProductList from './routes/product-list/product-list.route';
import ProductPage from './routes/product/product.route';
import RegisterPage from './routes/register/register.route';
import CartPage from './routes/cart/cart.route';
import { useSelector } from 'react-redux';
import EditUserProfile from './routes/edit-user-profile/edit-user-profile.route.jsx';
import UserProfile from './routes/user-profile/user-profile.route';
import UserOrders from './components/user-orders/user-orders.component';
import { useEffect, useState } from 'react';
import SidebarMobile from './components/side-bar-mobile/side-bar-mobile.component';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const user = useSelector((state) => state.user.currentUser);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route
        path='/'
        element={
          <>
            <NavBar toggle={toggleSidebar} user={user} />
            <SidebarMobile toggle={toggleSidebar} isOpen={isOpen} user={user} />
          </>
        }
      >
        <Route index element={<Home />} />
        <Route path='products/:category' element={<ProductList />} />
        <Route path='product/:id' element={<ProductPage />} />
        <Route path='cart' element={<CartPage />} />
        <Route path='edit-user' element={<EditUserProfile />} />
        <Route path='orders' element={<UserOrders />} />
        <Route path='user' element={<UserProfile />} />
        <Route
          path='login'
          element={user !== null ? <Home /> : <LoginPage />}
        />
        <Route
          path='register'
          element={user !== null ? <Home /> : <RegisterPage />}
        />
      </Route>
    </Routes>
  );
};

export default App;

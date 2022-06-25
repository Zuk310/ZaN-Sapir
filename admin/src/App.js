import { Route, Routes, useNavigate } from 'react-router-dom';

import './App.css';

import NavBar from './components/nav-bar/nav-bar.component';
import Sidebar from './components/side-bar/side-bar.component';
// import Topbar from './components/top-bar/top-bar.component';

import Home from './routes/home/home.route.jsx';
import UserList from './routes/user-list/user-list.route.jsx';
import User from './routes/user/user.route.jsx';
import NewUser from './routes/new-user/new-user.route.jsx';
import ProductList from './routes/product-list/product-list.route.jsx';
import Product from './routes/product/product.route.jsx';
import NewProduct from './routes/new-product/new-product.route.jsx';
import Login from './routes/login/login.route.jsx';
import Carousel from './routes/carousel/carousel.route';
import NewCarouselCard from './routes/new-carousel-card/new-carousel-card.route';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUsers } from './redux/server-calls/server-calls';
import CarouselCard from './routes/carousel-card/carousel-card.component';
import SidebarMobile from './components/side-bar-mobile/side-bar-mobile.component';
import { useState } from 'react';

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const admin = useSelector((state) => state.user.currentUser?.isAdmin);

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (admin === true) {
      navigate('/');
    } else {
      navigate('/login');
    }
  }, [admin]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Routes>
      {admin ? (
        <Route
          path='/'
          element={
            <>
              <NavBar toggle={toggleSidebar} admin={admin} />
              <Sidebar />
              <SidebarMobile
                isOpen={isOpen}
                toggle={toggleSidebar}
                admin={admin}
              />
              ;
            </>
          }
        >
          <Route index element={<Home />} />
          <Route path='/users' element={<UserList />} />
          <Route path='/user/:userId' element={<User />} />
          <Route path='/newUser' element={<NewUser />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/newproduct' element={<NewProduct />} />
          <Route path='/carousel' element={<Carousel />} />
          <Route path='/newCarouselCard' element={<NewCarouselCard />} />
          <Route path='/carousel/:cardId' element={<CarouselCard />} />
        </Route>
      ) : (
        <Route path='/login' element={<Login />} />
      )}
    </Routes>
  );
};

export default App;

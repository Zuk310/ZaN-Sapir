import Categories from "../../components/categories/categories.component";
import Products from "../../components/products/products.component";
import NewsLetter from "../../components/news-letter/news-letter.component";
import Footer from "../../components/footer/footer.component";
import Carousel from "../../components/carousel/carousel.component";
import { useEffect } from "react";
import { useDispatch} from 'react-redux';
import { loadHome } from "../../redux/server-functions/server-functions";


const Home = () =>{
  const dispatch = useDispatch();
  
  useEffect(()=>{
    loadHome(dispatch);
  },[])


  return(
    <>
        <Carousel/>
        <Categories/>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </>
  )
};

export default Home;
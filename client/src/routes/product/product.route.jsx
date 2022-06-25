import { Add, Remove } from '@mui/icons-material';
import { useEffect, useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Footer from '../../components/footer/footer.component';
import NewsLetter from '../../components/news-letter/news-letter.component';
import { publicRequest } from '../../utils/server/server-com.utils';
import {
  Container,
  Wrapper,
  ImageContainer,
  Image,
  InfoContainer,
  Title,
  Description,
  Price,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterColor,
  FilterSize,
  FilterSizeOption,
  AddContainer,
  AmountContainer,
  Amount,
  Button,
} from './product.styles';
import { addProduct } from '../../redux/cart/cart.slice';

const initialProduct = {
  product: {},
  amount: 1,
};

const ProductPage = () => {
  const storeDispatch = useDispatch();

  const reducer = (state, action) => {
    switch (action.type) {
      case 'setProduct':
        return { ...state, product: action.payload };
      case 'inc':
        return { ...state, amount: state.amount + 1 };
      case 'dec':
        return { ...state, amount: state.amount - 1 };

      default:
        return state;
    }
  };

  const [productState, dispatch] = useReducer(reducer, initialProduct);

  const location = useLocation();
  const productId = location.pathname.split('/')[2];

  const handelQuantity = (action) => {
    if (productState.amount === 0 && action === 'dec') return;
    dispatch({ type: action });
  };

  const handelSize = (action) => {
    dispatch({ type: action });
  };

  const getProduct = async (id) => {
    try {
      const res = await publicRequest.get(`/products/find/${id}`);
      dispatch({ type: 'setProduct', payload: res.data });
    } catch (error) {
    }
  };

  useEffect(() => {
    getProduct(productId);
  }, [productId]);

  const handelAddToCart = () => {
    const prod = productState.product;
    storeDispatch(
      addProduct({
        product: {...prod},
        quantity: productState.amount,
        price: productState.amount * productState.product.price,
        color: productState.color,
        size: productState.size,
        id: productState.product._id
      })
    );
  };



  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image src={productState.product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{productState.product.title}</Title>
          <Description>{productState.product.desc}</Description>
          <Price>{productState.product.price}$</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              {productState.product.color &&
                productState.product.color.map((color) => {
                  return <FilterColor color={color} key={color} />;
                })}
            </Filter>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <FilterSize>
                {productState.product.size &&
                  productState.product.size.map((size) => {
                    return (
                      <FilterSizeOption key={size}>{size}</FilterSizeOption>
                    );
                  })}
              </FilterSize>
            </Filter>
          </FilterContainer>
            {productState.product.inStock? (         <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handelQuantity('dec')} />
              <Amount>{productState.amount}</Amount>
              <Add onClick={() => handelQuantity('inc')} />
            </AmountContainer>
            <Button onClick={() => handelAddToCart()}>ADD TO CART</Button>
          </AddContainer>) : 
          (<h1>Out Of Stock</h1>) // need polishing
          }
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};
export default ProductPage;

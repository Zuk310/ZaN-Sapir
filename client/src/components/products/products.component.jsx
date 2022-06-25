import Product from '../product/product.component';

import { Container } from './products.styles';
import { useEffect, useReducer } from 'react';
import { getProductFromServer } from '../../utils/server/server-com.utils';

const initialProducts = {
  products: [],
  filteredProducts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'latest':
      return { ...state, filteredProducts: action.payload };
    case 'asc':
      return { ...state, filteredProducts: action.payload };
    case 'desc':
      return { ...state, filteredProducts: action.payload };
    case 'setFilteredProducts':
      return { ...state, filteredProducts: action.payload };
    case 'setProducts':
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

const Products = ({ categories, filters, sort }) => {
  const [productsState, dispatch] = useReducer(reducer, initialProducts);

  const getProducts = async (categories) => {
    const res = await getProductFromServer(categories);
    dispatch({ type: 'setProducts', payload: res });
  };

  const filterItems = (filter) => {
    if(filter.color === "Show All" || filter.size === "Show All"){
    dispatch({
        type: 'setFilteredProducts',
        payload: productsState.products
        
      });
    }
    else{
      dispatch({
        type: 'setFilteredProducts',
        payload: productsState.products.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        ),
      });
    }
  };

  const sortItem = (sort) =>{
    switch (sort) {
      case 'latest':
        dispatch({
          type: 'latest',
          payload: productsState.filteredProducts.sort(
            (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
          ),
        });
        break;
      case 'asc':
        dispatch({
          type: 'asc',
          payload: productsState.filteredProducts.sort(
            (a, b) => a.price - b.price
          ),
        });
        break;
      case 'desc':
        dispatch({
          type: 'desc',
          payload: productsState.filteredProducts.sort(
            (a, b) => b.price - a.price
          ),
        });
        break;
      default:
        dispatch({
          type: 'latest',
          payload: productsState.filteredProducts.sort(
            (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
          ),
        });
      }
  }

  useEffect(() => {
    getProducts(categories);
  }, [categories]);

  useEffect(() => {
  }, [productsState]);


  useEffect(() => {
    sortItem(sort);
  }, [sort]);

  useEffect(() => {
    categories && 
      filterItems(filters);
  }, [productsState.products, categories, filters]);

  return (
    <Container>
      {categories
        ? productsState.filteredProducts.map((item) => (
            <Product item={item} key={item._id} />
          ))
        : productsState.products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};
export default Products;

import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Footer from '../../components/footer/footer.component';
import NewsLetter from '../../components/news-letter/news-letter.component';
import Products from '../../components/products/products.component';
import {
  Container,
  Title,
  FilterContainer,
  Filter,
  FilterText,
  Select,
  Option,
} from './product-list.styles';

const ProductList = () => {
  const location = useLocation();
  const categories = location.pathname.split('/')[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('latest');

  const handleFilters = (e, type) => {
   if(type === "color"){ const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value.toLowerCase(),
    });
    }else{
          const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
    }
  };



  return (
    <Container>
      <Title>{categories.replace(/-/g, ' ')}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name='color' onChange={(e)=>handleFilters(e,"color")}>
            <Option disabled value="Material">Material</Option>
            <Option>Show All</Option>
            <Option>Gold</Option>
            <Option>Silver</Option>
            <Option>White</Option>
            <Option>Black</Option>
          </Select>
          <Select name='size' onChange={(e)=>handleFilters(e,"size")}>
            <Option disabled>Size</Option>
            <Option>Show All</Option>
            <Option>SM</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option disabled>Sort by</Option>
            <Option value='latest'>Latest</Option>
            <Option value='asc'>price (asc)</Option>
            <Option value='desc'>price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products categories={categories} filters={filters} sort={sort} />
      <NewsLetter />
      <Footer />
    </Container>
  );
};
export default ProductList;

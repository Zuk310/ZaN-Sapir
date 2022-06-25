import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import { Container, Circle, Info, Icon, Image } from "./product.styles";
import {useNavigate } from 'react-router-dom';

const Product = ({item}) =>{
  const navigate = useNavigate();
    return(
      <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
          <Icon>
            <ShoppingCartOutlinedIcon />
          </Icon>
          <Icon>
            <SearchOutlinedIcon onClick={()=>
              navigate(`/product/${item._id}`)
              }/>
          </Icon>
          <Icon>
            <FavoriteBorderOutlinedIcon/>
          </Icon>
        </Info>
      </Container>
    )
  };
  export default Product;
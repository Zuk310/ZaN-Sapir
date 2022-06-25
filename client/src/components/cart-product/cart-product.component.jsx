import { Add, Remove } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import {updateProductQuantity, updateAndDeleteProduct} from '../../redux/cart/cart.slice'

import {
    Product,
    ProductDetails,
    Image,
    Details,
    ProductName,
    ProductId,
    ProductColor,
    ProductSize,
    PriceDetails,
    ProductAmountContainer,
    ProductAmount,
    ProductPrice,
  } from "./cart-product.styles";





const CartProduct = ({product}) => {
  const dispatch = useDispatch();


  const handelQuantity = (action) => {
    let updatedQuantity;
    let updatedPrice;
    if (action === 'dec'){
      updatedQuantity= product.quantity - 1 ;
      updatedPrice = updatedQuantity * product.product.price;
      if(updatedQuantity === 0){
        dispatch(
          updateAndDeleteProduct({
            id: product.id,
            quantity: updatedQuantity,
            price: updatedPrice,
        })
    );
      }
    }
    else if (action === 'inc'){
      updatedQuantity= product.quantity + 1 ;
      updatedPrice = updatedQuantity * product.product.price;
    }
    dispatch(
      updateProductQuantity({
        id: product.id,
        quantity: updatedQuantity,
        price: updatedPrice,
      })
    );
  };
  

  





  return (
    <Product>
      <ProductDetails>
        <Image src={product.product.img}/>
        <Details>
          <ProductName>
            <b>Product: </b>{product.product.title}
          </ProductName>
          <ProductId>
            <b>ID: </b>{product.product.title}
          </ProductId>
          <ProductColor color={product.product.color} />
          <ProductSize>
            <b>Size: </b>{product.product.size}
          </ProductSize>
        </Details>
      </ProductDetails>
      <PriceDetails>
          <ProductAmountContainer>
              <Add onClick={() => handelQuantity('inc')}/>
              <ProductAmount>
                  {product.quantity}
              </ProductAmount>
              <Remove onClick={() => handelQuantity('dec')}/>
          </ProductAmountContainer>
          <ProductPrice>
                {product.price}
          </ProductPrice>
      </PriceDetails>
    </Product>
  );
};

export default CartProduct;

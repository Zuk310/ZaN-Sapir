import {ProductInfoItem,Label,ValueLabel} from './product-info.styles'

const ProductInfoComponent = ({label,data}) =>{
  return(
    <ProductInfoItem>
      <Label>{label}</Label>
      <ValueLabel>{data === true ? "Yes" : data}</ValueLabel>
    </ProductInfoItem>
  )
};

export default ProductInfoComponent;
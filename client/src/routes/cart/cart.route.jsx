import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';

import CartProduct from "../../components/cart-product/cart-product.component";
import Footer from "../../components/footer/footer.component";
import SummaryInfo from "../../components/summary-info/summary-info.component";
import {
  Container,
  Wrapper,
  Title,
  Top,
  Bottom,
  TopButton,
  TopTexts,
  TopText,
  Info,
  Summary,
  SummaryTitle,
  SummaryButton,

} from "./cart.styles";

const CartPage = () => {
  const navigate = useNavigate()
  const cart = useSelector(state => state.cart)

  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG:</Title>
        <Top>
          <TopButton onClick={()=>navigate('/')}>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping bag(2)</TopText>
            <TopText>Your wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECK OUT</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <CartProduct product={product} key={product.id}/>
              ))}
          </Info>
          <Summary>
            <SummaryTitle>
              ORDER SUMMARY: 
            </SummaryTitle>
            <SummaryInfo text="Subtital:" price={`$${cart.totalPrice}`}/>
            <SummaryInfo text="Estimate Shipping:" price="$ 5.90"/>
            <SummaryInfo text="Shipping Discount:" price="$ -5.90"/>
            <SummaryInfo text="Total:" price={`$${cart.totalPrice}`} type="total"/>
            <SummaryButton onClick={()=>alert("Soon to be added")}>CHECKOUT NOW</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};
export default CartPage;

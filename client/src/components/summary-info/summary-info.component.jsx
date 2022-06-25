import {
    SummaryItem,
    SummaryItemText,
    SummaryItemPrice
} from './summary-info.styles';



const SummaryInfo = ({text, price, type}) =>{
  return(
    <SummaryItem type={type}>
        <SummaryItemText>
        {text}
        </SummaryItemText>
        <SummaryItemPrice>
        {price}
        </SummaryItemPrice>
    </SummaryItem>
  )
};
export default SummaryInfo;
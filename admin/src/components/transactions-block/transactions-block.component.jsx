import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { userRequest } from '../../utils/requests.utils';
import dateFormat from "dateformat";



import {TransactionsBlockContainer,
TransactionsBlockTitle,
TransactionsBlockTable,
TransactionsBlockThead,
TransactionsBlockTr,
TransactionsBlockTh,
TransactionsBlockTbody,
TransactionsBlockTdUser,
TransactionsBlockName,
TransactionsBlockButton,TransactionsBlockTdDate,
TransactionsBlockTdAmount,
TransactionsBlockTdStatus
} from './transactions-block.styles.jsx'


const TransactionsBlock = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      const res = await userRequest.get('orders');
      setOrders(res.data);
    } catch {}
  };

  useEffect(() => {
    getOrders();
  }, []);

  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>;
  };
  return (
    <TransactionsBlockContainer>
      <TransactionsBlockTitle>Latest transactions</TransactionsBlockTitle>
      <TransactionsBlockTable>
        <TransactionsBlockThead>
          <TransactionsBlockTr>
            <TransactionsBlockTh>Customer</TransactionsBlockTh>
            <TransactionsBlockTh>Date</TransactionsBlockTh>
            <TransactionsBlockTh>Amount</TransactionsBlockTh>
            <TransactionsBlockTh>Status</TransactionsBlockTh>
          </TransactionsBlockTr>
        </TransactionsBlockThead>
        <TransactionsBlockTbody>
          {orders.map((order) => (
            <TransactionsBlockTr key={order._id}>
              <TransactionsBlockTdUser>
                <TransactionsBlockName onClick={()=>navigate(`/user/${order.userId}`)}>{order.userId}</TransactionsBlockName>
              </TransactionsBlockTdUser>
              <TransactionsBlockTdDate>{dateFormat(order.createdAt)}</TransactionsBlockTdDate>
              <TransactionsBlockTdAmount>${order.amount}</TransactionsBlockTdAmount>
              <TransactionsBlockTdStatus>
                <TransactionsBlockButton type={order.status}>{order.status}</TransactionsBlockButton>
              </TransactionsBlockTdStatus>
            </TransactionsBlockTr>
          ))}
        </TransactionsBlockTbody>
      </TransactionsBlockTable>
    </TransactionsBlockContainer>
  );
}

export default TransactionsBlock;

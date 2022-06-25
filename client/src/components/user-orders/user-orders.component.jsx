
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/server-functions/server-functions";
import UserOrdersList from "../user-order-info/user-order-info.compnent";
import { UserOrdersContainer, UserShow } from "./user-orders.styled";

const UserOrders = () =>{
  const disptach = useDispatch();
  const user = useSelector((state) =>
    state.user.currentUser
  );

    
  useEffect(()=>{
    getOrders(user._id, disptach)
  },[])

  return(
    <UserOrdersContainer>
      <UserShow>
        <UserOrdersList/>
      </UserShow>
    </UserOrdersContainer>
  )
};
export default UserOrders;
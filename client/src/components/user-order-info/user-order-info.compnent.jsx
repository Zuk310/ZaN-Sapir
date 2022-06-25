import { useSelector } from "react-redux";
import { DataGrid } from '@mui/x-data-grid';
import { 
  UserOrdersContainer, 
  OrderListItem,
  OrderListImg, 
  ViewOrderButton,
  OrderListGraphContainer
} from "./user-order-info.styles";
import { Link } from 'react-router-dom';

const UserOrdersList = () =>{
  
  const cUser = useSelector((state) =>
    state.user.userOrders
  );


  

  const columns = [
    { field: '_id', headerName: 'ID', width: 240 },
    {
      field: 'product',
      headerName: 'Product',
      width: 220,
      renderCell: (params) => {
        
        return (
          <OrderListItem>
            <OrderListImg src={params.row.productImg} alt='' />
            {params.row.productName}
          </OrderListItem>
        );
      },
    },
    { field: 'quantity', headerName: 'Quantity', width: 200 },
    {
      field: 'productPrice',
      headerName: 'Price ($)',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/product/' + params.row.productId}>
              <ViewOrderButton>View</ViewOrderButton>
            </Link>
          </>
        );
      },
    },
  ];

  return(
    <UserOrdersContainer>
      <OrderListGraphContainer>         
        <DataGrid
        autoHeight
          rows={cUser}
          disableSelectionOnClick
          columns={columns}
          getRowId={(row) => row._id}
        />
      </OrderListGraphContainer>
    </UserOrdersContainer>
  )
};
export default UserOrdersList;




import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';

import {
  deleteProduct,
  getProducts,
} from '../../redux/server-calls/server-calls';

import {
  ProductListContainer,
  ProductListGraphContainer,
  ProductListItem,
  ProductListImg,
  ProductListEdit,
  AddProduct,
} from './product-list.styles';

const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.product.products);
  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 240 },
    {
      field: 'product',
      headerName: 'Product',
      width: 220,
      renderCell: (params) => {
        return (
          <ProductListItem>
            <ProductListImg src={params.row.img} alt='' />
            {params.row.title}
          </ProductListItem>
        );
      },
    },
    { field: 'inStock', headerName: 'Stock', width: 200 },
    {
      field: 'price',
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
            <Link to={'/product/' + params.row._id}>
              <ProductListEdit>Edit</ProductListEdit>
            </Link>
            <DeleteOutline
              // className="productListDelete"
              style={{ color: 'red', cursor: 'pointer' }}
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <ProductListContainer>
      <AddProduct
        onClick={() => navigate('/newproduct', { replace: true })}
      >
        New Product
      </AddProduct>
      <ProductListGraphContainer>
        <DataGrid
          rows={products}
          disableSelectionOnClick
          columns={columns}
          getRowId={(row) => row._id}
          checkboxSelection
        />
      </ProductListGraphContainer>
    </ProductListContainer>
  );
}

export default ProductList;
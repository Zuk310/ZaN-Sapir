import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers, deleteUser } from '../../redux/server-calls/server-calls';

import {
  UserListContainer,
  UserListUser,
  UserListImg,
  UserListEdit,
  AddUser
} from './user-list.styles';

const UserList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  
  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);


  const handleDelete = (id) => {
    deleteUser(id, dispatch)
  };
  
  

  

  const columns = [
    { field: '_id', headerName: 'ID', width: 240 },
    {
      field: 'user',
      headerName: 'User',
      width: 220,
      renderCell: (params) => {
        return (
          <UserListUser>
            <UserListImg src={params.row.img || "https://secure.gravatar.com/avatar/8b7d16ceaa38755cec076564206a02e3?s=320&d=mm&r=g"} alt='userImg' />
            {params.row.username}
          </UserListUser>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/user/' + params.row._id}>
              <UserListEdit>Edit</UserListEdit>
            </Link>
            <DeleteOutline
              style={{ color: 'red', cursor: 'pointer' }}
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <UserListContainer>
      <AddUser
        onClick={() => navigate('/newUser', { replace: true })}
      >
        New User
      </AddUser>
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={12}
        checkboxSelection
      />
    </UserListContainer>
  );
}

export default UserList;
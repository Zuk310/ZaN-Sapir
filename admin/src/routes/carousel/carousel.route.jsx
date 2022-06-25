import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';

import {getCarouselCards, deleteCarouselCard } from '../../redux/server-calls/server-calls';

import {
  CarouselContainer,
  CardsListContainer,
  CardList,
  CardImg,
  CardEdit,
  AddCard,
  CardColor
} from './carousel.styles';

const Carousel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const carousel = useSelector((state) => state.carousel.cards);
  
  useEffect(() => {
    getCarouselCards(dispatch);
  }, [dispatch]);
  
  const handleDelete = (id) =>{
    deleteCarouselCard(id, dispatch)
  }

  

  const columns = [
    { field: '_id', headerName: 'ID', width: 220 },
    {
      field: 'img',
      headerName: 'Card Image',
      width: 120,
      align: 'center',
      renderCell: (params) => {
        return (
          <CardList>
            <CardImg src={params.row.img || "https://secure.gravatar.com/avatar/8b7d16ceaa38755cec076564206a02e3?s=320&d=mm&r=g"} alt='userImg' />
          </CardList>
        );
      },
    },
    { field: 'title', headerName: 'Title', width: 200 },
    {
      field: 'desc',
      headerName: 'Description',
      width: 220,
    },
    {
      field: 'bg',
      headerName: 'Background Color',
      width: 150,
      align: 'center',
      renderCell: (params) => {
        return (
          <CardList>

            <CardColor color={params.row.bg}/>
          </CardList>
        );
      },
    },
    {
      field: 'link',
      headerName: 'Link To',
      width: 120,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <CarouselContainer>
            <Link to={'/carousel/' + params.row._id}>
              <CardEdit>Edit</CardEdit>
            </Link>
            <DeleteOutline
              style={{ color: 'red', cursor: 'pointer' }}
              onClick={() => handleDelete(params.row._id)}
            />
          </CarouselContainer>
        );
      },
    },
  ];

  
  return (
    <CardsListContainer>
      <AddCard
        onClick={() => navigate('/newCarouselCard', { replace: true })}
      >
        New Card
      </AddCard>
      <DataGrid
        rows={carousel}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        checkboxSelection
      />
    </CardsListContainer>
  );
}

export default Carousel;
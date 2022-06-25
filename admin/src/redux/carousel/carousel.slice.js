import { createSlice } from '@reduxjs/toolkit';

export const carouselSlice = createSlice({
  name: 'carouselCards',
  initialState: {
    cards: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getCarouselCardsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getCarouselCardsSuccess: (state, action) => {
      state.isFetching = false;
      state.cards = action.payload;
    },
    getCarouselCardsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteCarouselCardsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteCarouselCardsSuccess: (state, action) => {
      state.isFetching = false;
      state.cards.splice(
        state.cards.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteCarouselCardsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateCarouselCardStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateCarouselCardSuccess: (state, action) => {
      state.isFetching = false;
      state.cards[
        state.cards.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.card; //fix
    },
    updateCarouselCardFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    addCarouselCardsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addCarouselCardsSuccess: (state, action) => {
      state.isFetching = false;
      state.cards.push(action.payload);
    },
    addCarouselCardsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getCarouselCardsStart,
  getCarouselCardsSuccess,
  getCarouselCardsFailure,
  deleteCarouselCardsStart,
  deleteCarouselCardsSuccess,
  deleteCarouselCardsFailure,
  updateCarouselCardStart,
  updateCarouselCardSuccess,
  updateCarouselCardFailure,
  addCarouselCardsStart,
  addCarouselCardsSuccess,
  addCarouselCardsFailure,
} = carouselSlice.actions;

export default carouselSlice.reducer;

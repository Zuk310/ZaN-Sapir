import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutFailed,
  logoutInit,
  logoutSuccess,
} from '../user/user.slice';

import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from '../product/product.slice.js';

import {
  getUsersStart,
  getUsersSuccess,
  getUsersFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  addUserStart,
  addUserSuccess,
  addUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  registerInit,
  registerSuccess,
  registerFailed,
} from '../users/users.slice.js';

import {
  getCarouselCardsStart,
  getCarouselCardsSuccess,
  getCarouselCardsFailure,
  updateCarouselCardStart,
  updateCarouselCardSuccess,
  updateCarouselCardFailure,
  addCarouselCardsStart,
  addCarouselCardsSuccess,
  addCarouselCardsFailure,
  deleteCarouselCardsStart,
  deleteCarouselCardsSuccess,
  deleteCarouselCardsFailure,
} from '../carousel/carousel.slice';

import { publicRequest, userRequest } from '../../utils/requests.utils';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutInit());
  try {
    const res = await publicRequest.post('/auth/logout');
    dispatch(logoutSuccess({}));
  } catch (error) {
    dispatch(logoutFailed());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerInit());
  try {
    const res = await publicRequest.post('/auth/register', user);
    dispatch(registerSuccess(res.data));
  } catch (error) {
    dispatch(registerFailed());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get('/products');
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/products/${id}`);
    //add deletion of photos from firebase
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    const res = await userRequest.put(`/products/${id}`, product);
    dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};

export const getUsers = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await userRequest.get('/users');
    dispatch(getUsersSuccess(res.data));
  } catch (err) {
    dispatch(getUsersFailure());
  }
};

export const getUser = async (id, dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await userRequest.get(`/users/${id}`);
    dispatch(getUsersSuccess(res.data));
  } catch (err) {
    dispatch(getUsersFailure());
  }
};

export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    const res = await userRequest.delete(`users/${id}`);
    //add deletion of photos from firebase
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};

export const updateUser = async (id, user, dispatch) => {
  dispatch(updateUserStart());
  try {
    const res = await userRequest.put(`users/${id}`, user);
    dispatch(updateUserSuccess({ id, user }));
  } catch (err) {
    dispatch(updateUserFailure());
  }
};

export const addUser = async (user, dispatch) => {
  dispatch(addUserStart());
  try {
    const res = await userRequest.post(`/users`, user);
    dispatch(addUserSuccess(res.data));
  } catch (err) {
    dispatch(addUserFailure());
  }
};

export const getCarouselCards = async (dispatch) => {
  dispatch(getCarouselCardsStart());
  try {
    const res = await publicRequest.get('/carousel/');
    dispatch(getCarouselCardsSuccess(res.data));
  } catch (err) {
    dispatch(getCarouselCardsFailure());
  }
};

export const updateCarouselCard = async (id, card, dispatch) => {
  dispatch(updateCarouselCardStart());
  try {
    await userRequest.put(`/carousel/${id}`, card);
    dispatch(updateCarouselCardSuccess({ id, card }));
  } catch (err) {
    dispatch(updateCarouselCardFailure());
  }
};

export const addCarouselCard = async (card, dispatch) => {
  dispatch(addCarouselCardsStart());
  try {
    const res = await userRequest.post(`/carousel/`, card);
    dispatch(addCarouselCardsSuccess(res.data));
  } catch (err) {
    dispatch(addCarouselCardsFailure());
  }
};

export const deleteCarouselCard = async (id, dispatch) => {
  dispatch(deleteCarouselCardsStart());
  try {
    const res = await userRequest.delete(`/carousel/${id}`);
    //add deletion of photos from firebase
    dispatch(deleteCarouselCardsSuccess(id));
  } catch (err) {
    dispatch(deleteCarouselCardsFailure());
  }
};

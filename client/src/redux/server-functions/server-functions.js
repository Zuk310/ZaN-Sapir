import {
  publicRequest,
  userRequest,
} from '../../utils/server/server-com.utils';

import {
  loginFailed,
  loginInit,
  loginSuccess,
  registerInit,
  registerSuccess,
  registerFailed,
  logoutInit,
  logoutSuccess,
  logoutFailed,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  userOrdersStart,
  userOrdersSuccess,
  userOrdersFailure,
  loading,
} from '../user/user.slice';

export const loadHome = async (dispatch) => {
  dispatch(loading());
};

export const login = async (dispatch, user, navigate) => {
  dispatch(loginInit());
  try {
    const res = await publicRequest.post('/auth/login', user);
    dispatch(loginSuccess(res.data));
    navigate('/');
  } catch (error) {
    dispatch(loginFailed());
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutInit());
  try {
    const res = await publicRequest.post('/auth/logout');
    dispatch(logoutSuccess(null));
  } catch (error) {
    dispatch(logoutFailed());
  }
};

export const register = async (dispatch, user, navigate) => {
  dispatch(registerInit());
  try {
    const res = await publicRequest.post('/auth/register', user);
    dispatch(registerSuccess(res.data));
    navigate('/');
  } catch (error) {
    dispatch(registerFailed());
  }
};

export const updateUser = async (id, user, dispatch) => {
  dispatch(updateUserStart());
  try {
    const res = await userRequest.put(`api/users/${id}`, user);
    dispatch(updateUserSuccess({ id, user }));
  } catch (err) {
    dispatch(updateUserFailure());
  }
};

export const getOrders = async (id, dispatch) => {
  dispatch(userOrdersStart());
  try {
    const res = await userRequest.get(`api/orders/find/${id}`);
    dispatch(userOrdersSuccess(res.data));
  } catch (err) {
    dispatch(userOrdersFailure());
  }
};

export const getProduct = async (id) => {
  try {
    const res = await publicRequest.get(`api/products/find/${id}`);
  } catch (err) {}
};

export const getCarouselCards = async (id) => {
  try {
    const res = userRequest.get(`api/carousel`);
    return res;
  } catch (err) {}
};

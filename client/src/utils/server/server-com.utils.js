import axios from 'axios';

const TOKEN = JSON.parse(
  JSON.parse(localStorage.getItem('persist:root'))?.user || '{}'
)?.currentUser?.accessToken;

export const getProductFromServer = async (categories) => {
  try {
    const res = await axios.get(
      categories
        ? `${process.env.REACT_APP_BASE_URL}/api/products?categories=${categories}`
        : `${process.env.REACT_APP_BASE_URL}/api/products`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const publicRequest = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api`,
});

export const userRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});

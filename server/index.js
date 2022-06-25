const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const apiRoute = require('./routes/api.route');
const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');
const productRoute = require('./routes/product.route');
const cartRoute = require('./routes/cart.route');
const orderRoute = require('./routes/order.route');
const carouselRoute = require('./routes/carousel.route');

const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('DB connection successful'))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());

app.get('/test', (req, res) => {
  res.send('app is running');
});

app.use('/api', apiRoute);
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);
app.use('/api/carousel', carouselRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);

app.listen(PORT, () => {
  console.log('Server is running on port:', PORT);
});

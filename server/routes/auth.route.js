const router = require('express').Router();
const User = require('../models/user.model');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

//Register
router.post('/register', async (req, res) => {
  // console.log(process.env.NO_PHOTO);
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
    fname: req.body.fname,
    adress: req.body.adress,
    lname: req.body.lname,
    gender: req.body.gender,
    dateOfBirth: req.body.dateOfBirth,
    city: req.body.city,
    phone: req.body.phone,
    occupation: req.body.occupation,
    img: req.body.img || process.env.NO_PHOTO,
  });

  try {
    const savedUser = await newUser.save();
    console.log(savedUser);
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Login
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    !user && res.status(401).json('Wrong cerdentails');

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const decrypedPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    decrypedPassword !== req.body.password &&
      res.status(401).json('Wrong cerdentails!');

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: '3d' }
    );

    const { password, ...others } = user._doc;
    res.status(201).json({ ...others, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

//Log out
router.post('/logout', async (req, res) => {
  res.status(200).json();
});

module.exports = router;

const router = require('express').Router();
const CarouselCard = require('../models/carousel.model');
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAdmin,
} = require('../utils/verify-token.utils');

//CREATE
router.post('/', verifyTokenAdmin, async (req, res) => {
  const newCarouselCard = new CarouselCard(req.body);

  try {
    const savedCarouselCard = await newCarouselCard.save();
    res.status(200).json(savedCarouselCard);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put('/:id', verifyTokenAdmin, async (req, res) => {
  try {
    const updatedCarouselCard = await CarouselCard.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCarouselCard);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete('/:id', verifyTokenAdmin, async (req, res) => {
  try {
    await CarouselCard.findByIdAndDelete(req.params.id);
    res.status(200).json('Carousel card has been deleted...');
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PRODUCT
router.get('/find/:id', async (req, res) => {
  try {
    const CarouselCard = await CarouselCard.findById(req.params.id);
    res.status(200).json(CarouselCard);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL PRODUCTS
router.get('/', async (req, res) => {
  try {
    const cards = await CarouselCard.find();
    res.status(200).json(cards);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

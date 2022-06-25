const mongoose = require('mongoose');

const CarouselSchema = new mongoose.Schema(
  {
    // id: { type: String, required: true },
    bg: { type: String, default: '#EAEEF5' },
    desc: { type: String, required: true },
    title: { type: String, trim: true },
    img: { type: String, required: true },
    link: { type: String, default: '' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('CarouselSchema', CarouselSchema);

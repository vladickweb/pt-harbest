'use strict';

import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  description: { type: String },
  SKU: { type: String, required: true, index: true, unique: true },
  active: { type: Boolean },
  price: { type: Number },
  name: { type: String },
});

export default mongoose.model('Product', ProductSchema);

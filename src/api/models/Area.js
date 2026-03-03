const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const areaSchema = new Schema(
  {
    name: { type: String, required: true }
  },
  {
    timestamps: true,
    collections: 'areas'
  }
);

const Area = mongoose.model('areas', areaSchema, 'areas');

module.exports = Area;

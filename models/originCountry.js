const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OriginCountry = new Schema(
  {
    name: { type: String, required: true },
    country_flag: { type: String, required: true },
    moto: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("origin_countries", OriginCountry);

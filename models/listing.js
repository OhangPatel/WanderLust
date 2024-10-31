const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default: "https://unsplash.com/illustrations/worker-character-on-with-climbing-equipment-conduct-roofing-works-repair-home-tile-house-rooftop-roofer-man-with-work-tools-renovate-residential-building-or-cottage-cartoon-vector-illustration-JJ51To-e-tc",
    set: (v) => v === "" ? "https://unsplash.com/illustrations/worker-character-on-with-climbing-equipment-conduct-roofing-works-repair-home-tile-house-rooftop-roofer-man-with-work-tools-renovate-residential-building-or-cottage-cartoon-vector-illustration-JJ51To-e-tc" : v,
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
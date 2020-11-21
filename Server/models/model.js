// Importera Mongoose.
let mongoose = require("mongoose");
// Skapa en Mongodbschema.
let Schema = mongoose.Schema;
let restaurangsSchema = new Schema({
  title: String,
  sorts: String,
  price: Number,
  image: String,
  included: String,
});

// Exportera Mongodbscheman.
module.exports = mongoose.model(
  "restaurangdata",
  restaurangsSchema,
  "restaurangdata"
);

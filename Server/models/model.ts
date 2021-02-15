// Importera Mongoose.
import { Model, Schema, model } from "mongoose";
import { IFood } from "../typings/List";

// Skapa en Mongodbschema.
let restaurangsSchema: Schema = new Schema(
  {
    title: String,
    sorts: String,
    price: Number,
    image: String,
    included: String,
  },
  { collection: "restaurangdata" }
);

// Exportera Mongodbscheman.
export const Food: Model<IFood> = model<IFood>(
  "restaurangdata",
  restaurangsSchema,
  "restaurangdata"
);

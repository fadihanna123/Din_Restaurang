import { Document } from "mongoose";

export interface IFood extends Document {
  title: string;
  sorts: string;
  price: number;
  image: string;
  included: string;
}

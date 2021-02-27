import mongoose from "mongoose";
import "dotenv/config";

// Anslutning till Mongodbdatabasen.
mongoose.connect(
  <string>process.env.DATABASE_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  },
  () => console.log(`Connected... \n`)
);

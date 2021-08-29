import "dotenv/config";

import mongoose from "mongoose";

// Anslutning till Mongodbdatabasen.
mongoose.connect(<string>process.env.DATABASE_URL, () =>
  console.log(` \n Connected... \n `)
);

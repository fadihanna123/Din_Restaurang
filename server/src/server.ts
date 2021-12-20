import "dotenv/config";

import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import routes from "./api/routes";

const server = express();

const { SERVERPORT, ALLOWED_URL } = process.env;

// Anslutning till Mongodbdatabasen.
mongoose.connect(<string>process.env.DATABASE_URL, () =>
  console.log(` \n Connected... \n `)
);

var whiteList: string[] = [ALLOWED_URL as string];

const corsOptions = {
  origin: (origin: any, callback: any) => {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// Inställningar
server.use(cors(corsOptions));
server.use(express.json());
server.use(routes);

const port: number = parseInt(<string>SERVERPORT);
server.listen(port, () =>
  console.log(`\n Servern startar på port ${port} \n `)
);

import cors from "cors";
import express from "express";
import routes from "../api/routes";

import { server } from "./GlobalSettings";

// Inställningar
server.use(cors());
server.use(express.json());
server.use(routes);

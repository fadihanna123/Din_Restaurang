import cors from "cors";
import express from "express";

import { server } from "./GlobalSettings";

// Inställningar
server.use(cors());
server.use(express.json());

import express from "express";

import "./config/database";
import "./config/settings";
import routes from "./api/routes";
import { server } from "./config/GlobalSettings";


server.use(routes);

const port: number = 5000;
server.listen(port, () => console.log(`Servern startar på port ${port}`));

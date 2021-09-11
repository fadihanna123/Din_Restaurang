import "./config";

import { server } from "./config";

const { SERVERPORT } = process.env;
const port: number = parseInt(<string>SERVERPORT);
server.listen(port, () =>
  console.log(`\n Servern startar på port ${port} \n `)
);

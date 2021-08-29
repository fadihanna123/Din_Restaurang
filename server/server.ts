import "./config";

import { server } from "./config";

const port: number = 5000;
server.listen(port, () =>
  console.log(`\n Servern startar på port ${port} \n `)
);

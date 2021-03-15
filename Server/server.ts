import "./config";
import routes from "./api/routes";
import { server } from "./config";

server.use(routes);

const port: number = 5000;
server.listen(port, () => console.log(`Servern startar på port ${port}`));

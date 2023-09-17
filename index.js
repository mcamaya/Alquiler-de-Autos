import { config } from "dotenv";
import Server from "./models/Server.js";
import routes from "./routes/index.js";
import { errorHandler, logErrors, isBoomError } from "./middlewares/error.handler.js";


config();

const server = new Server();
server.routing(routes);

server.app.use(logErrors);
server.app.use(isBoomError);
server.app.use(errorHandler);
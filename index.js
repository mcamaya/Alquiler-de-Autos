import { config } from "dotenv";
import Server from "./models/Server.js";

config();
const server = new Server();
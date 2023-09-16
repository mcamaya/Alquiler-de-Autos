import express from "express";
import cors from "cors";
import databaseConnection from "../config/database.js";

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 5000;
        this.listen();
        this.dbOnline();
        this.middlewares()
    }

    async dbOnline(){
        await databaseConnection();
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server running on http://localhost:${this.port}`);
        });
    }
}

export default Server;
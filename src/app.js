import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { initDbConnection } from "./database.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api-swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, async (error) => {
    if (!error) {
        await initDbConnection();
        console.log("Server is Successfully Running, and App is listening on port " + PORT)
    } else {
        console.log("Error occurred, server can't start", error);
    }
});
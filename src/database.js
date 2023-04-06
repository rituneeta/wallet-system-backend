import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

export const sequelize = new Sequelize("walletSystem", process.env.DB_USER_NAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: Number(process.env.DB_PORT),
    define: { timestamps: true },
});

export const initDbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database Connection has been established successfully.")
    } catch (error) {
        console.error('Unable to connect to the database: ', error);
        throw error;
    }
}